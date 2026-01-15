'use client'

import { useEffect, useState } from 'react'
import { Plus, Edit2, Trash2, Search, Filter, X, Check, Calendar, User, DollarSign, CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input, Select, Checkbox } from '@/components/ui/Form'
import { Modal } from '@/components/ui/Modal'
import { LoadingSpinner, EmptyState, Badge } from '@/components/ui/Common'
import { fetchOrcamentos, createOrcamento, updateOrcamento, deleteOrcamento, Orcamento, OrcamentoInput } from '@/lib/supabase'
import { formatCurrency, formatDate } from '@/lib/utils'

const statusOptions = [
  { value: '', label: 'Selecione...' },
  { value: 'Fechado', label: 'Fechado' },
  { value: 'Perdido', label: 'Perdido' },
]

const initialFormData: OrcamentoInput = {
  data: new Date().toISOString().split('T')[0],
  mes: '',
  cliente: '',
  valor_proposto: 0,
  valor_fechado: 0,
  status: 'Fechado',
  parcelado: false,
  parcelas: 1,
}

export default function OrcamentosPage() {
  const [orcamentos, setOrcamentos] = useState<Orcamento[]>([])
  const [filteredOrcamentos, setFilteredOrcamentos] = useState<Orcamento[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const [formData, setFormData] = useState<OrcamentoInput>(initialFormData)
  
  const [searchTerm, setSearchTerm] = useState('')
  const [filterMes, setFilterMes] = useState('Todos')
  const [filterStatus, setFilterStatus] = useState('Todos')

  useEffect(() => {
    loadData()
  }, [])

  useEffect(() => {
    filterData()
  }, [orcamentos, searchTerm, filterMes, filterStatus])

  const loadData = async () => {
    try {
      setLoading(true)
      const data = await fetchOrcamentos()
      setOrcamentos(data)
      setError(null)
    } catch (err) {
      console.error('Erro ao carregar dados:', err)
      setError('Erro ao carregar dados')
    } finally {
      setLoading(false)
    }
  }

  const filterData = () => {
    let filtered = [...orcamentos]
    
    if (searchTerm) {
      filtered = filtered.filter(o => 
        o.cliente.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    if (filterMes !== 'Todos') {
      filtered = filtered.filter(o => o.mes === filterMes)
    }
    
    if (filterStatus !== 'Todos') {
      filtered = filtered.filter(o => o.status === filterStatus)
    }
    
    setFilteredOrcamentos(filtered)
  }

  const openModal = (orcamento?: Orcamento) => {
    if (orcamento) {
      setEditingId(orcamento.id)
      setFormData({
        data: orcamento.data,
        mes: orcamento.mes,
        cliente: orcamento.cliente,
        valor_proposto: orcamento.valor_proposto,
        valor_fechado: orcamento.valor_fechado,
        status: orcamento.status,
        parcelado: orcamento.parcelado || false,
        parcelas: orcamento.parcelas || 1,
      })
    } else {
      setEditingId(null)
      setFormData(initialFormData)
    }
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setEditingId(null)
    setFormData(initialFormData)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)
    
    try {
      if (editingId) {
        await updateOrcamento(editingId, formData)
      } else {
        await createOrcamento(formData)
      }
      await loadData()
      closeModal()
    } catch (err) {
      console.error('Erro ao salvar:', err)
      alert('Erro ao salvar orçamento')
    } finally {
      setSaving(false)
    }
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Tem certeza que deseja excluir este orçamento?')) return
    
    try {
      await deleteOrcamento(id)
      await loadData()
    } catch (err) {
      console.error('Erro ao excluir:', err)
      alert('Erro ao excluir orçamento')
    }
  }

  const meses = ['Todos', ...new Set(orcamentos.map(o => o.mes))]

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
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold font-heading text-white">
            Orçamentos
          </h1>
          <p className="text-dark-400 mt-1">
            Gerencie todos os seus orçamentos
          </p>
        </div>
        <Button
          onClick={() => openModal()}
          leftIcon={<Plus className="w-5 h-5" />}
        >
          Novo Orçamento
        </Button>
      </div>

      {/* Filters */}
      <div className="glass-card p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="text"
              placeholder="Buscar por cliente..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="input pl-12"
            />
          </div>
          <div className="flex gap-3">
            <select
              value={filterMes}
              onChange={(e) => setFilterMes(e.target.value)}
              className="select min-w-[150px]"
            >
              {meses.map(mes => (
                <option key={mes} value={mes}>{mes === 'Todos' ? 'Todos os meses' : mes}</option>
              ))}
            </select>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="select min-w-[140px]"
            >
              <option value="Todos">Todos status</option>
              <option value="Fechado">Fechado</option>
              <option value="Perdido">Perdido</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="glass-card overflow-hidden">
        {filteredOrcamentos.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Mês</th>
                  <th>Cliente</th>
                  <th>Valor Proposto</th>
                  <th>Valor Fechado</th>
                  <th>Status</th>
                  <th>Pagamento</th>
                  <th className="text-right">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrcamentos.map((orc) => (
                  <tr key={orc.id} className="group">
                    <td className="text-dark-300">{formatDate(orc.data)}</td>
                    <td>
                      <span className="px-2 py-1 rounded-lg bg-dark-800 text-dark-300 text-sm">
                        {orc.mes}
                      </span>
                    </td>
                    <td className="font-medium text-white">{orc.cliente}</td>
                    <td className="text-dark-300">{formatCurrency(orc.valor_proposto)}</td>
                    <td className="text-primary-400 font-semibold">
                      {formatCurrency(orc.valor_fechado)}
                    </td>
                    <td>
                      <Badge variant={orc.status === 'Fechado' ? 'success' : 'danger'}>
                        {orc.status === 'Fechado' ? <Check className="w-3 h-3" /> : <X className="w-3 h-3" />}
                        {orc.status}
                      </Badge>
                    </td>
                    <td>
                      <span className={`text-sm ${orc.parcelado ? 'text-amber-400' : 'text-dark-400'}`}>
                        {orc.parcelado ? `${orc.parcelas}x` : 'À vista'}
                      </span>
                    </td>
                    <td>
                      <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => openModal(orc)}
                          className="p-2 rounded-lg text-dark-400 hover:text-primary-400 hover:bg-primary-500/10 transition-colors"
                          title="Editar"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(orc.id)}
                          className="p-2 rounded-lg text-dark-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                          title="Excluir"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyState
            title="Nenhum orçamento encontrado"
            description={searchTerm || filterMes !== 'Todos' || filterStatus !== 'Todos' 
              ? "Tente ajustar os filtros" 
              : "Adicione seu primeiro orçamento clicando no botão acima"}
            action={
              <Button onClick={() => openModal()} leftIcon={<Plus className="w-4 h-4" />}>
                Novo Orçamento
              </Button>
            }
          />
        )}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={editingId ? 'Editar Orçamento' : 'Novo Orçamento'}
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Data"
              type="date"
              required
              value={formData.data}
              onChange={(e) => setFormData({ ...formData, data: e.target.value })}
            />
            <Input
              label="Mês/Ano"
              placeholder="01/2024"
              required
              value={formData.mes}
              onChange={(e) => setFormData({ ...formData, mes: e.target.value })}
            />
            <div className="md:col-span-2">
              <Input
                label="Cliente"
                placeholder="Nome do cliente"
                required
                value={formData.cliente}
                onChange={(e) => setFormData({ ...formData, cliente: e.target.value })}
              />
            </div>
            <Input
              label="Valor Proposto"
              type="number"
              step="0.01"
              min="0"
              required
              value={formData.valor_proposto || ''}
              onChange={(e) => setFormData({ ...formData, valor_proposto: parseFloat(e.target.value) || 0 })}
            />
            <Input
              label="Valor Fechado"
              type="number"
              step="0.01"
              min="0"
              value={formData.valor_fechado || ''}
              onChange={(e) => setFormData({ ...formData, valor_fechado: parseFloat(e.target.value) || 0 })}
            />
            <Select
              label="Status"
              required
              options={statusOptions}
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as 'Fechado' | 'Perdido' })}
            />
            <div className="space-y-4">
              <Checkbox
                label="Pagamento parcelado"
                checked={formData.parcelado}
                onChange={(e) => setFormData({ 
                  ...formData, 
                  parcelado: e.target.checked,
                  parcelas: e.target.checked ? formData.parcelas : 1
                })}
              />
              {formData.parcelado && (
                <Input
                  label="Número de Parcelas"
                  type="number"
                  min="1"
                  max="60"
                  value={formData.parcelas}
                  onChange={(e) => setFormData({ ...formData, parcelas: parseInt(e.target.value) || 1 })}
                />
              )}
            </div>
          </div>
          
          <div className="flex justify-end gap-3 pt-4 border-t border-dark-700">
            <Button type="button" variant="secondary" onClick={closeModal}>
              Cancelar
            </Button>
            <Button type="submit" isLoading={saving}>
              {editingId ? 'Salvar Alterações' : 'Criar Orçamento'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
