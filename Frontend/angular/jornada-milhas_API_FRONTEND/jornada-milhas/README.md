# 📈 Evolução do Projeto na Trilha

Este projeto faz parte da trilha **“Desenvolva Aplicações Escaláveis com Angular”**, onde a aplicação **Jornada Milhas** evolui gradualmente ao longo dos **8 cursos**.

## Curso 1

**Angular: Componentização e Design com Angular Material**

Neste primeiro momento, o foco foi estruturar a interface da aplicação.

Principais tópicos trabalhados:

* Criação de **componentes reutilizáveis**
* Organização da aplicação em **módulos e camadas**
* Construção da interface com **Angular Material**
* Implementação de layout responsivo
* Estrutura inicial da aplicação Angular

Neste estágio, a aplicação possuía **principalmente a camada visual**.

---

## Curso 2

**Angular: Componentização, Formulários e Interação com APIs**

No segundo curso, a aplicação passou a ter **comportamento e lógica de negócio**, aproximando o projeto de um cenário real de desenvolvimento.

Principais conceitos aplicados:

### Serviços e Arquitetura

* Introdução ao uso de **services** no **Angular**
* Compreensão do escopo de serviços
* Aplicação do padrão **Singleton** para gerenciamento de estado

---

### Gerenciamento de Estado do Formulário

Foi criado um **serviço responsável por controlar o estado do formulário**, centralizando:

* criação do `FormGroup`
* definição dos `FormControls`
* compartilhamento do formulário entre componentes

Isso melhora:

* reutilização
* organização da lógica
* manutenção do código

---

### Reactive Forms

Implementação de formulários utilizando **Reactive Forms**, permitindo:

* validação estruturada
* controle de estado do formulário
* integração com serviços da aplicação

---

### Componentes com Form Control

Foi desenvolvido um **componente customizado que implementa um Form Control**, permitindo:

* receber um `FormControl` externo
* atualizar dinamicamente o número de passageiros
* integrar com o formulário principal da aplicação

Esse padrão permite criar **componentes reutilizáveis integrados ao sistema de formulários do Angular**.

---

### Consumo de Dados e Cache

Também foi implementada uma camada simples de **cache para dados da aplicação**, reduzindo chamadas repetidas à API.

---

# 🧠 Experiência de Desenvolvimento

Durante esta etapa da trilha, o desenvolvimento simulou um cenário real de mercado:

* trabalhar em uma aplicação já existente
* evoluir funcionalidades a partir de um **layout definido em Figma**
* refatorar código existente
* implementar novas funcionalidades de forma incremental

Essa abordagem reforça práticas importantes de **manutenção e evolução de sistemas frontend**.

---

## Resultado desta Etapa

Após os dois primeiros cursos da trilha, o projeto evoluiu de:

**Interface estática**

➡️ para

**Aplicação Angular com comportamento, formulários e serviços**

---
