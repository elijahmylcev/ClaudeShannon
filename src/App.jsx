import { useState } from 'react';
import './App.css';
import Card from './Card';
import Start from './components/Start';

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
    console.log(result);
    setCardNumber(7);
  }

  function onStart() {
    setStart(false);
    console.log(1);
  }

  return (
    <div className="App">
      {start ? <Start onStart={onStart} /> : null}
      {/* {!result ? (
        <div>
          <Card array={cards[cardNumber]} />
          <div className="buttons">
            <button
              type="button"
              onClick={() => {
                setAnswers((prevState) => [...prevState, cards[cardNumber][0]]);
                changeCard();
              }}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => {
                setAnswers((prevState) => [...prevState, 0]);
                changeCard();
              }}
            >
              No
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2>
            Вы загадали число:
            {' '}
            {result}
          </h2>
        </div>
      )} */}
    </div>
  );
}

export default App;
