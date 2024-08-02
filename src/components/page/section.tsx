import { HTMLAttributes } from "react";

export interface ISection extends HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
}

const Section = ({ title, description, children, className }: ISection) => {
  return (
    <section className="container section">
      <div className="section__head">
        <h2 className="section__title">{title}</h2>
        <p className="section__description">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </section>
  );
};

export default Section;
