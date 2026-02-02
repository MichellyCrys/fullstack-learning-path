# 📇 Indexa - Agenda de Contatos

O **Indexa** é uma aplicação de agenda de contactos desenvolvida em Angular. O projeto foca-se na construção de interfaces modulares e na utilização de recursos modernos da linguagem de template do framework para a exibição dinâmica de dados.

---

## 🚀 Conceitos e Funcionalidades

Neste projeto, foram exploradas as seguintes capacidades do Angular:

* **Componentes Reutilizáveis:** Organização da aplicação em componentes independentes e modulares, como `Cabecalho`, `Container`, `Contato` e `Separador`, facilitando a manutenção e o reaproveitamento de código.
* **Fluxo de Controlo Moderno (@for):** Utilização da nova sintaxe de template do Angular para iterar sobre a lista de contactos de forma mais performática e legível.
* **Manipulação de Dados Local (JSON):** Implementação da leitura direta de ficheiros JSON (`agenda.json`) para alimentar a interface com informações de contactos.
* **Configuração de Módulos:** Ajuste de configurações no ficheiro `tsconfig.json` (`resolveJsonModule` e `esModuleInterop`) para permitir a importação nativa de ficheiros de dados.
* **Angular CLI:** Uso extensivo da interface de linha de comando para geração de estrutura, build e execução do projeto.
* **Estilização Avançada:** Prática de CSS focado em componentes para garantir que o layout da agenda seja responsivo e visualmente organizado.

---

## 🛠️ Tecnologias Utilizadas

* **Framework:** Angular (v17+).
* **Linguagem:** TypeScript.
* **Estilização:** CSS3.
* **Dados:** Ficheiro JSON local.

---

## 💻 Como Executar o Projeto

Este projeto requer o **Node.js** e o **Angular CLI** instalados globalmente.

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    ng serve
    ```

3.  **Aceda no navegador:**
    Abra `http://localhost:4200` para visualizar a aplicação em execução.

---
Desenvolvido durante o curso "Angular: construa uma aplicação web com componentes, linguagem de template e CLI" (Alura).
