/* ==========================================================================
   UI.JS - Manipulação de Interface
   ========================================================================== */

import { MESSAGES, STATUS_OPTIONS } from './config.js';
import { formatCurrency, formatDate, formatPercent, calcConversionRate } from './utils.js';

/**
 * Elementos do DOM (cache)
 */
const elements = {
  loadingOverlay: null,
  filtroMes: null,
  kpiFechado: null,
  kpiPerdido: null,
  kpiConversao: null,
  tabelaOrcamentos: null,
  tabelaResumo: null,
  formContainer: null,
  formOrcamento: null,
  printDate: null
};

/**
 * Inicializa os elementos do DOM
 */
export function initElements() {
  elements.loadingOverlay = document.getElementById('loadingOverlay');
  elements.filtroMes = document.getElementById('filtroMes');
  elements.kpiFechado = document.getElementById('kpiFechado');
  elements.kpiPerdido = document.getElementById('kpiPerdido');
  elements.kpiConversao = document.getElementById('kpiConversao');
  elements.tabelaOrcamentos = document.getElementById('tabelaOrcamentos');
  elements.tabelaResumo = document.getElementById('tabelaResumo');
  elements.formContainer = document.getElementById('formContainer');
  elements.formOrcamento = document.getElementById('formOrcamento');
  elements.printDate = document.getElementById('printDate');
}

/**
 * Inicializa controles de pagamento parcelado (habilita/desabilita parcelas)
 */
export function initPaymentControls() {
  const checkbox = document.getElementById('inputParcelado');
  const parcelasInput = document.getElementById('inputParcelas');

  const syncState = () => {
    const isChecked = checkbox?.checked;
    if (parcelasInput) {
      parcelasInput.disabled = !isChecked;
      if (!isChecked) {
        parcelasInput.value = 1;
      }
    }
  };

  if (checkbox) {
    checkbox.addEventListener('change', syncState);
  }

  // Estado inicial
  syncState();
}

/**
 * Exibe o overlay de loading
 */
export function showLoading() {
  if (elements.loadingOverlay) {
    elements.loadingOverlay.style.display = 'flex';
  }
}

/**
 * Esconde o overlay de loading
 */
export function hideLoading() {
  if (elements.loadingOverlay) {
    elements.loadingOverlay.style.display = 'none';
  }
}

/**
 * Exibe/oculta o formulário de orçamento
 */
export function toggleFormulario() {
  if (elements.formContainer) {
    const isVisible = elements.formContainer.style.display !== 'none';
    elements.formContainer.style.display = isVisible ? 'none' : 'block';
    
    if (!isVisible && elements.formOrcamento) {
      elements.formOrcamento.reset();
      // Define data atual
      const inputData = document.getElementById('inputData');
      if (inputData) {
        inputData.value = new Date().toISOString().split('T')[0];
      }

      // Reseta controle de parcelamento
      const inputParcelado = document.getElementById('inputParcelado');
      const inputParcelas = document.getElementById('inputParcelas');
      if (inputParcelado) inputParcelado.checked = false;
      if (inputParcelas) {
        inputParcelas.value = 1;
        inputParcelas.disabled = true;
      }
    }
  }
}

/**
 * Troca o painel ativo
 * @param {string} panelId - ID do painel a ser exibido
 */
export function showPanel(panelId) {
  // Remove active de todos os painéis
  document.querySelectorAll('.panel').forEach(panel => {
    panel.classList.remove('active');
  });
  
  // Remove active de todos os tabs
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Ativa o painel selecionado
  const targetPanel = document.getElementById(panelId);
  if (targetPanel) {
    targetPanel.classList.add('active');
  }
  
  // Ativa o tab correspondente
  document.querySelectorAll('.nav-tab').forEach(tab => {
    if (tab.textContent.toLowerCase().includes(panelId.substring(0, 4))) {
      tab.classList.add('active');
    }
  });
}

/**
 * Atualiza os KPIs do dashboard
 * @param {Object} stats - Estatísticas calculadas
 */
