'use client'

import { useEffect, useState } from 'react'
import { Calendar, TrendingUp, TrendingDown, DollarSign, Target, BarChart3, ChevronRight } from 'lucide-react'
import { LoadingSpinner, EmptyState, Badge } from '@/components/ui/Common'
import { fetchOrcamentos, Orcamento } from '@/lib/supabase'
import { formatCurrency, formatPercent, calcConversionRate } from '@/lib/utils'

interface ResumoMensal {
  mes: string
  totalOrcamentos: number
  totalFechados: number
  totalPerdidos: number
  valorProposto: number
  valorFechado: number
  taxaConversao: number
}

export default function ResumoPage() {
  const [resumos, setResumos] = useState<ResumoMensal[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedMes, setSelectedMes] = useState<string | null>(null)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      setLoading(true)
      const data = await fetchOrcamentos()
      const resumo = processarResumo(data)
      setResumos(resumo)
      setError(null)
    } catch (err) {
      console.error('Erro ao carregar dados:', err)
      setError('Erro ao carregar dados')
    } finally {
      setLoading(false)
    }
  }

  const processarResumo = (orcamentos: Orcamento[]): ResumoMensal[] => {
    const mesesMap = new Map<string, ResumoMensal>()

    orcamentos.forEach(orc => {
      const existing = mesesMap.get(orc.mes) || {
        mes: orc.mes,
        totalOrcamentos: 0,
        totalFechados: 0,
        totalPerdidos: 0,
        valorProposto: 0,
        valorFechado: 0,
        taxaConversao: 0
      }

      existing.totalOrcamentos++
      existing.valorProposto += orc.valor_proposto
      
      if (orc.status === 'Fechado') {
        existing.totalFechados++
        existing.valorFechado += orc.valor_fechado
      } else {
        existing.totalPerdidos++
      }

      existing.taxaConversao = calcConversionRate(existing.totalFechados, existing.totalOrcamentos)
      mesesMap.set(orc.mes, existing)
    })

    return Array.from(mesesMap.values()).sort((a, b) => {
      const [mesA, anoA] = a.mes.split('/')
      const [mesB, anoB] = b.mes.split('/')
      const dateA = new Date(parseInt(anoA), parseInt(mesA) - 1)
      const dateB = new Date(parseInt(anoB), parseInt(mesB) - 1)
      return dateB.getTime() - dateA.getTime()
    })
  }

  const totais = resumos.reduce((acc, r) => ({
    totalOrcamentos: acc.totalOrcamentos + r.totalOrcamentos,
    totalFechados: acc.totalFechados + r.totalFechados,
    totalPerdidos: acc.totalPerdidos + r.totalPerdidos,
    valorProposto: acc.valorProposto + r.valorProposto,
    valorFechado: acc.valorFechado + r.valorFechado,
  }), {
    totalOrcamentos: 0,
    totalFechados: 0,
    totalPerdidos: 0,
    valorProposto: 0,
    valorFechado: 0,
  })

  const taxaConversaoGeral = calcConversionRate(totais.totalFechados, totais.totalOrcamentos)

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold font-heading text-white">
          Resumo Mensal
        </h1>
        <p className="text-dark-400 mt-1">
          Visão consolidada dos orçamentos por mês
        </p>
      </div>

      {/* Totais Gerais */}
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="glass-card p-4 lg:p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-primary-400" />
            </div>
          </div>
          <p className="text-2xl lg:text-3xl font-bold text-white">{totais.totalOrcamentos}</p>
          <p className="text-sm text-dark-400">Total Orçamentos</p>
        </div>

        <div className="glass-card p-4 lg:p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-emerald-400" />
            </div>
          </div>
          <p className="text-2xl lg:text-3xl font-bold text-emerald-400">{totais.totalFechados}</p>
          <p className="text-sm text-dark-400">Fechados</p>
        </div>

        <div className="glass-card p-4 lg:p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center">
              <TrendingDown className="w-5 h-5 text-red-400" />
            </div>
          </div>
          <p className="text-2xl lg:text-3xl font-bold text-red-400">{totais.totalPerdidos}</p>
          <p className="text-sm text-dark-400">Perdidos</p>
        </div>

        <div className="glass-card p-4 lg:p-6">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-primary-400" />
            </div>
          </div>
          <p className="text-xl lg:text-2xl font-bold text-white">{formatCurrency(totais.valorFechado)}</p>
          <p className="text-sm text-dark-400">Valor Total Fechado</p>
        </div>

        <div className="glass-card p-4 lg:p-6 col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
              <Target className="w-5 h-5 text-amber-400" />
            </div>
          </div>
          <p className="text-2xl lg:text-3xl font-bold text-amber-400">{formatPercent(taxaConversaoGeral)}</p>
          <p className="text-sm text-dark-400">Taxa de Conversão</p>
        </div>
      </div>

      {/* Tabela de Resumo */}
      <div className="glass-card overflow-hidden">
        <div className="p-4 lg:p-6 border-b border-dark-700">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-primary-400" />
            Resumo por Mês
          </h2>
        </div>

        {resumos.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Mês</th>
                  <th className="text-center">Orçamentos</th>
                  <th className="text-center">Fechados</th>
                  <th className="text-center">Perdidos</th>
                  <th className="text-right">Valor Proposto</th>
                  <th className="text-right">Valor Fechado</th>
                  <th className="text-center">Taxa Conversão</th>
                </tr>
              </thead>
              <tbody>
                {resumos.map((resumo) => (
                  <tr 
                    key={resumo.mes} 
                    className={`cursor-pointer transition-colors ${
                      selectedMes === resumo.mes ? 'bg-primary-500/10' : ''
                    }`}
                    onClick={() => setSelectedMes(selectedMes === resumo.mes ? null : resumo.mes)}
                  >
                    <td>
                      <div className="flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                          <Calendar className="w-4 h-4 text-primary-400" />
                        </span>
                        <span className="font-semibold text-white">{resumo.mes}</span>
                      </div>
                    </td>
                    <td className="text-center">
                      <span className="px-3 py-1 rounded-lg bg-dark-800 text-dark-300 font-medium">
                        {resumo.totalOrcamentos}
                      </span>
                    </td>
                    <td className="text-center">
                      <Badge variant="success">
                        {resumo.totalFechados}
                      </Badge>
                    </td>
                    <td className="text-center">
                      <Badge variant="danger">
                        {resumo.totalPerdidos}
                      </Badge>
                    </td>
                    <td className="text-right text-dark-300">
                      {formatCurrency(resumo.valorProposto)}
                    </td>
                    <td className="text-right font-semibold text-primary-400">
                      {formatCurrency(resumo.valorFechado)}
                    </td>
                    <td className="text-center">
                      <div className="inline-flex items-center gap-2">
                        <div className="w-20 h-2 bg-dark-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full transition-all duration-500"
                            style={{ width: `${resumo.taxaConversao}%` }}
                          />
                        </div>
                        <span className={`text-sm font-medium ${
                          resumo.taxaConversao >= 70 ? 'text-emerald-400' :
                          resumo.taxaConversao >= 50 ? 'text-amber-400' :
                          'text-red-400'
                        }`}>
                          {formatPercent(resumo.taxaConversao)}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="border-t-2 border-dark-600">
                <tr className="bg-dark-800/50">
                  <td className="font-bold text-white">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500/30 to-emerald-500/30 flex items-center justify-center">
                        <BarChart3 className="w-4 h-4 text-white" />
                      </span>
                      TOTAL GERAL
                    </div>
                  </td>
                  <td className="text-center font-bold text-white">{totais.totalOrcamentos}</td>
                  <td className="text-center font-bold text-emerald-400">{totais.totalFechados}</td>
                  <td className="text-center font-bold text-red-400">{totais.totalPerdidos}</td>
                  <td className="text-right font-bold text-dark-300">{formatCurrency(totais.valorProposto)}</td>
                  <td className="text-right font-bold text-primary-400">{formatCurrency(totais.valorFechado)}</td>
                  <td className="text-center font-bold text-amber-400">{formatPercent(taxaConversaoGeral)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        ) : (
          <EmptyState
            title="Nenhum dado disponível"
            description="Adicione orçamentos para ver o resumo mensal"
          />
        )}
      </div>

      {/* Performance Card */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">📊 Performance Geral</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-dark-400">Ticket Médio (Fechado)</span>
              <span className="text-white font-semibold">
                {totais.totalFechados > 0 
                  ? formatCurrency(totais.valorFechado / totais.totalFechados)
                  : formatCurrency(0)
                }
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-dark-400">Ticket Médio (Proposto)</span>
              <span className="text-white font-semibold">
                {totais.totalOrcamentos > 0 
                  ? formatCurrency(totais.valorProposto / totais.totalOrcamentos)
                  : formatCurrency(0)
                }
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-dark-400">Conversão de Valor</span>
              <span className={`font-semibold ${
                totais.valorProposto > 0 
                  ? (totais.valorFechado / totais.valorProposto) >= 0.5 ? 'text-emerald-400' : 'text-amber-400'
                  : 'text-dark-400'
              }`}>
                {totais.valorProposto > 0 
                  ? formatPercent((totais.valorFechado / totais.valorProposto) * 100)
                  : '0%'
                }
              </span>
            </div>
          </div>
        </div>

        <div className="glass-card p-6">
          <h3 className="text-lg font-semibold text-white mb-4">🎯 Metas e Objetivos</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-dark-400">Taxa de Conversão</span>
                <span className="text-white">{formatPercent(taxaConversaoGeral)} / 70%</span>
              </div>
              <div className="w-full h-3 bg-dark-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-primary-500 to-emerald-500 rounded-full transition-all duration-700"
                  style={{ width: `${Math.min(taxaConversaoGeral / 70 * 100, 100)}%` }}
                />
              </div>
            </div>
            <div className="p-4 rounded-xl bg-dark-800/50 border border-dark-700">
              <p className="text-sm text-dark-400">
                {taxaConversaoGeral >= 70 
                  ? '🎉 Excelente! Você está acima da meta de conversão!'
                  : taxaConversaoGeral >= 50
                  ? '👍 Bom trabalho! Continue assim para atingir a meta.'
                  : '💪 Há espaço para melhorias. Foque na qualificação dos leads.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
