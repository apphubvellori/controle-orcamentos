/* ==========================================================================
   APP.JS - Arquivo principal da aplicação
   
   Este arquivo coordena todos os módulos e inicializa a aplicação.
   ========================================================================== */

import { MESSAGES } from './config.js';
import { groupBy, sumBy, sortMonths } from './utils.js';
import { 
  initSupabase, 
  fetchOrcamentos, 
  createOrcamento, 
  updateOrcamento, 
  deleteOrcamento 
} from './api.js';
import {
  initElements,
  initPaymentControls,
  showLoading,
  hideLoading,
  toggleFormulario,
  showPanel,
  updateKPIs,
  populateFiltroMeses,
  renderTabelaOrcamentos,
  renderTabelaResumo,
  preencherFormulario,
  getFormData,
  getEditId,
  clearEditId,
  showAlert,
  showConfirm,
  printReport
} from './ui.js';
import { updateAllCharts } from './charts.js';

// Estado global da aplicação
const state = {
  orcamentos: [],
  filtroAtual: 'Todos',
  carregando: false
};

/**
 * Calcula estatísticas dos orçamentos
 * @param {Array} orcamentos - Lista de orçamentos
 * @returns {Object} Estatísticas calculadas
 */
function calcularEstatisticas(orcamentos) {
  const fechados = orcamentos.filter(o => o.status === 'Fechado');
  const perdidos = orcamentos.filter(o => o.status === 'Perdido');
  
  return {
    total: orcamentos.length,
    fechados: fechados.length,
    perdidos: perdidos.length,
    totalFechado: sumBy(fechados, 'valor_fechado'),
    totalPerdido: sumBy(perdidos, 'valor_proposto')
  };
}

/**
 * Calcula resumo mensal dos orçamentos
 * @param {Array} orcamentos - Lista de orçamentos
 * @returns {Object} Resumo agrupado por mês
 */
function calcularResumoMensal(orcamentos) {
  const resumo = {};
  
  orcamentos.forEach(orc => {
    const mes = orc.mes;
    if (!mes) return;
    
    if (!resumo[mes]) {
      resumo[mes] = {
        mes,
        quantidade: 0,
        totalFechado: 0,
        totalPerdido: 0,
        fechados: 0,
        perdidos: 0
      };
    }
    
    resumo[mes].quantidade++;
    
    if (orc.status === 'Fechado') {
      resumo[mes].fechados++;
      resumo[mes].totalFechado += parseFloat(orc.valor_fechado) || 0;
    } else if (orc.status === 'Perdido') {
      resumo[mes].perdidos++;
      resumo[mes].totalPerdido += parseFloat(orc.valor_proposto) || 0;
    }
  });
  
  return resumo;
}

/**
 * Carrega e atualiza todos os dados da aplicação
 */
async function carregarDados() {
  if (state.carregando) return;
  
  state.carregando = true;
  showLoading();
  
  try {
    // Busca orçamentos
    state.orcamentos = await fetchOrcamentos();
    
    // Aplica filtro atual
    const orcamentosFiltrados = aplicarFiltroInterno(state.orcamentos);
    
    // Calcula estatísticas
    const stats = calcularEstatisticas(orcamentosFiltrados);
    const resumo = calcularResumoMensal(state.orcamentos);
    
    // Atualiza UI
    updateKPIs(stats);
    renderTabelaOrcamentos(orcamentosFiltrados);
    renderTabelaResumo(resumo);
    updateAllCharts(resumo, stats);
    
    // Popula filtro de meses
    const meses = sortMonths([...new Set(state.orcamentos.map(o => o.mes).filter(Boolean))]);
    populateFiltroMeses(meses, state.filtroAtual);
    
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    showAlert(MESSAGES.error.load, 'error');
  } finally {
    state.carregando = false;
    hideLoading();
  }
}

/**
 * Aplica filtro interno aos orçamentos
 * @param {Array} orcamentos - Lista de orçamentos
 * @returns {Array} Orçamentos filtrados
 */
