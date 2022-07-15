import { useState } from 'react';
import './App.css';
import Card from './Card';

function App() {
  const baseArray = arrayNumbers(100);
  const [cardNumber, setCardNumber] = useState(7);
  const [answers, setAnswers] = useState([]);

  function createCards(base, amountCards) {
    const cards = {};
    let i = amountCards;
    while (i !== 0) {
      cards[i] = convertToDecimal(sortCards(base, i - 1))
      i--;
    }

    return cards;
  }

  const cards = createCards(baseArray, 7);

  function convertToBinary(number) {
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
      num = parseInt(num / 2);
      binary =  (num % 2) + (binary);
    }
    if (binary.length < 7) {
      let zero = 7 - binary.length
      while(zero !== 0) {
        binary = '0' + binary;
        zero--;
      }
    }
    return binary
  }

  function arrayNumbers(right) {
    let i = 1;
    const array = [];
    while (i <= right) {
      array.push(convertToBinary(i))
      i++
    }
    return array
  }

  function convertToDecimal(array) {
    if (array) {
      return array.map(el => {
        let result = 0;
        let degree = el.length - 1;
        for(let i = 0; i < el.length; i++) {
          result += +el[i] * Math.pow(2, degree)
          degree--;
        }
        return result
      })
    }
  }

  function sortCards(array, base) {
    return array.filter(element => element[base] === '1')
  }


  return (
    <div className="App">
      <h1>Загадайте любое число от 1 до 100</h1>
      <div>
        <Card array={cards[cardNumber]}/>

        <div className="buttons">
          <button>Yes</button>
          <button>No</button>
          {cardNumber !== 1 && <button onClick={() => setCardNumber(cardNumber - 1)}>Next Card ⇒ </button>}
        </div>
      </div>
    </div>
  );
}

export default App;
