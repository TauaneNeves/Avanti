// tauaneneves/avanti/Avanti-main/teste/src/components/calculadora.js
import React, { useState } from 'react';
import Display from './display';  
import Button from './botao';    
import './calculadora.css';       

const Calculator = () => {
  const [mainValue, setMainValue] = useState('0');
  const [historyValue, setHistoryValue] = useState('');
  const [operator, setOperator] = useState(null);
  const [prevNum, setPrevNum] = useState(null);
  const [resetMainValue, setResetMainValue] = useState(false);
   
  // Função auxiliar para atualizar o display principal e o histórico
  const updateMainAndHistory = (newMain, newHistory) => {
    setMainValue(newMain);
    setHistoryValue(newHistory);
  };

  const handleDigit = (digit) => {
    if (resetMainValue) {
      updateMainAndHistory(
        String(digit),
        operator ? `${prevNum}${operator}${digit}` : String(digit)
      );
      setResetMainValue(false);
    } else {
      const newValue = mainValue === '0' ? String(digit) : mainValue + digit;
      updateMainAndHistory(
        newValue,
        operator ? `${prevNum}${operator}${newValue}` : newValue
      );
    }
  };

  const handleDecimal = () => {
    if (resetMainValue) {
      updateMainAndHistory(
        '0.',
        operator ? `${prevNum}${operator}0.` : '0.'
      );
      setResetMainValue(false);
    } else if (!mainValue.includes('.')) {
      const newValue = mainValue + '.';
      updateMainAndHistory(
        newValue,
        operator ? `${prevNum}${operator}${newValue}` : newValue
      );
    }
  };

  const handleClear = () => {
    setMainValue('0');
    setHistoryValue('');
    setOperator(null);
    setPrevNum(null);
    setResetMainValue(false);
  };

  const handleClearEntry = () => {
    setMainValue('0');
  };

  const handleBackspace = () => {
    const newMain = mainValue.slice(0, -1) || '0';
    let newHistory = newMain;

    if (operator && prevNum !== null) {
      newHistory = `${prevNum}${operator}${newMain}`;
    }
    updateMainAndHistory(newMain, newHistory);
  };

  const handleUnaryOperator = (op) => {
    const currentNum = parseFloat(mainValue);
    let result;
    switch (op) {
      case '+/-': result = currentNum * -1; break;
      case '1/x': result = 1 / currentNum; break;
      case 'x²': result = currentNum * currentNum; break;
      case '√x': result = Math.sqrt(currentNum); break;
      default: result = currentNum;
    }
    setMainValue(String(result));
    setHistoryValue(String(result)); // Para operações unárias, o histórico pode ser apenas o resultado
    setPrevNum(result);
    setResetMainValue(true);
  };

  const calculate = (num1, num2, op) => {
    switch (op) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return num2 !== 0 ? num1 / num2 : 'Erro';
      case '%': return num1 * (num2 / 100);
      default: return num2;
    }
  };

  const performOperation = (nextOperator) => {
    const currentNum = parseFloat(mainValue);
    let calculatedResult = prevNum;

    if (prevNum === null || resetMainValue) {
      // If no previous number or after reset/equals, current number becomes prevNum
      calculatedResult = currentNum;
    } else if (operator) {
      // If there's a pending operator, perform the calculation
      calculatedResult = calculate(prevNum, currentNum, operator);
    }

    setPrevNum(calculatedResult);
    setOperator(nextOperator);
    setResetMainValue(true);
    updateMainAndHistory(String(calculatedResult), `${calculatedResult}${nextOperator}`);
  };

  const handleEquals = () => {
    const currentNum = parseFloat(mainValue);
    if (prevNum !== null && operator) {
      const result = calculate(prevNum, currentNum, operator);
      const newHistory = `${prevNum} ${operator} ${currentNum} =`;
      updateMainAndHistory(String(result), newHistory);

      setPrevNum(result);
      setOperator(null);
      setResetMainValue(true);
    } else if (historyValue.includes('=')) {
        // Se já era uma operação de igual, apenas atualiza o histórico com o valor principal
        updateMainAndHistory(mainValue, mainValue);
        setOperator(null);
        setPrevNum(parseFloat(mainValue));
        setResetMainValue(true);
    }
  };

  return (
    <div className="calculator">
      <Display mainValue={mainValue} historyValue={historyValue} />
      <div className="button-grid">
        <Button value="%" onClick={performOperation} className="misc-operator" />
        <Button value="CE" onClick={handleClearEntry} className="misc-operator" />
        <Button value="C" onClick={handleClear} className="misc-operator" />
        <Button value="⌫" onClick={handleBackspace} className="misc-operator" /> {/* Backspace icon */}

        <Button value="1/x" onClick={handleUnaryOperator} className="misc-operator" />
        <Button value="x²" onClick={handleUnaryOperator} className="misc-operator" />
        <Button value="√x" onClick={handleUnaryOperator} className="misc-operator" />
        <Button value="/" onClick={performOperation} className="operator" />

        <Button value="7" onClick={handleDigit} />
        <Button value="8" onClick={handleDigit} />
        <Button value="9" onClick={handleDigit} />
        <Button value="*" onClick={performOperation} className="operator" />

        <Button value="4" onClick={handleDigit} />
        <Button value="5" onClick={handleDigit} />
        <Button value="6" onClick={handleDigit} />
        <Button value="-" onClick={performOperation} className="operator" />

        <Button value="1" onClick={handleDigit} />
        <Button value="2" onClick={handleDigit} />
        <Button value="3" onClick={handleDigit} />
        <Button value="+" onClick={performOperation} className="operator" />

        <Button value="+/-" onClick={handleUnaryOperator} />
        <Button value="0" onClick={handleDigit} />
        <Button value="." onClick={handleDecimal} />
        <Button value="=" onClick={handleEquals} className="equals" />
      </div>
    </div>
  );
};

export default Calculator;