import Card from '../../Card';

function CardsList({
  cardNumber, cards, setAnswers, changeCard,
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
  );
}

export default CardsList;
