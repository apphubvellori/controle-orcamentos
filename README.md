# 📊 Controle de Orçamentos

Sistema profissional para gerenciamento e controle de orçamentos comerciais.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Contribuição](#contribuição)

## 🎯 Sobre o Projeto

Sistema web para controle de orçamentos que permite:
- Cadastrar e gerenciar orçamentos
- Visualizar dashboard com KPIs
- Acompanhar taxa de conversão
- Gerar relatórios por período

## ✨ Funcionalidades

- **Dashboard Interativo**: Visualização de métricas e KPIs
- **Gestão de Orçamentos**: CRUD completo de orçamentos
- **Filtros por Período**: Análise mensal dos dados
- **Gráficos Dinâmicos**: Evolução mensal e distribuição
- **Relatórios**: Impressão de relatórios formatados
- **Sincronização em Tempo Real**: Integração com Supabase

## 📁 Estrutura do Projeto

```
controle-orcamentos/
├── docs/                          # Build para GitHub Pages
│   └── index.html                 # Arquivo HTML principal
│
├── src/                           # Código fonte
│   ├── assets/                    # Recursos estáticos
│   │   └── images/               # Imagens do projeto
│   │       ├── logo.jpeg         # Logo principal
│   │       └── logo-alt.jpeg     # Logo alternativo
│   │
│   ├── css/                       # Estilos CSS modulares
│   │   ├── variables.css         # Variáveis e tokens de design
│   │   ├── base.css              # Reset e estilos base
│   │   ├── components.css        # Componentes reutilizáveis
│   │   ├── layout.css            # Estrutura e containers
│   │   └── styles.css            # Arquivo principal (imports)
│   │
│   └── js/                        # JavaScript modular
│       ├── config.js             # Configurações do sistema
│       ├── utils.js              # Funções utilitárias
│       ├── api.js                # Comunicação com Supabase
│       ├── ui.js                 # Manipulação de interface
│       ├── charts.js             # Lógica dos gráficos
│       └── app.js                # Arquivo principal
│
├── .env.example                   # Exemplo de variáveis de ambiente
├── .gitignore                     # Arquivos ignorados pelo Git
└── README.md                      # Este arquivo
```

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **CSS**: CSS Variables, Flexbox, Grid, Media Queries
- **Charts**: [Chart.js](https://www.chartjs.org/) v4.4.1
- **Backend**: [Supabase](https://supabase.com/) (BaaS)
- **Fonts**: [Google Fonts](https://fonts.google.com/) (Inter, Poppins)

## 🚀 Instalação

### Requisitos
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- Conta no [Supabase](https://supabase.com/)

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/apphubvellori/controle-orcamentos.git
cd controle-orcamentos
```

2. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
# Edite o arquivo .env com suas credenciais do Supabase
```

3. **Abra o projeto**
```bash
# Usando Python
python -m http.server 8000

# Ou usando Node.js
npx serve .

# Ou simplesmente abra docs/index.html no navegador
```

## ⚙️ Configuração

### Supabase

1. Crie um projeto no [Supabase](https://supabase.com/)
2. Crie a tabela `orcamentos` com a seguinte estrutura:

```sql
CREATE TABLE orcamentos (
  id SERIAL PRIMARY KEY,
  data DATE NOT NULL,
  mes VARCHAR(7) NOT NULL,
  cliente VARCHAR(255) NOT NULL,
  valor_proposto DECIMAL(10,2) NOT NULL,
  valor_fechado DECIMAL(10,2) DEFAULT 0,
  status VARCHAR(20) NOT NULL CHECK (status IN ('Fechado', 'Perdido')),
  parcelado BOOLEAN DEFAULT FALSE,
  parcelas INT DEFAULT 1 CHECK (parcelas >= 1),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

3. Configure as políticas de RLS (Row Level Security) conforme necessário
4. Copie a URL e a chave anônima para o arquivo `src/js/config.js`

## 📖 Uso

### Dashboard
- Visualize métricas de orçamentos fechados e perdidos
- Acompanhe a taxa de conversão
- Analise gráficos de evolução mensal

### Orçamentos
- Clique em "Novo Orçamento" para adicionar
- Use os botões de ação para editar ou excluir
- Filtre por mês usando o seletor

### Relatórios
- Clique em "Relatório" para gerar impressão
- O sistema formata automaticamente para impressão

## 🤝 Contribuição

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

Desenvolvido com ❤️ por [AppHub Vellori](https://github.com/apphubvellori)
