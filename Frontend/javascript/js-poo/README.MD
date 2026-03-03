# ☕ JavaScript: Programação Orientada a Objetos

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat\&logo=javascript\&logoColor=%23F7DF1E)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=flat\&logo=node.js\&logoColor=white)
![ES6+](https://img.shields.io/badge/ES6%2B-Modern-orange)
![OOP](https://img.shields.io/badge/Paradigm-OOP-blue)

Este projeto foi desenvolvido como parte do aprofundamento no paradigma de **Programação Orientada a Objetos (POO)** com JavaScript moderno (ES6+).

O objetivo foi aplicar os princípios fundamentais da orientação a objetos na modelagem de um domínio bancário simplificado, enfatizando **encapsulamento, modularização e separação de responsabilidades**.

---

## 🎯 Objetivos Técnicos

* Modelar entidades do domínio utilizando classes
* Aplicar encapsulamento com atributos privados (`#`)
* Separar responsabilidades entre entidades
* Utilizar ES Modules no ambiente Node.js
* Simular regras de negócio com validação de estado interno

---

## 🧠 Conceitos Aplicados

### 1️⃣ Classes e Instâncias

Definição de moldes para objetos complexos como `Cliente` e `ContaCorrente`, garantindo organização e previsibilidade na criação de instâncias.

### 2️⃣ Encapsulamento

Uso de atributos privados (`#saldo`, por exemplo) para proteger o estado interno da classe, evitando manipulação externa indevida.

```js
#saldo = 0;
```

Isso assegura integridade dos dados e reforça boas práticas de design orientado a objetos.

### 3️⃣ Construtores

Padronização da criação de objetos com atributos obrigatórios no momento da instanciação.

### 4️⃣ Métodos e Regras de Negócio

Implementação de comportamentos como:

* `depositar(valor)`
* `sacar(valor)`
* `transferir(valor, contaDestino)`

Cada método valida regras antes de alterar o estado interno.

### 5️⃣ Composição de Objetos

Uma `ContaCorrente` possui um `Cliente`, simulando relacionamento real entre entidades do domínio.

---

## 🏗️ Estrutura do Projeto

```
js-poo/
│
├── Cliente.js
├── ContaCorrente.js
└── index.js
```

* **Cliente.js** → Representa dados de identificação do titular.
* **ContaCorrente.js** → Centraliza regras bancárias e controle de saldo.
* **index.js** → Responsável por instanciar objetos e executar operações.

---

## 🛠️ Tecnologias Utilizadas

* **Linguagem:** JavaScript (ES6+)
* **Runtime:** Node.js
* **Paradigma:** Programação Orientada a Objetos

---

## ▶️ Como Executar

O projeto utiliza **ES Modules** (configuração `"type": "module"` no `package.json`).

1️⃣ Navegue até o diretório do projeto:

```bash
cd Frontend/javascript/js-poo
```

2️⃣ Execute:

```bash
node index.js
```

---

## 📚 Aprendizados Relevantes

* Diferença entre propriedades públicas e privadas em JS moderno
* Importância da modelagem antes da implementação
* Organização modular com ES Modules
* Simulação de regras de negócio de forma orientada a objetos

---

> Projeto desenvolvido durante o curso **JavaScript: Programação Orientada a Objetos** (Alura), com adaptações e melhorias próprias para reforço de aprendizado.

---
