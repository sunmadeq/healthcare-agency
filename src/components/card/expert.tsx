export interface IExpert {
  image: string;
  name: string;
  role: string;
}

export const Expert = ({ image, name, role }: IExpert) => {
  return (
    <div className="expert">
      <div className="expert__image">
        <img src={image} alt="" />
      </div>
      <div className="expert__badge">
        <p className="expert__name">{name}</p>
        <p className="expert__role">{role}</p>
      </div>
    </div>
  );
};
