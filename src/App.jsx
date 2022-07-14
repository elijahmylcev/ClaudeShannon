import './App.css';

function App() {
  let num = 28;
  let binary = (num % 2).toString(5);
  for (; num > 1; ) {
    num = parseInt(num / 2);
    binary =  (num % 2) + (binary);
  }
  return (
    <div className="App">
      <h1>Hello: {binary}</h1>
    </div>
  );
}

export default App;
