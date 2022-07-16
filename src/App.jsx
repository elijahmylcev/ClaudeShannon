import { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const [cardNumber, setCardNumber] = useState(7);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(0);

  function convertToDecimal(array) {
    array.map((el) => {
      let res = 0;
      let degree = el.length - 1;
      for (let i = 0; i < el.length; i++) {
        res += +el[i] * 2 ** degree;
        degree--;
        console.log(degree);
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
  console.log(convertToDecimal(baseArray));

  const cards = createCards(baseArray, 7);
  console.log(cards);

  function changeCard() {
    if (cardNumber === 1) {
      setResult(() => answers.reduce((a, b) => a + b));
    }
    setCardNumber(cardNumber - 1);
  }

  return (
    <div className="App">
      {!result
        && (
        <div>
          <h1>Загадайте любое число от 1 до 100</h1>
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
                onClick={changeCard}
              >
                No
              </button>
            </div>
          </div>
        </div>
        )}
    </div>
  );
}
export default App;
