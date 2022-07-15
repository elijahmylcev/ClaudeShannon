import './App.css';

function App() {
  const baseArray = arrayNumbers(100);

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
  console.log(cards);

  const firstCard = convertToDecimal(sortCards(baseArray, 6));

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
      <h1>Hello: Угадаю любое число от 1 до 100</h1>
      <ul>
        {
          firstCard.map(num => 
            <li>{num}</li>
          )
        }
      </ul>
    </div>
  );
}

export default App;
