# ☕ JavaScript: Programando a Orientação a Objetos

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)
![Node.js](https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white)
![ES6+](https://img.shields.io/badge/ES6%2B-Modern-orange)
![OOP](https://img.shields.io/badge/Paradigm-OOP-blue)

Este projeto foi desenvolvido como parte dos meus estudos sobre o paradigma de **Orientação a Objetos (OO)** no JavaScript. O foco principal foi entender como estruturar aplicações modulares, reutilizáveis e seguras através de classes, métodos e o uso moderno de atributos privados.

---

## 🚀 Conceitos de OO Implementados

Neste projeto, foram aplicados os pilares fundamentais da programação orientada a objetos:

* **Classes e Instâncias:** Criação de moldes para objetos complexos (`Cliente` e `ContaCorrente`).
* **Encapsulamento:** Uso de atributos privados (prefixados com `#`) para proteger dados sensíveis, garantindo a integridade do estado interno.
* **Construtores:** Padronização da criação de novos objetos com atributos obrigatórios na instanciação.
* **Comportamentos (Métodos):** Implementação de lógica de negócio (`depositar`, `transferir`) encapsulada na classe correspondente.
* **Referências e Composição:** Prática de composição de objetos, onde uma `ContaCorrente` possui um `Cliente` como atributo, simulando relacionamentos reais.

---

## 📂 Estrutura do Projeto

* **`Cliente.js`**: Classe que representa o titular, focada em dados de identificação (CPF, nome).
* **`ContaCorrente.js`**: Centraliza a lógica bancária e o controle de saldo.
* **`index.js`**: Orquestrador do sistema, responsável por instanciar as classes e executar as transações.

---

## 🛠️ Tecnologias

* **Linguagem:** JavaScript (ES6+).
* **Ambiente:** Node.js.

---

## 💻 Como Executar

O projeto utiliza **ES Modules** (configurado via `package.json`).

1.  **Navegue até a pasta:**
    ```bash
    cd Frontend/javascript/js-poo
    ```

2.  **Execute o código:**
    ```bash
    node index.js
    ```

---
> *Desenvolvido durante o curso de JavaScript: Programando a Orientação a Objetos (Alura).*