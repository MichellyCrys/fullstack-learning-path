# ☕ JavaScript: Programando a Orientação a Objetos

Este projeto foi desenvolvido como parte dos meus estudos sobre o paradigma de **Orientação a Objetos (OO)** no JavaScript. O foco principal foi entender como estruturar aplicações modulares, reutilizáveis e seguras através de classes, métodos e encapsulamento.

---

## 🚀 Conceitos de OO Implementados

Neste projeto, foram aplicados os pilares fundamentais da programação orientada a objetos:

* **Classes e Instâncias:** Criação de moldes para objetos complexos, como `Cliente` e `ContaCorrente`.
* **Encapsulamento:** Uso de atributos privados (prefixados com `#`) para proteger dados sensíveis e garantir que o estado interno do objeto só seja alterado por métodos específicos.
* **Construtores:** Padronização da criação de novos objetos, garantindo que atributos essenciais sejam definidos no momento da instanciação.
* **Atributos e Métodos:** Implementação de comportamentos (métodos como `depositar` e `transferir`) e propriedades de instância e de classe.
* **Referências e Composição:** Entendimento de como o JavaScript lida com objetos na memória e como compor classes (um objeto `ContaCorrente` que contém um objeto `Cliente`).

---

## 📂 Estrutura do Projeto

* **`Cliente.js`**: Define a classe que representa o titular da conta, utilizando construtores para inicializar CPF e nome.
* **`ContaCorrente.js`**: Contém a lógica de negócio bancária, incluindo saldos, depósitos, saques e transferências entre contas.
* **`index.js`**: Arquivo principal onde as instâncias são criadas e as interações entre clientes e contas são executadas.

---

## 🛠️ Tecnologias

* **Linguagem:** JavaScript (ES6+).
* **Ambiente:** Node.js.

---

## 💻 Como Executar

Como o projeto utiliza módulos do ES6 (especificado no `package.json`), você pode executá-lo diretamente com o Node:

1.  Navegue até a pasta:
    ```bash
    cd Frontend/javascript/js-poo
    ```

2.  Execute o arquivo principal:
    ```bash
    node index.js
    ```

---
Desenvolvido durante o curso de JavaScript programando Orientado a objetos (Alura).