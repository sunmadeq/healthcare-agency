export interface IAction {
  name: string;
  text: string;
  link: string;
}

export const Action = ({ name, text, link }: IAction) => {
  return (
    <div className="action">
      <div className="action__head">
        <h2 className="action__name">{name}</h2>
        <p className="action__text">{text}</p>
      </div>
      <a href="/contact" className="action__link">
        {link}
      </a>
    </div>
  );
};
