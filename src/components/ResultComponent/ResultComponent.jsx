function ResultComponent({ result }) {
  return (
    <div>
      <h2 className="result">
        Вы загадали число:
        {' '}
        {result}
      </h2>

      <button type="button">Вернуться на главную страницу</button>

    </div>
  );
}

export default ResultComponent;
