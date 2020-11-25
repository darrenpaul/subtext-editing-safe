const Card = ({ props }) => {
  return (
    <div className="card__container">
      <div className="card__image_container">
        <div className="service__icon_border">
          <img
            className="service__icon"
            src={props.image}
            alt={props.title}
          ></img>
        </div>
      </div>
      <p className="card__title">{props.title}</p>
      <p>{props.text}</p>
    </div>
  );
};

export default Card;
