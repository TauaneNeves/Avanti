# 🧮 Calculadora React

Este projeto é uma calculadora desenvolvida com **React**, inspirada na interface e funcionalidade das calculadoras tradicionais, como a do Windows. Ela suporta operações aritméticas básicas e algumas operações unárias, proporcionando uma experiência de usuário intuitiva.

---

## ✨ Funcionalidades

A calculadora oferece as seguintes funcionalidades:

- 🔢 **Operações Básicas:**
  - ➕ Adição
  - ➖ Subtração
  - ✖️ Multiplicação
  - ➗ Divisão
  - 📊 Porcentagem

- 🧠 **Operações Unárias:**
  - 🔃 Inversão de sinal (+/-)
  - 🔁 Cálculo de recíproco (1/x)
  - ² Elevar ao quadrado (x²)
  - √ Raiz quadrada (√x)

- 🧼 **Controle de Entrada:**
  - 🧽 **CE:** Limpa a entrada atual, mantendo o histórico da operação anterior
  - 🧹 **C:** Limpa completamente o display e o histórico, resetando a calculadora
  - ⌫ **Backspace:** Apaga o último dígito inserido no display principal

- 🖥️ **Display de Histórico:** Exibe a operação em andamento no display superior para facilitar o acompanhamento

---

## 🗂️ Estrutura do Projeto

O projeto segue a estrutura padrão de um aplicativo **Create React App**, com os componentes principais localizados em `src/components`:

- `src/App.js`: Componente principal que renderiza a calculadora
- `src/components/calculadora.js`: Lógica principal da calculadora, gerenciando o estado e as operações
- `src/components/botao.js`: Componente reutilizável para os botões da calculadora
- `src/components/display.js`: Componente para exibir os valores principal e de histórico
- 🎨 Arquivos CSS:
  - `src/index.css`
  - `src/App.css`
  - `src/components/calculadora.css`
  - `src/components/botao.css`
  - `src/components/display.css`

---

## 🛠️ Scripts Disponíveis

No diretório do projeto, você pode executar:

- ▶️ `npm start` ou `yarn start`: Inicia o app em modo de desenvolvimento (`http://localhost:3000`)
- 🧪 `npm test` ou `yarn test`: Executa os testes no modo interativo
- 📦 `npm run build` ou `yarn build`: Cria o aplicativo otimizado para produção na pasta `build`

---

## 📦 Dependências Principais

Conforme especificado no `package.json`:

- `react`
- `react-dom`
- `react-scripts`
- `@testing-library/jest-dom`
- `@testing-library/react`
- `@testing-library/user-event`
- `web-vitals`

---

## 👩‍💻 Desenvolvido por

**Tauane Romi Neves** 
