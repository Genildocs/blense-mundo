# 🚀 Guia de Comandos e Boas Práticas - Google Antigravity

Este guia reúne a referência completa dos **Slash Commands** do Google Antigravity (AGY) e os padrões de desenvolvimento adotados neste projeto.

---

## 📑 Sumário
1. [Visão Geral dos Slash Commands](#-visão-geral-dos-slash-commands)
2. [Detalhamento de Cada Comando](#-detalhamento-de-cada-comando)
   - [/goal](#1-goal---execução-autônoma-orientada-a-objetivo)
   - [/plan](#2-plan---planejamento-estruturado)
   - [/schedule](#3-schedule---agendamento-e-rotinas-em-segundo-plano)
   - [/browser](#4-browser---navegação-web-e-testes-visuais)
   - [/grill-me](#5-grill-me---alinhamento-técnico-e-entrevista)
   - [/teamwork-preview](#6-teamwork-preview---equipe-multi-agente-em-paralelo)
   - [/boost](#7-boost---raciocínio-profundo-e-verificação-rigorosa)
   - [/learn](#8-learn---aprendizado-e-memória-persistente)
3. [Tabela de Referência Rápida](#-tabela-de-referência-rápida)
4. [Padrões do Projeto: Styled Components](#-padrões-do-projeto-styled-components)
5. [Comandos Úteis de Terminal](#-comandos-úteis-de-terminal)

---

## ⚡ Visão Geral dos Slash Commands

Os **Slash Commands** são atalhos executados diretamente no chat que acionam comportamentos especializados da IA, ativam ferramentas avançadas ou iniciam subagentes dedicados.

Para usar qualquer comando, basta digitar a barra `/` no início da mensagem seguida do nome do comando.

---

## 🔍 Detalhamento de Cada Comando

### 1. `/goal` - Execução Autônoma Orientada a Objetivo
* **Foco:** Persistência, autonomia completa e entrega de ponta a ponta.
* **O que faz:** O agente entra em um modo contínuo de resolução de problemas. Ele investiga o código, faz alterações, executa comandos/testes, diagnostica falhas e itera sozinho até que o objetivo esteja 100% cumprido e validado.
* **Quando usar:**
  - Resolução de bugs complexos.
  - Ajustar suítes de testes até 100% de sucesso.
  - Tarefas longas que podem rodar sem intervenção humana constante (*overnight*).
* **Exemplo:**
  ```text
  /goal corrigir todas as inconsistências de lint e garantir que o build de produção passe sem erros
  ```

---

### 2. `/plan` - Planejamento Estruturado
* **Foco:** Estratégia, arquitetura e controle prévio.
* **O que faz:** Antes de alterar qualquer linha de código, o agente estuda o repositório e gera um plano de ação detalhado (roteiro passo a passo com marcos e arquivos afetados). O usuário revisa e aprova o plano antes da execução.
* **Quando usar:**
  - Grandes refatorações de código.
  - Implementação de novas funcionalidades que tocam múltiplos módulos.
  - Quando você quer discutir os trade-offs técnicos antes de iniciar.
* **Exemplo:**
  ```text
  /plan criar um fluxo completo de autenticação com contexto React, rotas protegidas e tela de login
  ```

---

### 3. `/schedule` - Agendamento e Rotinas em Segundo Plano
* **Foco:** Automação com controle de tempo e tarefas em segundo plano.
* **O que faz:** Agenda a execução de tarefas para um tempo determinado (temporizador único) ou define rotinas periódicas (*cron jobs*).
* **Quando usar:**
  - Lembretes para verificar deploys ou compilações longas.
  - Health checks periódicos ou monitoramento em segundo plano.
* **Exemplos:**
  ```text
  /schedule em 15 minutos verifique se o servidor de desenvolvimento está respondendo na porta 5173
  /schedule a cada 30 minutos rode os testes e avise caso haja alguma quebra
  ```

---

### 4. `/browser` - Navegação Web e Testes Visuais
* **Foco:** Interação com interfaces reais e navegação externa.
* **O que faz:** Habilita o agente a navegar em páginas web públicas ou aplicações rodando localmente (`localhost`), inspecionar elementos do DOM, tirar capturas de tela e testar interações de usuário.
* **Quando usar:**
  - Validar a aparência visual de componentes e páginas.
  - Verificar comportamento responsivo ou alternância de temas (Dark/Light).
  - Pesquisar documentações técnicas atualizadas online.
* **Exemplo:**
  ```text
  /browser abra http://localhost:5173 e verifique visualmente se o botão de alternar tema muda as cores do fundo e dos cards
  ```

---

### 5. `/grill-me` - Alinhamento Técnico e Entrevista
* **Foco:** Eliminação de dúvidas e refinamento de requisitos.
* **O que faz:** O agente assume o papel de um arquiteto técnico e realiza uma breve "entrevista" interativa com você, fazendo perguntas de múltipla escolha para entender decisões de design, requisitos e regras de negócio antes de começar a codificar.
* **Quando usar:**
  - Tarefas com requisitos abertos ou genéricos.
  - Antes de iniciar um novo módulo ou componente do zero.
* **Exemplo:**
  ```text
  /grill-me quero adicionar uma tabela de listagem de usuários com filtros e paginação
  ```

---

### 6. `/teamwork-preview` - Equipe Multi-Agente em Paralelo
* **Foco:** Produtividade em escala para projetos grandes.
* **O que faz:** Decompõe um projeto em subprojetos e orquestra múltiplos subagentes especializados trabalhando simultaneamente em papéis diferentes (ex: um focado na UI, outro na lógica de negócio e outro nos testes).
* **Quando usar:**
  - Criação de módulos completos ou sistemas inteiros.
  - Quando a tarefa pode ser paralelizada para economizar tempo.
* **Exemplo:**
  ```text
  /teamwork-preview construir o módulo de checkout: formulário de dados, cálculo de frete e tela de confirmação
  ```

---

### 7. `/boost` - Raciocínio Profundo e Verificação Rigorosa
* **Foco:** Análise técnica minuciosa (*Deep Thinking*).
* **O que faz:** Ativa a máxima capacidade analítica do modelo. O agente examina múltiplos cenários, prevê casos de borda, concorrência, problemas de memória/performance e valida a implementação com rigor redobrado.
* **Quando usar:**
  - Otimização de performance crítica.
  - Debugging de vazamentos de memória (*memory leaks*) ou problemas concorrentes.
  - Refatoração de algoritmos complexos.
* **Exemplo:**
  ```text
  /boost analise o ciclo de vida deste componente e otimize os re-renders desnecessários
  ```

---

### 8. `/learn` - Aprendizado e Memória Persistente
* **Foco:** Memória contínua e preferências do projeto.
* **O que faz:** Registra uma correção, regra ou convenção do seu projeto na memória persistente para que o agente aplique automaticamente nas próximas sessões.
* **Quando usar:**
  - Salvar convenções de código específicas da sua equipe.
  - Ensinar atalhos ou regras sobre a estrutura do repositório.
* **Exemplo:**
  ```text
  /learn sempre utilize transient props ($prop) nos styled-components e consulte as cores em src/styles/theme.js
  ```

---

## 📊 Tabela de Referência Rápida

| Comando | Para que serve? | Perfil de Ação |
| :--- | :--- | :--- |
| **`/goal`** | Concluir uma meta complexa até o fim sem parar | Autônomo e focado em entrega |
| **`/plan`** | Criar e revisar o roteiro de etapas antes de alterar código | Analítico com validação do usuário |
| **`/schedule`** | Agendar lembretes ou tarefas cron em segundo plano | Temporal e segundo plano |
| **`/browser`** | Navegar em sites ou testar a UI localmente | Visual e navegação |
| **`/grill-me`** | Entrevistar o usuário para alinhar requisitos | Consultivo e interativo |
| **`/teamwork-preview`** | Orquestrar subagentes em paralelo | Colaborativo multi-agente |
| **`/boost`** | Raciocínio profundo para problemas de alta complexidade | Análise profunda e verificação |
| **`/learn`** | Fixar regras e convenções na memória do agente | Persistência de conhecimento |

---

## 🎨 Padrões do Projeto: Styled Components

Este projeto foi estruturado seguindo as melhores práticas da indústria com `styled-components`:

1. **Design Tokens & ThemeProvider (`src/styles/theme.js`)**:
   - Cores, tipografia, espaçamentos, sombras e breakpoints centralizados em tokens.
   - Suporte nativo e reativo a múltiplos temas (`lightTheme` e `darkTheme`).
   
2. **Transient Props (`$prop`)**:
   - Props de estilo recebem o prefixo `$` (ex: `<Button $variant="primary" $size="md" />`).
   - Evita que props internas vazem para o elemento HTML subjacente gerando avisos no React/DOM.

3. **GlobalStyles com Reset (`src/styles/GlobalStyles.js`)**:
   - Substitui CSS estático disperso por `createGlobalStyle`, conectando o reset diretamente ao tema ativo.

4. **Mixins Condicionais Seguros (`css`)**:
   - Utilização do helper `css` do `styled-components` para construir variações de componentes de forma limpa.

5. **Polimorfismo com a prop `as`**:
   - Capacidade de trocar a tag HTML sem recriar componentes (ex: `<Title as="h2">`).

---

## 🛠️ Comandos Úteis de Terminal

- **Iniciar servidor de desenvolvimento:**
  ```bash
  npm run dev
  ```
- **Verificar erros e regras de linting:**
  ```bash
  npm run lint
  ```
- **Compilar para produção:**
  ```bash
  npm run build
  ```
- **Visualizar o build de produção localmente:**
  ```bash
  npm run preview
  ```
