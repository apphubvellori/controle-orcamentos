/* ==========================================================================
   CONFIG.JS - Configurações do sistema
   ========================================================================== */

/**
 * Configurações do Supabase
 * As credenciais devem ser configuradas via variáveis de ambiente
 */
export const SUPABASE_CONFIG = {
  url: 'https://yhiiupamxdjmnrktkjku.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloaWl1cGFteGRqbW5ya3Rramt1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg0ODg2NzUsImV4cCI6MjA4NDA2NDY3NX0._QjYtYAlypJdursHe0-rPz14QOT4NNP2EklqcJ6TpkI'
};

/**
 * Configurações gerais da aplicação
 */
export const APP_CONFIG = {
  // Nome da aplicação
  appName: 'Controle de Orçamentos',
  
  // Versão
  version: '1.0.0',
  
  // Configurações de formatação
  currency: {
    locale: 'pt-BR',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  },
  
  // Configurações de data
  date: {
    locale: 'pt-BR',
    format: {
      short: { day: '2-digit', month: '2-digit', year: 'numeric' },
      long: { day: '2-digit', month: 'long', year: 'numeric' }
    }
  },
  
  // Nome da tabela no Supabase
  tableName: 'orcamentos'
};

/**
 * Configurações dos gráficos (Chart.js)
 */
export const CHART_CONFIG = {
  colors: {
    success: '#10b981',
    danger: '#ef4444',
    primary: '#6366f1',
    secondary: '#64748b',
    info: '#3b82f6',
    warning: '#f59e0b'
  },
  
  defaultOptions: {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        labels: {
          color: '#94a3b8',
          font: {
            family: "'Inter', sans-serif",
            size: 12
          }
        }
      }
    }
  },
  
  barOptions: {
    scales: {
      y: {
        beginAtZero: true,
        grid: { color: 'rgba(148, 163, 184, 0.1)' },
        ticks: { color: '#94a3b8' }
      },
      x: {
        grid: { display: false },
        ticks: { color: '#94a3b8' }
      }
    }
  }
};

/**
 * Mensagens do sistema
 */
export const MESSAGES = {
  loading: 'Carregando dados...',
  saving: 'Salvando...',
  success: {
    save: 'Orçamento salvo com sucesso!',
    delete: 'Orçamento excluído com sucesso!',
    sync: 'Dados sincronizados com sucesso!'
  },
  error: {
    load: 'Erro ao carregar dados',
    save: 'Erro ao salvar orçamento',
    delete: 'Erro ao excluir orçamento',
    connection: 'Erro de conexão com o servidor'
  },
  confirm: {
    delete: 'Tem certeza que deseja excluir este orçamento?'
  },
  empty: {
    table: 'Nenhum orçamento encontrado',
    filter: 'Nenhum resultado para o filtro selecionado'
  }
};

/**
 * Status disponíveis para orçamentos
 */
export const STATUS_OPTIONS = [
  { value: 'Fechado', label: 'Fechado', color: 'success' },
  { value: 'Perdido', label: 'Perdido', color: 'danger' }
];

export default {
  SUPABASE_CONFIG,
  APP_CONFIG,
  CHART_CONFIG,
  MESSAGES,
  STATUS_OPTIONS
};
