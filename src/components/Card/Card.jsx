import './card.scss';

function Card(props) {
  const { array } = props;
  return (
    <div className="card">
      {
        array ? array.map((number) => (
          <div key={number} className="card__element">{number}</div>
        )) : null
      }
    </div>
  );
}

export default Card;
