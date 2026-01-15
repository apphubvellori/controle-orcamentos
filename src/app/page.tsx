'use client'

import { useEffect, useState } from 'react'
import { KPICard } from '@/components/ui/KPICard'
import { ChartCard, MonthlyBarChart, StatusDonutChart } from '@/components/ui/Charts'
import { LoadingSpinner, EmptyState } from '@/components/ui/Common'
import { fetchOrcamentos, Orcamento } from '@/lib/supabase'
import { formatCurrency, calcConversionRate } from '@/lib/utils'
import { TrendingUp, TrendingDown, Target, DollarSign, FileText, Activity } from 'lucide-react'

interface Stats {
  totalFechado: number
  totalPerdido: number
  fechados: number
  perdidos: number
  total: number
  taxaConversao: number
}

interface ResumoMensal {
  [key: string]: {
    mes: string
    totalFechado: number
    totalPerdido: number
    fechados: number
    perdidos: number
  }
}

export default function DashboardPage() {
  const [orcamentos, setOrcamentos] = useState<Orcamento[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      const data = await fetchOrcamentos()
      setOrcamentos(data)
      setError(null)
    } catch (err) {
      console.error('Erro ao carregar dados:', err)
      setError('Erro ao carregar dados. Verifique a conexão com o Supabase.')
    } finally {
      setLoading(false)
    }
  }

  // Calcular estatísticas
  const stats: Stats = orcamentos.reduce(
    (acc, orc) => {
      if (orc.status === 'Fechado') {
        acc.fechados++
        acc.totalFechado += orc.valor_fechado || 0
      } else {
        acc.perdidos++
        acc.totalPerdido += orc.valor_proposto || 0
      }
      acc.total++
      return acc
    },
    { totalFechado: 0, totalPerdido: 0, fechados: 0, perdidos: 0, total: 0, taxaConversao: 0 }
  )
  stats.taxaConversao = calcConversionRate(stats.fechados, stats.total)

  // Calcular resumo mensal para gráficos
  const resumoMensal: ResumoMensal = orcamentos.reduce((acc, orc) => {
    const mes = orc.mes
    if (!acc[mes]) {
      acc[mes] = { mes, totalFechado: 0, totalPerdido: 0, fechados: 0, perdidos: 0 }
    }
    if (orc.status === 'Fechado') {
      acc[mes].fechados++
      acc[mes].totalFechado += orc.valor_fechado || 0
    } else {
      acc[mes].perdidos++
      acc[mes].totalPerdido += orc.valor_proposto || 0
    }
    return acc
  }, {} as ResumoMensal)

  // Dados para gráfico de barras (ordenado por mês)
  const barChartData = Object.values(resumoMensal)
    .sort((a, b) => {
      const [mA, yA] = a.mes.split('/').map(Number)
      const [mB, yB] = b.mes.split('/').map(Number)
      return yA - yB || mA - mB
    })
    .map((item) => ({
      mes: item.mes,
      fechado: item.totalFechado,
      perdido: item.totalPerdido,
    }))

  // Dados para gráfico de pizza
  const pieChartData = [
    { name: 'Fechados', value: stats.fechados, color: '#10b981' },
    { name: 'Perdidos', value: stats.perdidos, color: '#ef4444' },
  ]

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <EmptyState
          icon={<Activity className="w-10 h-10 text-red-400" />}
          title="Erro ao carregar dados"
          description={error}
        />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold font-heading text-white">
            Dashboard
          </h1>
          <p className="text-dark-400 mt-1">
            Visão geral dos seus orçamentos
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-dark-400">
          <FileText className="w-4 h-4" />
          <span>{stats.total} orçamentos cadastrados</span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <KPICard
          title="Total Fechado"
          value={stats.totalFechado}
          subtitle="Vendas concluídas"
          variant="success"
          trend="up"
          icon={<DollarSign className="w-8 h-8" />}
          delay={0}
        />
        <KPICard
          title="Total Perdido"
          value={stats.totalPerdido}
          subtitle="Oportunidades perdidas"
          variant="danger"
          trend="down"
          icon={<TrendingDown className="w-8 h-8" />}
          delay={100}
        />
        <KPICard
          title="Taxa de Conversão"
          value={`${stats.taxaConversao.toFixed(1)}%`}
          subtitle={`${stats.fechados} de ${stats.total}`}
          variant="info"
          icon={<Target className="w-8 h-8" />}
          delay={200}
        />
        <KPICard
          title="Ticket Médio"
          value={stats.fechados > 0 ? stats.totalFechado / stats.fechados : 0}
          subtitle="Por orçamento fechado"
          variant="warning"
          icon={<TrendingUp className="w-8 h-8" />}
          delay={300}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ChartCard title="📈 Evolução Mensal">
          {barChartData.length > 0 ? (
            <MonthlyBarChart data={barChartData} />
          ) : (
            <EmptyState
              title="Sem dados"
              description="Adicione orçamentos para ver o gráfico"
            />
          )}
        </ChartCard>
        
        <ChartCard title="🥧 Distribuição por Status">
          {stats.total > 0 ? (
            <StatusDonutChart data={pieChartData} />
          ) : (
            <EmptyState
              title="Sem dados"
              description="Adicione orçamentos para ver o gráfico"
            />
          )}
        </ChartCard>
      </div>

      {/* Recent Activity */}
      <div className="glass-card p-6 animate-slide-up" style={{ animationDelay: '400ms' }}>
        <h3 className="text-lg font-semibold text-white mb-6">📋 Últimos Orçamentos</h3>
        {orcamentos.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Cliente</th>
                  <th>Valor</th>
                  <th>Status</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {orcamentos.slice(0, 5).map((orc) => (
                  <tr key={orc.id}>
                    <td className="font-medium text-white">{orc.cliente}</td>
                    <td className="text-primary-400 font-semibold">
                      {formatCurrency(orc.status === 'Fechado' ? orc.valor_fechado : orc.valor_proposto)}
                    </td>
                    <td>
                      <span className={`badge ${orc.status === 'Fechado' ? 'badge-success' : 'badge-danger'}`}>
                        {orc.status === 'Fechado' ? '✅' : '❌'} {orc.status}
                      </span>
                    </td>
                    <td className="text-dark-400">{orc.mes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyState
            title="Nenhum orçamento"
            description="Adicione seu primeiro orçamento"
          />
        )}
      </div>
    </div>
  )
}
