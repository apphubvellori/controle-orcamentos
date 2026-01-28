const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://yhiiupamxdjmnrktkjku.supabase.co';
// Nova secret key
const supabaseKey = 'sb_secret_kPM5Zd2zYnFyW9tkz_botg_JoG-QVNL';

const supabase = createClient(supabaseUrl, supabaseKey);

async function criarTabelas() {
  console.log('🚀 Criando tabelas de Ordem de Serviço...\n');

  // Primeiro, verificar se as tabelas já existem
  const { data: checkOS, error: checkErr } = await supabase
    .from('ordens_servico')
    .select('id')
    .limit(1);

  if (!checkErr || checkErr.code !== '42P01') {
    if (!checkErr) {
      console.log('✅ Tabela ordens_servico já existe!');
    } else {
      console.log('⚠️ Erro ao verificar:', checkErr.message);
    }
  }

  // Tentar criar via SQL usando a função sql() se disponível
  // Ou usar diretamente a REST API do Supabase Management

  console.log('\n📋 Para criar as tabelas, acesse:');
  console.log('   https://supabase.com/dashboard/project/yhiiupamxdjmnrktkjku/sql/new');
  console.log('\n   E execute o SQL do arquivo SQL_NOVAS_TABELAS.sql (seção OS)');
}

criarTabelas().catch(console.error);
