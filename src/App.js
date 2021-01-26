import React, { useState } from 'react';
import './App.css';

function App() {
  const [previous, setPrevious] = useState({ number: null, operation: null });
  const [actual, setActual] = useState(0);
  const [cleanInput, setCleanInput] = useState(false);

  const isFloat = (n) => {
    return n === +n && n !== (n | 0);
  };

  const addNumberToLine = (number) => {
    return setActual((previous) => Number.parseFloat(previous.toString() + number));
  };

  const setStates = (operation, number) => {
    console.log('something');
    setActual(number);
    setPrevious({ operation: operation, number: number });
  };
  const insertNumber = (value) => {
    setCleanInput(false);
    if (cleanInput) {
      setActual(value);
      return;
    }
    addNumberToLine(value);
  };

  const operation = (operation) => {
    setCleanInput(true);

    if (operation === '.') {
      setCleanInput(false);
      // check if it is '30.' or float 30.3 - if yes, don't add another dot
      if (!(typeof actual == 'string' || isFloat(actual))) {
        setActual(actual + '.');
      }
      return;
    }

    if (typeof actual == 'string') {
      const sliced = actual.slice(0, -1);
      setActual(sliced);
    }
    if (typeof previous.number == 'string') {
      const sliced = previous.number.slice(0, -1);
      setPrevious({ ...previous, number: sliced });
    }

    if (operation === 'C') return setStates(null, 0);
    if (operation === '%') return setStates('%', actual / 100);

    switch (previous.operation) {
      case null:
        setPrevious({ operation: operation, number: actual });
        break;
      case '+':
        setStates(operation, previous.number + actual);
        break;
      case '-':
        setStates(operation, previous.number - actual);
        break;
      case '*':
        setStates(operation, previous.number * actual);
        break;
      case '/':
        setStates(operation, previous.number / actual);
        break;
      default:
        setStates(operation, actual);
        break;
    }
    if (operation === '=') return setPrevious({ number: null, operation: null });
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="result">{actual}</div>

        <div className="calculator-buttons">
          <div className="is-divider"></div>
          <button className="is-reverse" onClick={() => operation('C')}>
            C
          </button>
          <button className="is-reverse" onClick={() => operation('%')}>
            %
          </button>
          <button className="is-reverse">+</button>
          <button className="is-red" onClick={() => operation('/')}>
            ÷
          </button>

          <button onClick={() => insertNumber(7)}>7</button>
          <button onClick={() => insertNumber(8)}>8</button>
          <button onClick={() => insertNumber(9)}>9</button>
          <button className="is-red" onClick={() => operation('*')}>
            ×
          </button>

          <button onClick={() => insertNumber(4)}>4</button>
          <button onClick={() => insertNumber(5)}>5</button>
          <button onClick={() => insertNumber(6)}>6</button>
          <button className="is-red" onClick={() => operation('-')}>
            −
          </button>

          <button onClick={() => insertNumber(1)}>1</button>
          <button onClick={() => insertNumber(2)}>2</button>
          <button onClick={() => insertNumber(3)}>3</button>
          <button className="is-red" onClick={() => operation('+')}>
            +
          </button>

          <button className="is-zero" onClick={() => insertNumber(0)}>
            0
          </button>
          <button onClick={() => operation('.')}>.</button>
          <button className="is-red" onClick={() => operation('=')}>
            {' '}
            ={' '}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
