import './card.scss';

function Card(props) {
  return (
    <div className="card">
      {props.array.map((number) => (
        <div key={number} className="card__element">{number}</div>
      ))}
    </div>
  );
}

export default Card;
