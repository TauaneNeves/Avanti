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
   
  const handleDigit = (digit) => {
    if (resetMainValue) {
      setMainValue(String(digit));
      if (operator) {
        setHistoryValue(String(prevNum) + operator + String(digit));
      } else {
        setHistoryValue(String(digit));
      }
      setResetMainValue(false);
    } else {
      const newValue = mainValue === '0' ? String(digit) : mainValue + digit;
      setMainValue(newValue);
      if (operator) {
        setHistoryValue(String(prevNum) + operator + newValue);
      } else {
        setHistoryValue(newValue);
      }
    }
  };

  const handleDecimal = () => {
    if (resetMainValue) {
      setMainValue('0.');
      if (operator) {
        setHistoryValue(String(prevNum) + operator + '0.');
      } else {
        setHistoryValue('0.');
      }
      setResetMainValue(false); 
    } else if (!mainValue.includes('.')) {
      const newValue = mainValue + '.';
      setMainValue(newValue);
      if (operator) {
        setHistoryValue(String(prevNum) + operator + newValue);
      } else {
        setHistoryValue(newValue);
      }
    }
  };

  const handleClear = () => {
    setMainValue('0');
    setHistoryValue('');
    setOperator(null);
    setPrevNum(null);
    setResetMainValue(false);
  };

  const calculate = (num1, num2, op) => {
    switch (op) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return num2 !== 0 ? num1 / num2 : 'Erro';
      default: return num2;
    }
  };

  const performOperation = (nextOperator) => {
    const currentNum = parseFloat(mainValue);
    if (prevNum === null) {
      setPrevNum(currentNum);
    } else if (operator) {
      const result = calculate(prevNum, currentNum, operator);
      setMainValue(String(result)); 
      setPrevNum(result); 
    } else {
      setPrevNum(currentNum);
    }

    setOperator(nextOperator); 
    setResetMainValue(true); 
    setHistoryValue(String(prevNum !== null && operator ? prevNum : currentNum) + nextOperator);
  };

  const handleEquals = () => {
    const currentNum = parseFloat(mainValue);
    if (prevNum !== null && operator) {
      const result = calculate(prevNum, currentNum, operator);
      setHistoryValue(`${prevNum} ${operator} ${currentNum} =`);
      setMainValue(String(result));

      setPrevNum(result);
      setOperator(null);
      setResetMainValue(true); 
    } else if (historyValue.includes('=')) {

        setHistoryValue(mainValue);
        setOperator(null);
        setPrevNum(parseFloat(mainValue));
        setResetMainValue(true);
    }
  };

  return (
    <div className="calculator">
      <Display mainValue={mainValue} historyValue={historyValue} />
      <div className="button-grid">
        <Button value="C" onClick={handleClear} className="clear" />
        <Button value="/" onClick={performOperation} className="operator" />
        <Button value="*" onClick={performOperation} className="operator" />
        <Button value="-" onClick={performOperation} className="operator" />

        <Button value="7" onClick={handleDigit} />
        <Button value="8" onClick={handleDigit} />
        <Button value="9" onClick={handleDigit} />
        <Button value="+" onClick={performOperation} className="operator" />

        <Button value="4" onClick={handleDigit} />
        <Button value="5" onClick={handleDigit} />
        <Button value="6" onClick={handleDigit} />

        <Button value="1" onClick={handleDigit} />
        <Button value="2" onClick={handleDigit} />
        <Button value="3" onClick={handleDigit} />
        <Button value="=" onClick={handleEquals} className="equals" />

        <Button value="0" onClick={handleDigit} className="zero" />
        <Button value="." onClick={handleDecimal} />
      </div>
    </div>
  );
};

export default Calculator;