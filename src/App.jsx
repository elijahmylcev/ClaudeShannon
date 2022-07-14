import './App.css';

function App() {
  function convertToBinary(number) {
    let num = number;
    let binary = (num % 2).toString();
    for (; num > 1; ) {
      num = parseInt(num / 2);
      binary =  (num % 2) + (binary);
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

  console.log(arrayNumbers(100));
  return (
    <div className="App">
      <h1>Hello: {arrayNumbers}</h1>
    </div>
  );
}

export default App;
