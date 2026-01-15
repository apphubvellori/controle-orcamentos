/* ==========================================================================
   CHARTS.JS - Lógica dos gráficos
   ========================================================================== */

import { CHART_CONFIG } from './config.js';
import { sortMonths } from './utils.js';

// Instâncias dos gráficos
let chartBars = null;
let chartPie = null;

/**
 * Inicializa ou atualiza o gráfico de barras
 * @param {Object} resumo - Dados do resumo mensal
 */
export function updateBarChart(resumo) {
  const ctx = document.getElementById('chartBars');
  if (!ctx) return;
  
  const meses = sortMonths(Object.keys(resumo));
  const dadosFechados = meses.map(mes => resumo[mes]?.totalFechado || 0);
  const dadosPerdidos = meses.map(mes => resumo[mes]?.totalPerdido || 0);
  
  const data = {
    labels: meses,
    datasets: [
      {
        label: 'Fechado',
        data: dadosFechados,
        backgroundColor: CHART_CONFIG.colors.success,
        borderColor: CHART_CONFIG.colors.success,
        borderWidth: 1,
        borderRadius: 6,
        barPercentage: 0.8
      },
      {
        label: 'Perdido',
        data: dadosPerdidos,
        backgroundColor: CHART_CONFIG.colors.danger,
        borderColor: CHART_CONFIG.colors.danger,
        borderWidth: 1,
        borderRadius: 6,
        barPercentage: 0.8
      }
    ]
  };
  
  const options = {
    ...CHART_CONFIG.defaultOptions,
    ...CHART_CONFIG.barOptions,
    plugins: {
      ...CHART_CONFIG.defaultOptions.plugins,
      tooltip: {
        callbacks: {
          label: function(context) {
            const value = context.raw || 0;
            return `${context.dataset.label}: R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
          }
        }
      }
    }
  };
  
  if (chartBars) {
    chartBars.data = data;
    chartBars.options = options;
    chartBars.update();
  } else {
    chartBars = new Chart(ctx, {
      type: 'bar',
      data,
      options
    });
  }
}

/**
 * Inicializa ou atualiza o gráfico de pizza
 * @param {Object} stats - Estatísticas gerais
 */
export function updatePieChart(stats) {
  const ctx = document.getElementById('chartPie');
  if (!ctx) return;
  
  const data = {
    labels: ['Fechados', 'Perdidos'],
    datasets: [{
      data: [stats.fechados || 0, stats.perdidos || 0],
      backgroundColor: [
        CHART_CONFIG.colors.success,
        CHART_CONFIG.colors.danger
      ],
      borderColor: [
        CHART_CONFIG.colors.success,
        CHART_CONFIG.colors.danger
      ],
      borderWidth: 2,
      hoverOffset: 10
    }]
  };
  
  const options = {
    ...CHART_CONFIG.defaultOptions,
    cutout: '60%',
    plugins: {
      ...CHART_CONFIG.defaultOptions.plugins,
      tooltip: {
        callbacks: {
          label: function(context) {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = total > 0 ? ((context.raw / total) * 100).toFixed(1) : 0;
            return `${context.label}: ${context.raw} (${percentage}%)`;
          }
        }
      }
    }
  };
  
  if (chartPie) {
    chartPie.data = data;
    chartPie.options = options;
    chartPie.update();
  } else {
    chartPie = new Chart(ctx, {
      type: 'doughnut',
      data,
      options
    });
  }
}

/**
 * Atualiza todos os gráficos
 * @param {Object} resumo - Dados do resumo mensal
 * @param {Object} stats - Estatísticas gerais
 */
export function updateAllCharts(resumo, stats) {
  updateBarChart(resumo);
  updatePieChart(stats);
}

/**
 * Destrói todos os gráficos
 */
export function destroyCharts() {
  if (chartBars) {
    chartBars.destroy();
    chartBars = null;
  }
  
  if (chartPie) {
    chartPie.destroy();
    chartPie = null;
  }
}

/**
 * Redimensiona os gráficos
 */
export function resizeCharts() {
  if (chartBars) chartBars.resize();
  if (chartPie) chartPie.resize();
}

// Listener para redimensionamento
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(resizeCharts, 250);
});

export default {
  updateBarChart,
  updatePieChart,
  updateAllCharts,
  destroyCharts,
  resizeCharts
};
