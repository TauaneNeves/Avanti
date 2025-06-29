# Calculadora React

Este projeto é uma calculadora desenvolvida com React, inspirada na interface e funcionalidade das calculadoras tradicionais, como a do Windows. Ela suporta operações aritméticas básicas e algumas operações unárias, proporcionando uma experiência de usuário intuitiva.

## Funcionalidades

A calculadora oferece as seguintes funcionalidades:

- **Operações Básicas:** Adição, subtração, multiplicação, divisão e porcentagem.
- **Operações Unárias:** Inversão de sinal (+/-), cálculo de recíproco (1/x), quadrado (x²) e raiz quadrada (√x).
- **Controle de Entrada:**
  - **CE:** Limpa a entrada atual, mantendo o histórico da operação anterior.
  - **C:** Limpa completamente o display e o histórico, resetando a calculadora.
  - **⌫ (Backspace):** Apaga o último dígito inserido no display principal.
- **Display de Histórico:** Mostra a operação em andamento no display superior para facilitar o acompanhamento.

## Estrutura do Projeto

O projeto segue a estrutura padrão de um aplicativo Create React App, com os componentes principais da calculadora localizados em `src/components`:

- `src/App.js`: Componente principal que renderiza a calculadora.
- `src/components/calculadora.js`: Lógica principal da calculadora, gerenciando o estado e as operações.
- `src/components/botao.js`: Componente reutilizável para os botões da calculadora.
- `src/components/display.js`: Componente para exibir os valores principal e de histórico.
- Arquivos CSS: `src/index.css`, `src/App.css`, `src/components/calculadora.css`, `src/components/botao.css`, `src/components/display.css` para estilização dos componentes.

## Como Iniciar o Projeto

Para executar este projeto localmente, siga os passos abaixo:

### Clone o repositório:

```bash
git clone [URL_DO_SEU_REPOSITORIO]
cd calculadora
```

(Substitua `[URL_DO_SEU_REPOSITORIO]` pelo URL do seu repositório Git.)

### Instale as dependências:

```bash
npm install
# ou
yarn install
```

### Execute o aplicativo em modo de desenvolvimento:

```bash
npm start
# ou
yarn start
```

Isso iniciará o aplicativo em `http://localhost:3000`. A página será recarregada automaticamente se você fizer edições. Você também verá quaisquer erros de lint no console.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

- `npm start` ou `yarn start`: Roda o aplicativo no modo de desenvolvimento. Abra `http://localhost:3000` para visualizá-lo no navegador.
- `npm test` ou `yarn test`: Inicia o executor de testes no modo interativo de observação.
- `npm run build` ou `yarn build`: Cria o aplicativo para produção na pasta `build`, otimizando o React para o melhor desempenho.

## Saiba Mais

Você pode aprender mais na [documentação do Create React App](https://create-react-app.dev/).  
Para aprender React, confira a [documentação do React](https://reactjs.org/).

## Dependências Principais

As principais dependências do projeto, conforme `package.json`, são:

- `react`
- `react-dom`
- `react-scripts`
- `@testing-library/jest-dom`
- `@testing-library/react`
- `@testing-library/user-event`
- `web-vitals`

---

Desenvolvido por **Tauane Romi Neves**.