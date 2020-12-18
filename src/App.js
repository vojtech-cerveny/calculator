import './App.css';

function App() {
  return (
    <div className="App">
      <div class="calculator">
        <input type="text" />

        <div class="calculator-buttons">
          <div class="is-divider"></div>
          <button class="calc-button is-reverse">C</button>
          <button class="calc-button is-reverse">%</button>
          <button class="calc-button is-reverse">+</button>
          <button class="calc-button is-red">÷</button>

          <button class="calc-button">7</button>
          <button class="calc-button">8</button>
          <button class="calc-button">9</button>
          <button class="calc-button is-red">×</button>

          <button class="calc-button">4</button>
          <button class="calc-button">5</button>
          <button class="calc-button">6</button>
          <button class="calc-button is-red">−</button>

          <button class="calc-button">1</button>
          <button class="calc-button">2</button>
          <button class="calc-button">3</button>
          <button class="calc-button is-red">+</button>

          <button class="calc-button is-zero">0</button>
          <button class="calc-button">.</button>
          <button class="calc-button is-red"> = </button>
        </div>
      </div>
    </div>
  );
}

export default App;
