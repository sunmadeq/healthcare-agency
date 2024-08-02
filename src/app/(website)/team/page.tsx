import type { Metadata } from "next";
import { LeafIcon } from "@/components/base/icon";
import "./page.scss";

export const metadata: Metadata = {
  title: "Team",
  description: "This is the description of the team page."
};

export default function TeamPage() {
  return (
    <>
      <div className="banner">
        <div className="banner__head">
          <div className="banner__image">
            <LeafIcon />
          </div>

          <div className="banner__header">
            <h2 className="banner__title">Meet Our Team of Experts</h2>
            <p className="banner__description">
              Our team at Nutritionist is composed of highly skilled professionals who are
              passionate about helping you achieve your health and wellness goals. With a diverse
              range of expertise in nutrition, coaching, and support, our team is dedicated to
              providing you with the guidance and personalized care you need. Get to know the
              experts behind our success and discover how they can make a positive impact on your
              journey to better health.
            </p>
          </div>
        </div>
        <div className="banner__body banner__body--navigation">
          <div>
            <a data-active="true" href="?filter=management-team">
              Management Team
            </a>
            <a data-active="false" href="?filter=nutritionists-and-dietitians">
              Nutritionists and Dietitians
            </a>
            <a data-active="false" href="?filter=customer-support">
              Customer Support
            </a>
            <a data-active="false" href="?filter=marketing-and-communications">
              Marketing and Communications
            </a>
            <a data-active="false" href="?filter=technology-and-development">
              Technology and Development
            </a>
          </div>
        </div>
      </div>

      <div className="experts">
        <div className="expert">
          <div className="expert__image">
            <img src="/expert/sarah-mitchell.png" alt="" />
          </div>
          <div className="expert__badge">
            <p className="expert__name">Sarah Mitchell</p>
            <p className="expert__role">Founder and CEO</p>
          </div>
        </div>
        <div className="expert">
          <div className="expert__image">
            <img src="/expert/emily-thompson.png" alt="" />
          </div>
          <div className="expert__badge">
            <p className="expert__name">Emily Thompson</p>
            <p className="expert__role">Chief Operating Officer</p>
          </div>
        </div>
        <div className="expert">
          <div className="expert__image">
            <img src="/expert/john-davis.png" alt="" />
          </div>
          <div className="expert__badge">
            <p className="expert__name">John Davis</p>
            <p className="expert__role">Chief Financial Officer</p>
          </div>
        </div>
        <div className="expert">
          <div className="expert__image">
            <img src="/expert/rachel-adams.png" alt="" />
          </div>
          <div className="expert__badge">
            <p className="expert__name">Rachel Adams</p>
            <p className="expert__role">Chief Marketing Officer</p>
          </div>
        </div>
      </div>

      <div className="action">
        <div className="action__head">
          <h2 className="action__name">Join Our Team</h2>
          <p className="action__text">
            We are always on the lookout for talented individuals who are enthusiastic about making
            a difference. Explore our career opportunities and join us in our mission to help people
            achieve their health and wellness goals.
          </p>
        </div>
        <a href="/contact" className="action__link">
          Apply Now
        </a>
      </div>
    </>
  );
}
