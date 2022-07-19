import { useState } from 'react';
import './App.css';
import CardsList from './components/CardsList/CardsList';
import ResultComponent from './components/ResultComponent/ResultComponent';
import Start from './components/Start/Start';

function App() {
  const [cardNumber, setCardNumber] = useState(7);
  const [answers, setAnswers] = useState([]);
  const [start, setStart] = useState(true);
  const [result, setResult] = useState(0);

  function convertToDecimal(array) {
    return array.map((el) => {
      let res = 0;
      let degree = el.length - 1;
      for (let i = 0; i < el.length; i++) {
        res += +el[i] * 2 ** degree;
        degree--;
      }
      return res;
    });
  }

  function sortCards(array, base) {
    return array.filter((element) => element[base] === '1');
  }

  function createCards(base, amountCards) {
    const resCards = {};
    let i = amountCards;
    while (i !== 0) {
      resCards[i] = convertToDecimal(sortCards(base, i - 1));
      i--;
    }
    return resCards;
  }

  function convertToBinary(number) {
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1;) {
      num = parseInt(num / 2);
      binary = (num % 2) + (binary);
    }
    if (binary.length < 7) {
      let zero = 7 - binary.length;
      while (zero !== 0) {
        binary = `0${binary}`;
        zero--;
      }
    }
    return binary;
  }

  function arrayNumbers(right) {
    let i = 1;
    const array = [];
    while (i <= right) {
      array.push(convertToBinary(i));
      i++;
    }
    return array;
  }

  const baseArray = arrayNumbers(100);
  const cards = createCards(baseArray, 7);

  function changeCard() {
    setCardNumber(cardNumber - 1);
  }

  if (cardNumber === 0) {
    setResult(() => answers.reduce((a, b) => a + b));
    setCardNumber(7);
  }

  function onStart() {
    setStart(false);
  }

  function backToStart() {
    setCardNumber(7);
    setAnswers([]);
    setResult(0);
    setStart(true);
  }

  return (
    <div className="App">
      {start ? <Start onStart={onStart} /> : null}
      {(!result && !start) ? (
        <CardsList
          cardNumber={cardNumber}
          cards={cards}
          setAnswers={setAnswers}
          changeCard={changeCard}
          backToStart={backToStart}
        />
      ) : null}
      {result ? (
        <ResultComponent
          result={result}
          backToStart={backToStart}
        />
      ) : null}
    </div>
  );
}

export default App;
