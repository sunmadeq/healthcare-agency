import { Icon } from "@/components/icon";

export interface ICard {
  icon: Icon;
  name: string;
  text: string;
}

const Card = (card: ICard) => {
  return (
    <div className="card">
      <div className="card__head">
        <div className="card__icon">
          <card.icon />
        </div>
        <h3 className="card__name">{card.name}</h3>
      </div>
      <p className="card__text">{card.text}</p>
    </div>
  );
};

export default Card;
