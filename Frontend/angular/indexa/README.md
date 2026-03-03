# 📇 Indexa

![Angular](https://img.shields.io/badge/angular-v17%2B-dd0031?logo=angular)
![TypeScript](https://img.shields.io/badge/typescript-007acc?logo=typescript)
![Status](https://img.shields.io/badge/status-stable-blue)

Aplicação frontend desenvolvida com Angular para gerenciamento e exibição de contatos.

O projeto tem como foco a arquitetura baseada em componentes, uso da nova sintaxe de controle de fluxo do Angular (v17+) e organização modular da interface.

---

# 🎯 Objetivo do Projeto

Consolidar conceitos modernos de desenvolvimento com Angular:

- Componentização e reutilização
- Fluxo de controle com `@for`
- Separação de responsabilidades
- Importação de dados estáticos via JSON
- Estruturação de projeto com Angular CLI
- Organização visual com CSS componentizado

---

# 🚀 Funcionalidades

- 📋 Listagem de contatos
- 🔠 Organização alfabética
- 🧩 Componentes independentes e reutilizáveis
- 📦 Leitura de dados estáticos via JSON

---

# 🏗️ Arquitetura

A aplicação segue o padrão SPA (Single Page Application), organizada em componentes desacoplados.

## Estrutura Simplificada

```

indexa/src
├── app/
│  ├── components/
│  │   ├── cabecalho/
│  │   ├── container/
│  │   ├── contato/
│  │   └── separador/
│  └──
└──

```

## Fluxo de Renderização

```mermaid
flowchart LR

    A[JSON Local] --> B[App Component]
    B --> C[@for Directive]
    C --> D[Contato Component]
```

---

# 🛠️ Tecnologias Utilizadas

### Framework

* Angular (v17+)

### Linguagem

* TypeScript

### Estilização

* CSS3 (escopo por componente)

### Ferramentas

* Angular CLI
* Node.js

---

# ⚙️ Como Executar

Instalar dependências:

```bash
npm install
```

Executar aplicação:

```bash
ng serve
```

Acessar:

```
http://localhost:4200
```

---

# ⚠️ Limitações Atuais

* Dados estáticos (sem backend)
* Sem persistência
* Sem testes automatizados
* Sem gerenciamento de estado externo

---


# 📈 Papel Dentro do Ecossistema

O Indexa consolida fundamentos de componentização e controle de fluxo no Angular moderno, servindo como base para aplicações mais complexas com integração backend e arquitetura fullstack.

---
