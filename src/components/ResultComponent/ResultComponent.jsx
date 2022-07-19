function ResultComponent({ result, backToStart }) {
  return (
    <div>
      <h2 className="result">
        Вы загадали число:
        {' '}
        {result}
      </h2>

      <button type="button" onClick={() => backToStart()}>Вернуться на главную страницу</button>

    </div>
  );
}

export default ResultComponent;
