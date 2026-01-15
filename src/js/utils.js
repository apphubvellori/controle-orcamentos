/* ==========================================================================
   UTILS.JS - Funções utilitárias
   ========================================================================== */

import { APP_CONFIG } from './config.js';

/**
 * Formata um valor para moeda brasileira (BRL)
 * @param {number} value - Valor a ser formatado
 * @returns {string} Valor formatado
 */
export function formatCurrency(value) {
  const number = parseFloat(value) || 0;
  return number.toLocaleString(
    APP_CONFIG.currency.locale,
    {
      style: 'currency',
      currency: APP_CONFIG.currency.currency,
      minimumFractionDigits: APP_CONFIG.currency.minimumFractionDigits,
      maximumFractionDigits: APP_CONFIG.currency.maximumFractionDigits
    }
  );
}

/**
 * Formata uma data para exibição
 * @param {string|Date} date - Data a ser formatada
 * @param {string} format - Formato ('short' ou 'long')
 * @returns {string} Data formatada
 */
export function formatDate(date, format = 'short') {
  if (!date) return '-';
  
  const dateObj = new Date(date);
  if (isNaN(dateObj.getTime())) return '-';
  
  const options = APP_CONFIG.date.format[format] || APP_CONFIG.date.format.short;
  return dateObj.toLocaleDateString(APP_CONFIG.date.locale, options);
}

/**
 * Formata uma porcentagem
 * @param {number} value - Valor a ser formatado
 * @param {number} decimals - Casas decimais
 * @returns {string} Porcentagem formatada
 */
export function formatPercent(value, decimals = 1) {
  const number = parseFloat(value) || 0;
  return `${number.toFixed(decimals)}%`;
}

/**
 * Calcula a taxa de conversão
 * @param {number} fechados - Quantidade de orçamentos fechados
 * @param {number} total - Total de orçamentos
 * @returns {number} Taxa de conversão em porcentagem
 */
export function calcConversionRate(fechados, total) {
  if (!total || total === 0) return 0;
  return (fechados / total) * 100;
}

/**
 * Agrupa array por uma chave específica
 * @param {Array} array - Array a ser agrupado
 * @param {string} key - Chave para agrupamento
 * @returns {Object} Objeto agrupado
 */
export function groupBy(array, key) {
  return array.reduce((result, item) => {
    const groupKey = item[key];
    if (!result[groupKey]) {
      result[groupKey] = [];
    }
    result[groupKey].push(item);
    return result;
  }, {});
}

/**
 * Soma valores de uma propriedade em um array
 * @param {Array} array - Array de objetos
 * @param {string} key - Chave para somar
 * @returns {number} Soma total
 */
export function sumBy(array, key) {
  return array.reduce((sum, item) => {
    return sum + (parseFloat(item[key]) || 0);
  }, 0);
}

/**
 * Ordena array de meses no formato MM/YYYY
 * @param {Array} months - Array de meses
 * @returns {Array} Array ordenado
 */
export function sortMonths(months) {
  return months.sort((a, b) => {
    const [monthA, yearA] = a.split('/').map(Number);
    const [monthB, yearB] = b.split('/').map(Number);
    
    if (yearA !== yearB) return yearA - yearB;
    return monthA - monthB;
  });
}

/**
 * Gera um ID único
 * @returns {string} ID único
 */
export function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

/**
 * Debounce - limita a frequência de execução de uma função
 * @param {Function} func - Função a ser executada
 * @param {number} wait - Tempo de espera em ms
 * @returns {Function} Função com debounce
 */
export function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle - garante execução máxima de uma função por período
 * @param {Function} func - Função a ser executada
 * @param {number} limit - Limite em ms
 * @returns {Function} Função com throttle
 */
export function throttle(func, limit = 300) {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Valida se uma string é uma data válida
 * @param {string} dateString - String de data
 * @returns {boolean} Se é válida
 */
export function isValidDate(dateString) {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}

/**
 * Valida formato de mês/ano (MM/YYYY)
 * @param {string} monthYear - String no formato MM/YYYY
 * @returns {boolean} Se é válido
 */
export function isValidMonthYear(monthYear) {
  const regex = /^(0[1-9]|1[0-2])\/\d{4}$/;
  return regex.test(monthYear);
}

/**
 * Obtém a data atual formatada
 * @returns {string} Data atual no formato YYYY-MM-DD
 */
export function getCurrentDate() {
  return new Date().toISOString().split('T')[0];
}

/**
 * Obtém o mês/ano atual
 * @returns {string} Mês/ano atual no formato MM/YYYY
 */
export function getCurrentMonthYear() {
  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const year = now.getFullYear();
  return `${month}/${year}`;
}

/**
 * Deep clone de um objeto
 * @param {Object} obj - Objeto a ser clonado
 * @returns {Object} Clone do objeto
 */
export function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Verifica se um valor está vazio
 * @param {*} value - Valor a ser verificado
 * @returns {boolean} Se está vazio
 */
export function isEmpty(value) {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.trim() === '';
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

export default {
  formatCurrency,
  formatDate,
  formatPercent,
  calcConversionRate,
  groupBy,
  sumBy,
  sortMonths,
  generateId,
  debounce,
  throttle,
  isValidDate,
  isValidMonthYear,
  getCurrentDate,
  getCurrentMonthYear,
  deepClone,
  isEmpty
};
