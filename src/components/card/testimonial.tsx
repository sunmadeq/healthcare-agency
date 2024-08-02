import { QuoteIcon } from "@/components/base/icon";

export interface ITestimonial {
  text: string;
  avatar: string;
  author: string;
}

const Testimonial = (testimonial: ITestimonial) => {
  return (
    <div className="testimonial">
      <div className="testimonial__head">
        <QuoteIcon />
        <p>{testimonial.text}</p>
      </div>
      <div className="testimonial__body">
        <img className="testimonial__avatar" src={testimonial.avatar} alt="" />
        <p className="testimonial__author">{testimonial.author}</p>
      </div>
    </div>
  );
};

export default Testimonial;
