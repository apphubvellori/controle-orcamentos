/* ==========================================================================
   API.JS - Comunicação com Supabase
   ========================================================================== */

import { SUPABASE_CONFIG, APP_CONFIG, MESSAGES } from './config.js';

// Inicialização do cliente Supabase
let supabase = null;

/**
 * Inicializa o cliente Supabase
 * @returns {Object} Cliente Supabase
 */
export function initSupabase() {
  if (!supabase) {
    supabase = window.supabase.createClient(
      SUPABASE_CONFIG.url,
      SUPABASE_CONFIG.anonKey
    );
  }
  return supabase;
}

/**
 * Obtém o cliente Supabase
 * @returns {Object} Cliente Supabase
 */
export function getSupabase() {
  if (!supabase) {
    return initSupabase();
  }
  return supabase;
}

/**
 * Busca todos os orçamentos
 * @returns {Promise<Array>} Lista de orçamentos
 */
export async function fetchOrcamentos() {
  try {
    const client = getSupabase();
    const { data, error } = await client
      .from(APP_CONFIG.tableName)
      .select('*')
      .order('data', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Erro ao buscar orçamentos:', error);
    throw new Error(MESSAGES.error.load);
  }
}

/**
 * Busca orçamentos por mês
 * @param {string} mes - Mês no formato MM/YYYY
 * @returns {Promise<Array>} Lista de orçamentos do mês
 */
export async function fetchOrcamentosByMes(mes) {
  try {
    const client = getSupabase();
    const { data, error } = await client
      .from(APP_CONFIG.tableName)
      .select('*')
      .eq('mes', mes)
      .order('data', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Erro ao buscar orçamentos por mês:', error);
    throw new Error(MESSAGES.error.load);
  }
}

/**
 * Busca um orçamento por ID
 * @param {number} id - ID do orçamento
 * @returns {Promise<Object>} Orçamento encontrado
 */
export async function fetchOrcamentoById(id) {
  try {
    const client = getSupabase();
    const { data, error } = await client
      .from(APP_CONFIG.tableName)
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erro ao buscar orçamento:', error);
    throw new Error(MESSAGES.error.load);
  }
}

/**
 * Cria um novo orçamento
 * @param {Object} orcamento - Dados do orçamento
 * @returns {Promise<Object>} Orçamento criado
 */
export async function createOrcamento(orcamento) {
  try {
    const client = getSupabase();
    const { data, error } = await client
      .from(APP_CONFIG.tableName)
      .insert([orcamento])
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erro ao criar orçamento:', error);
    throw new Error(MESSAGES.error.save);
  }
}

/**
 * Atualiza um orçamento existente
 * @param {number} id - ID do orçamento
 * @param {Object} updates - Dados a serem atualizados
 * @returns {Promise<Object>} Orçamento atualizado
 */
export async function updateOrcamento(id, updates) {
  try {
    const client = getSupabase();
    const { data, error } = await client
      .from(APP_CONFIG.tableName)
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Erro ao atualizar orçamento:', error);
    throw new Error(MESSAGES.error.save);
  }
}

/**
 * Exclui um orçamento
 * @param {number} id - ID do orçamento
 * @returns {Promise<boolean>} Sucesso da operação
 */
export async function deleteOrcamento(id) {
  try {
    const client = getSupabase();
    const { error } = await client
      .from(APP_CONFIG.tableName)
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error('Erro ao excluir orçamento:', error);
    throw new Error(MESSAGES.error.delete);
  }
}

/**
 * Busca resumo mensal dos orçamentos
 * @returns {Promise<Object>} Resumo agrupado por mês
 */
export async function fetchResumoMensal() {
  try {
    const orcamentos = await fetchOrcamentos();
    
    const resumo = {};
    orcamentos.forEach(orc => {
      const mes = orc.mes;
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
  } catch (error) {
    console.error('Erro ao buscar resumo mensal:', error);
    throw new Error(MESSAGES.error.load);
  }
}

/**
 * Testa a conexão com o Supabase
 * @returns {Promise<boolean>} Status da conexão
 */
export async function testConnection() {
  try {
    const client = getSupabase();
    const { error } = await client
      .from(APP_CONFIG.tableName)
      .select('id')
      .limit(1);

    return !error;
  } catch (error) {
    console.error('Erro ao testar conexão:', error);
    return false;
  }
}

export default {
  initSupabase,
  getSupabase,
  fetchOrcamentos,
  fetchOrcamentosByMes,
  fetchOrcamentoById,
  createOrcamento,
  updateOrcamento,
  deleteOrcamento,
  fetchResumoMensal,
  testConnection
};