export function updateKPIs(stats) {
  if (elements.kpiFechado) {
    elements.kpiFechado.textContent = formatCurrency(stats.totalFechado);
  }
  
  if (elements.kpiPerdido) {
    elements.kpiPerdido.textContent = formatCurrency(stats.totalPerdido);
  }
  
  if (elements.kpiConversao) {
    const taxa = calcConversionRate(stats.fechados, stats.total);
    elements.kpiConversao.textContent = formatPercent(taxa);
  }
}

/**
 * Popula o select de filtro de meses
 * @param {Array} meses - Lista de meses disponíveis
 * @param {string} selected - Mês selecionado
 */
export function populateFiltroMeses(meses, selected = 'Todos') {
  if (!elements.filtroMes) return;
  
  elements.filtroMes.innerHTML = '<option value="Todos">Todos os meses</option>';
  
  meses.forEach(mes => {
    const option = document.createElement('option');
    option.value = mes;
    option.textContent = mes;
    option.selected = mes === selected;
    elements.filtroMes.appendChild(option);
  });
}

/**
 * Renderiza a tabela de orçamentos
 * @param {Array} orcamentos - Lista de orçamentos
 * @param {Function} onEdit - Callback para edição
 * @param {Function} onDelete - Callback para exclusão
 */
export function renderTabelaOrcamentos(orcamentos, onEdit, onDelete) {
  if (!elements.tabelaOrcamentos) return;
  
  if (!orcamentos || orcamentos.length === 0) {
    elements.tabelaOrcamentos.innerHTML = `
      <tr>
        <td colspan="8">
          <div class="empty-state">
            <div class="empty-state-icon">📋</div>
            <div class="empty-state-text">${MESSAGES.empty.table}</div>
          </div>
        </td>
      </tr>
    `;
    return;
  }
  
  elements.tabelaOrcamentos.innerHTML = orcamentos.map(orc => {
    const statusConfig = STATUS_OPTIONS.find(s => s.value === orc.status) || STATUS_OPTIONS[0];
    const pagamentoLabel = orc.parcelado
      ? `${orc.parcelas || 1}x`
      : 'À vista';
    
    return `
      <tr>
        <td>${formatDate(orc.data)}</td>
        <td>${orc.mes || '-'}</td>
        <td>${orc.cliente || '-'}</td>
        <td>${formatCurrency(orc.valor_proposto)}</td>
        <td>${formatCurrency(orc.valor_fechado)}</td>
        <td>
          <span class="badge badge-${statusConfig.color}">
            ${orc.status === 'Fechado' ? '✅' : '❌'} ${orc.status}
          </span>
        </td>
        <td>${pagamentoLabel}</td>
        <td class="no-print">
          <div style="display: flex; gap: var(--spacing-xs);">
            <button 
              class="btn btn-ghost btn-sm" 
              onclick="window.editarOrcamento(${orc.id})"
              title="Editar"
            >
              ✏️
            </button>
            <button 
              class="btn btn-ghost btn-sm" 
              onclick="window.excluirOrcamento(${orc.id})"
              title="Excluir"
            >
              🗑️
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

/**
 * Renderiza a tabela de resumo mensal
 * @param {Object} resumo - Dados do resumo agrupados por mês
 */
export function renderTabelaResumo(resumo) {
  if (!elements.tabelaResumo) return;
  
  const meses = Object.keys(resumo).sort((a, b) => {
    const [mA, yA] = a.split('/').map(Number);
    const [mB, yB] = b.split('/').map(Number);
    return yB - yA || mB - mA;
  });
  
  if (meses.length === 0) {
    elements.tabelaResumo.innerHTML = `
      <tr>
        <td colspan="5">
          <div class="empty-state">
            <div class="empty-state-icon">📊</div>
            <div class="empty-state-text">${MESSAGES.empty.table}</div>
          </div>
        </td>
      </tr>
    `;
    return;
  }
  
  elements.tabelaResumo.innerHTML = meses.map(mes => {
    const dados = resumo[mes];
    const taxa = calcConversionRate(dados.fechados, dados.quantidade);
    
    return `
      <tr>
        <td><strong>${mes}</strong></td>
        <td>${dados.quantidade}</td>
        <td class="text-success">${formatCurrency(dados.totalFechado)}</td>
        <td class="text-danger">${formatCurrency(dados.totalPerdido)}</td>
        <td>
          <span class="badge ${taxa >= 50 ? 'badge-success' : 'badge-warning'}">
            ${formatPercent(taxa)}
          </span>
        </td>
      </tr>
    `;
  }).join('');
}

/**
 * Preenche o formulário para edição
 * @param {Object} orcamento - Dados do orçamento
 */
export function preencherFormulario(orcamento) {
  if (!orcamento) return;
  
  const inputData = document.getElementById('inputData');
  const inputMes = document.getElementById('inputMes');
  const inputCliente = document.getElementById('inputCliente');
  const inputProposto = document.getElementById('inputProposto');
  const inputFechado = document.getElementById('inputFechado');
  const inputStatus = document.getElementById('inputStatus');
  const inputParcelado = document.getElementById('inputParcelado');
  const inputParcelas = document.getElementById('inputParcelas');
  
  if (inputData) inputData.value = orcamento.data || '';
  if (inputMes) inputMes.value = orcamento.mes || '';
  if (inputCliente) inputCliente.value = orcamento.cliente || '';
  if (inputProposto) inputProposto.value = orcamento.valor_proposto || '';
  if (inputFechado) inputFechado.value = orcamento.valor_fechado || '';
  if (inputStatus) inputStatus.value = orcamento.status || '';
  if (inputParcelado) inputParcelado.checked = !!orcamento.parcelado;
  if (inputParcelas) {
    inputParcelas.value = orcamento.parcelas || 1;
    inputParcelas.disabled = !orcamento.parcelado;
  }
  
  // Armazena o ID para edição
  if (elements.formOrcamento) {
    elements.formOrcamento.dataset.editId = orcamento.id;
  }
  
  // Exibe o formulário
  if (elements.formContainer) {
    elements.formContainer.style.display = 'block';
  }
}

/**
 * Obtém os dados do formulário
 * @returns {Object} Dados do formulário
 */
export function getFormData() {
  return {
    data: document.getElementById('inputData')?.value || null,
    mes: document.getElementById('inputMes')?.value || null,
    cliente: document.getElementById('inputCliente')?.value || null,
    valor_proposto: parseFloat(document.getElementById('inputProposto')?.value) || 0,
    valor_fechado: parseFloat(document.getElementById('inputFechado')?.value) || 0,
    status: document.getElementById('inputStatus')?.value || null,
    parcelado: document.getElementById('inputParcelado')?.checked || false,
    parcelas: parseInt(document.getElementById('inputParcelas')?.value || '1', 10)
  };
}

/**
 * Obtém o ID de edição do formulário
 * @returns {number|null} ID do orçamento em edição
 */
export function getEditId() {
  const editId = elements.formOrcamento?.dataset.editId;
  return editId ? parseInt(editId) : null;
}

/**
 * Limpa o ID de edição do formulário
 */
export function clearEditId() {
  if (elements.formOrcamento) {
    delete elements.formOrcamento.dataset.editId;
  }
}

/**
 * Exibe uma mensagem de alerta
 * @param {string} message - Mensagem a ser exibida
 * @param {string} type - Tipo da mensagem ('success', 'error', 'warning', 'info')
 */
export function showAlert(message, type = 'info') {
  // Por enquanto usa alert nativo, pode ser substituído por toast customizado
  alert(message);
}

/**
 * Exibe um diálogo de confirmação
 * @param {string} message - Mensagem de confirmação
 * @returns {boolean} Resultado da confirmação
 */
export function showConfirm(message) {
  return confirm(message);
}

/**
 * Atualiza a data de impressão
 */
export function updatePrintDate() {
  if (elements.printDate) {
    elements.printDate.textContent = new Date().toLocaleString('pt-BR');
  }
}

/**
 * Imprime o relatório
 */
export function printReport() {
  updatePrintDate();
  window.print();
}

export default {
  initElements,
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
  updatePrintDate,
  printReport
};
