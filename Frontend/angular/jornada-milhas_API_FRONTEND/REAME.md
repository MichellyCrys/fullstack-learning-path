# 📈 Evolução do Projeto na Trilha

Este projeto faz parte da trilha **“Desenvolva Aplicações Escaláveis com Angular”**, onde a aplicação **Jornada Milhas** evolui gradualmente ao longo dos **5 cursos**.

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

## Curso 3

**Angular: Trabalhando com Tokens JWT na Autenticação e Cadastro**

Nesta etapa da trilha, a aplicação evoluiu para incluir **autenticação de usuários**, controle de acesso e integração com **tokens JWT**.

Além da camada visual e de comportamento criada anteriormente, foram adicionados **mecanismos reais de autenticação e proteção de rotas**, aproximando ainda mais o projeto de um cenário de produção.

---

### Interface de Login

Foi criada a **tela de login da aplicação**, utilizando **Angular** com **formulários reativos** para controle dos campos.

Principais implementações:

* controle de campos com `FormControl`
* validações de entrada
* integração com o serviço de autenticação

---

### Serviço de Autenticação

Foi desenvolvido um **AuthService** responsável por:

* realizar autenticação da pessoa usuária
* enviar credenciais para a API
* gerenciar o fluxo de login da aplicação

---

### Sistema de Cadastro de Usuários

Foi implementado o **formulário de cadastro**, reutilizando uma base de formulário comum.

Principais recursos:

* criação de um **formBase reutilizável**
* desenvolvimento do componente de cadastro
* interface de envio de dados para a API
* validações personalizadas nos campos
* uso de `displayWith` para ajustar dados exibidos

---

### Gerenciamento de Token JWT

A aplicação passou a trabalhar com **JSON Web Token (JWT)** para autenticação.

Foi criado um **TokenService** responsável por:

* armazenar o token no `localStorage`
* recuperar o token quando necessário
* remover o token no logout

---

### Integração do Token com a Aplicação

O token passou a ser utilizado para controlar a sessão da pessoa usuária.

Para isso foram criados:

* **UserService** para manipular informações do usuário autenticado
* integração do token com o fluxo de login

---

### Interceptação de Requisições HTTP

Foi implementado um **HTTP Interceptor** para:

* enviar automaticamente o token nas requisições
* garantir autenticação nas chamadas à API

---

### Proteção de Rotas

As rotas da aplicação passaram a ser protegidas utilizando **Guards funcionais** do Angular.

Isso permite:

* impedir acesso a páginas restritas
* redirecionar usuários não autenticados

---

### Personalização da Interface

O **header da aplicação** foi adaptado para reagir ao estado de autenticação.

Exemplos:

* exibição do perfil da pessoa usuária
* acesso às configurações de perfil
* controle de login e logout

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

Após o terceiro curso da trilha, a aplicação evoluiu de:

**Aplicação com formulários e serviços**

➡️ para

**Aplicação Angular com autenticação, cadastro de usuários e proteção de rotas**


---

# ⚙️ Funcionalidades Implementadas

| Funcionalidade                         | Descrição                                                       |
| -------------------------------------- | --------------------------------------------------------------- |
| Autenticação de Usuário                | Login utilizando **JSON Web Token (JWT)**                       |
| Cadastro de Usuário                    | Formulário de registro com validações personalizadas            |
| Gerenciamento de Token                 | Armazenamento e manipulação do token no `localStorage`          |
| Interceptor HTTP                       | Envio automático do token nas requisições autenticadas          |
| Proteção de Rotas                      | Controle de acesso utilizando **Route Guards**                  |
| Reactive Forms                         | Controle avançado de formulários com validação                  |
| Componentização                        | Interface dividida em componentes reutilizáveis                 |
| Angular Material                       | Construção de interface com componentes de **Angular Material** |
| Gerenciamento de Estado de Formulários | Serviço dedicado para controlar `FormGroup` e `FormControls`    |
| Personalização da Interface            | Header adaptado ao estado de autenticação da pessoa usuária     |

---

# 🏗 Arquitetura da Aplicação

A aplicação segue uma arquitetura baseada em **componentes, serviços e interceptação de requisições**.

## Camadas principais

```text
Interface (Components)
        │
        ▼
Serviços da Aplicação
(AuthService, UserService, FormService)
        │
        ▼
HTTP Interceptor
        │
        ▼
API Backend
```

---

## Fluxo de Autenticação

```text
Usuário realiza login
        │
        ▼
LoginComponent
        │
        ▼
AuthService
        │
        ▼
API Backend
        │
        ▼
JWT Token retornado
        │
        ▼
TokenService
        │
        ▼
localStorage
```

---

## Requisições Autenticadas

Após o login, as requisições passam por um interceptor:

```text
Componente
   │
   ▼
Service
   │
   ▼
HTTP Interceptor
   │ adiciona token
   ▼
API
```

Header enviado:

```text
Authorization: Bearer <token>
```

---

# 📂 Estrutura do Projeto

Estrutura simplificada da aplicação:

```text
jornada-milhas_API_FRONTEND
│
├── jornada-milhas-api/        # API utilizada pelo projeto
│
└── jornada-milhas/            # Aplicação Angular
    │
    ├── src/
    │   ├── app/
    │   │
    │   │   ├── core/
    │   │   │ 
    │   │   │   ├── interceptors/
    │   │   │   ├── services/
    │   │   │   └── types/
    │   │   │ 
    │   │   ├── guards/
    │   │   ├── pages/
    │   │   ├── shared /
    │   │   │
    │   │   ├── app-routing.module.ts
    │   │   └── app.module.ts
    │   │
    │   ├── assets/
    │   └── environments/
    │
    ├── angular.json
    └── package.json
```

---

# 🧠 Conceitos de Arquitetura Aplicados

Durante o desenvolvimento foram aplicados diversos conceitos importantes de arquitetura frontend:

* **Componentização**
* **Separação de responsabilidades**
* **Injeção de dependência**
* **Padrão Singleton para serviços**
* **Interceptação de requisições HTTP**
* **Proteção de rotas**
* **Gerenciamento de estado de formulários**

Esses conceitos são fundamentais no desenvolvimento de aplicações modernas com **Angular**.

---

# 📊 Status do Projeto na Trilha

| Curso | Tema                                                  | Status         |
| ----- | ----------------------------------------------------- | -------------- |
| 1     | Componentização e design com Angular Material         | ✅ Concluído    |
| 2     | Compenentização, formulários e integração com APIs    | ✅ Concluído    |
| 3     | Trabalhando com Tokens JWT na autenticação e cadastro | ✅ Concluído    |
| 4     | buscando, filtrando e exibindo dados de uma API       | ⏳ Em progresso |
| 5     | Boas práticas de desenvolvimento com Modularização, Lazy Loading e Interceptors            | ⏳ Em progresso |

---