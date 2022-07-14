import './App.css';

function App() {
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

  const arrayNumbers = (right) => {
    let i = 1;
    const array = [];
    while (i <= right) {
      array.push(convertToBinary(i))
      i++
    }
    return array
  }

  function convertToDecimal(numberBinary) {
    let result = 0;
    let degree = numberBinary.length - 1;
    for(let i = 0; i < numberBinary.length; i++) {
      result += +numberBinary[i] * Math.pow(2, degree)
      degree--;
    }
    return result
  }

  const example = convertToDecimal(arrayNumbers(100)[3])
  console.log(example);

  console.log(arrayNumbers(100));
  return (
    <div className="App">
      <h1>Hello: {arrayNumbers(100)[0]}</h1>
    </div>
  );
}

export default App;