function aplicarFiltroInterno(orcamentos) {
  if (state.filtroAtual === 'Todos') {
    return orcamentos;
  }
  return orcamentos.filter(o => o.mes === state.filtroAtual);
}

/**
 * Aplica filtro de mês
 */
function aplicarFiltro() {
  const filtroMes = document.getElementById('filtroMes');
  state.filtroAtual = filtroMes?.value || 'Todos';
  
  const orcamentosFiltrados = aplicarFiltroInterno(state.orcamentos);
  const stats = calcularEstatisticas(orcamentosFiltrados);
  const resumo = calcularResumoMensal(state.orcamentos);
  
  updateKPIs(stats);
  renderTabelaOrcamentos(orcamentosFiltrados);
  updateAllCharts(resumo, stats);
}

/**
 * Salva um orçamento (novo ou edição)
 * @param {Event} event - Evento do formulário
 */
async function salvarOrcamento(event) {
  event.preventDefault();
  
  showLoading();
  
  try {
    const dados = getFormData();
    const editId = getEditId();
    
    if (editId) {
      await updateOrcamento(editId, dados);
      showAlert(MESSAGES.success.save, 'success');
    } else {
      await createOrcamento(dados);
      showAlert(MESSAGES.success.save, 'success');
    }
    
    clearEditId();
    toggleFormulario();
    await carregarDados();
    
  } catch (error) {
    console.error('Erro ao salvar:', error);
    showAlert(MESSAGES.error.save, 'error');
  } finally {
    hideLoading();
  }
}

/**
 * Edita um orçamento existente
 * @param {number} id - ID do orçamento
 */
function editarOrcamento(id) {
  const orcamento = state.orcamentos.find(o => o.id === id);
  if (orcamento) {
    preencherFormulario(orcamento);
    showPanel('orcamentos');
  }
}

/**
 * Exclui um orçamento
 * @param {number} id - ID do orçamento
 */
async function excluirOrcamento(id) {
  if (!showConfirm(MESSAGES.confirm.delete)) {
    return;
  }
  
  showLoading();
  
  try {
    await deleteOrcamento(id);
    showAlert(MESSAGES.success.delete, 'success');
    await carregarDados();
  } catch (error) {
    console.error('Erro ao excluir:', error);
    showAlert(MESSAGES.error.delete, 'error');
  } finally {
    hideLoading();
  }
}

/**
 * Sincroniza dados com o servidor
 */
async function sincronizarDados() {
  await carregarDados();
  showAlert(MESSAGES.success.sync, 'success');
}

/**
 * Imprime o relatório
 */
function imprimirRelatorio() {
  printReport();
}

/**
 * Inicializa a aplicação
 */
async function init() {
  console.log('🚀 Inicializando aplicação...');
  
  // Inicializa elementos do DOM
  initElements();
  initPaymentControls();
  
  // Inicializa Supabase
  initSupabase();
  
  // Carrega dados
  await carregarDados();
  
  // Configura event listener do formulário
  const form = document.getElementById('formOrcamento');
  if (form) {
    form.addEventListener('submit', salvarOrcamento);
  }
  
  console.log('✅ Aplicação inicializada com sucesso!');
}

// Expõe funções globalmente para uso no HTML
window.showPanel = showPanel;
window.toggleFormulario = toggleFormulario;
window.aplicarFiltro = aplicarFiltro;
window.salvarOrcamento = salvarOrcamento;
window.editarOrcamento = editarOrcamento;
window.excluirOrcamento = excluirOrcamento;
window.sincronizarDados = sincronizarDados;
window.imprimirRelatorio = imprimirRelatorio;

// Inicializa quando o DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

export {
  carregarDados,
  aplicarFiltro,
  salvarOrcamento,
  editarOrcamento,
  excluirOrcamento,
  sincronizarDados,
  imprimirRelatorio
};
