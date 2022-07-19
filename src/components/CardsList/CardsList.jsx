import Card from '../../Card';

function CardsList({
  cardNumber, cards, setAnswers, changeCard, backToStart,
}) {
  return (
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
          Тут есть
        </button>
        <button
          type="button"
          onClick={() => {
            setAnswers((prevState) => [...prevState, 0]);
            changeCard();
          }}
        >
          Тута нету
        </button>

        <button
          type="button"
          onClick={() => backToStart()}
        >
          Сбился:( Хочу попробовать с начала!
        </button>
      </div>
    </div>
  );
}

export default CardsList;
