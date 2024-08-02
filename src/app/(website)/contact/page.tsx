import type { Metadata } from "next";
import {
  FacebookIcon,
  LeafIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
  WaypointIcon
} from "@/components/base/icon";
import "./page.scss";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Our dedicated team is here to assist you and provide the support you need on your nutritional journey."
};

const ContactPage = () => {
  return (
    <>
      <div className="banner">
        <div className="banner__head">
          <div className="banner__image">
            <LeafIcon />
          </div>

          <div className="banner__header">
            <h2 className="banner__title">Contact Us</h2>
            <p className="banner__description">
              We value your feedback, questions, and concerns at Nutritionist. Our dedicated team is
              here to assist you and provide the support you need on your nutritional journey.
              Please don't hesitate to reach out to us using any of the following contact methods
            </p>
          </div>
        </div>
        <div className="banner__body banner__body--card">
          <div>
            <MailIcon />
            support@nutritionist.com
          </div>
          <div>
            <PhoneIcon />
            +91 00000 00000
          </div>
          <div>
            <WaypointIcon />
            Some Where in the World
          </div>
        </div>
      </div>

      <div className="card">
        <form className="form">
          <div className="form__body">
            <div className="form__field">
              <label htmlFor="name">Full Name</label>
              <input id="name" type="text" placeholder="Enter your Name" />
            </div>

            <div className="form__field">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Enter your Email" />
            </div>

            <div className="form__field">
              <label htmlFor="number">Phone Number</label>
              <input id="number" type="tel" placeholder="Enter your Number" />
            </div>

            <div className="form__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Enter your Message"
                aria-describedby="message-length"
              />
              <p id="message-length">Max 250 Chars</p>
            </div>
          </div>

          <button type="submit" className="button button--solid button--lg button--px-sm">
            Send Message
          </button>
        </form>

        <div className="info">
          <div className="info__image">
            <img src="/abstract/vector/map.svg" alt="" />
          </div>

          <div className="info__links">
            <a className="link link--solid link--md link--square" href="#">
              <FacebookIcon />
            </a>

            <a className="link link--solid link--md link--square" href="#">
              <TwitterIcon />
            </a>

            <a className="link link--solid link--md link--square" href="#">
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="action">
        <div className="action__head">
          <h2 className="action__name">
            Are you ready to embark on a transformative journey towards better health and wellness?
          </h2>
          <p className="action__text">
            Join us at Nutritionist and let us guide you on the path to a healthier and happier you.
          </p>
        </div>
        <a href="/contact" className="action__link">
          Join Us Now
        </a>
      </div>
    </>
  );
};

export default ContactPage;
