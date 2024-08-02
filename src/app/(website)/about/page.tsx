import type { Metadata } from "next";
import { CutleryIcon, EducationIcon, FlowerIcon, LeafIcon, NotepadIcon } from "@/components/base/icon";
import "./page.scss";

export const metadata: Metadata = {
  title: "About",
  description: "This is the description of the about page."
};

export default function AboutPage() {
  return (
    <>
      <div className="grid">
        <div />
        <div />
        <div />
        <div />
        <div className="grid__center">
          <LeafIcon />
        </div>
        <div />
        <div />
        <div />
        <div />
      </div>

      <div className="introduction">
        <h1 className="introduction__title">Welcome to Nutritionist</h1>
        <p className="introduction__description">
          Your trusted source for personalized nutrition coaching. Our mission is to help you
          achieve your weight loss and health goals through tailored nutrition plans and expert
          guidance. We understand that every individual is unique, and that's why we believe in
          providing personalized solutions that fit your lifestyle and preferences. With our team of
          qualified nutritionists and dietitians, we are dedicated to empowering you with the
          knowledge and tools you need to make lasting changes. Whether you want to shed those extra
          pounds, improve your overall well-being, or develop a healthier relationship with food, we
          are here to support you every step of the way. At Nutritionist, we believe that healthy
          eating should be enjoyable and sustainable. We emphasize the importance of balanced
          nutrition, focusing on whole foods and mindful eating practices. Our approach is rooted in
          scientific research and evidence-based strategies, ensuring that you receive the most
          up-to-date and accurate information. Join our community of individuals committed to
          transforming their lives through nutrition. Take control of your health, boost your energy
          levels, and discover the joy of nourishing your body with wholesome foods. We are here to
          guide you towards a healthier, happier you.
        </p>
      </div>

      <section className="section">
        <div className="section__head">
          <h2 className="section__title">Our Story</h2>
          <p className="section__description">
            Welcome to Nutritionist, your partner in achieving optimal health through personalized
            nutrition coaching. Our certified nutritionists are here to guide you on your weight
            loss journey.
          </p>
        </div>
        <div className="split">
          <div className="split__item">
            <img className="split__thumbnail" src="/thumbnail/story/transformation.png" alt="" />
            <div className="split__separator" />
            <div className="split__content">
              <h3 className="split__title underline">Inspiring Transformations Story</h3>
              <p className="split__description">
                Nutritionist continues to empower individuals to transform their lives through
                personalized nutrition coaching. With an expanding client base and a growing team of
                experts, we remain committed to our goal of helping people lose weight, improve
                their health, and lead happier, more fulfilling lives. Our journey of inspiring
                transformations continues, one client at a time.
              </p>
              <p className="split__date">July 1, 2025</p>
            </div>
          </div>
          <div className="split__item">
            <img className="split__thumbnail" src="/thumbnail/story/recognition.png" alt="" />
            <div className="split__separator" />
            <div className="split__content">
              <h3 className="split__title underline">Recognition and Accolades Story</h3>
              <p className="split__description">
                Nutritionist received industry recognition for its excellence in personalized
                nutrition coaching. Our innovative approach and dedication to client success earned
                us accolades and solidified our position as a leading provider in the field.
              </p>
              <p className="split__date">March 10, 2023</p>
            </div>
          </div>
          <div className="split__item">
            <img className="split__thumbnail" src="/thumbnail/story/growth.png" alt="" />
            <div className="split__separator" />
            <div className="split__content">
              <h3 className="split__title underline">Continued Growth Story</h3>
              <p className="split__description">
                Nutritionist celebrated serving over 5,000 clients, a testament to our commitment to
                helping individuals achieve their health and weight loss goals. This milestone
                highlighted the positive impact we have made on the lives of thousands of people.
              </p>
              <p className="split__date">November 2, 2021</p>
            </div>
          </div>
          <div className="split__item">
            <img className="split__thumbnail" src="/thumbnail/story/collaboration.png" alt="" />
            <div className="split__separator" />
            <div className="split__content">
              <h3 className="split__title underline">Collaborating for Success Story</h3>
              <p className="split__description">
                Nutritionist established partnerships with renowned health professionals, including
                nutritionists, dietitians, and wellness experts. These collaborations allowed us to
                incorporate diverse perspectives and expertise, ensuring the highest level of
                guidance for our clients.
              </p>
              <p className="split__date">July 15, 2019</p>
            </div>
          </div>
          <div className="split__item">
            <img className="split__thumbnail" src="/thumbnail/story/support.png" alt="" />
            <div className="split__separator" />
            <div className="split__content">
              <h3 className="split__title underline">Enhanced Support Story</h3>
              <p className="split__description">
                In response to the growing demand for personalized nutrition coaching, Nutritionist
                expanded its team of qualified nutritionists and dietitians. This milestone enabled
                us to provide even more individualized care and support to our clients.
              </p>
              <p className="split__date">April 1, 2018</p>
            </div>
          </div>
          <div className="split__item">
            <img className="split__thumbnail" src="/thumbnail/story/innovation.png" alt="" />
            <div className="split__separator" />
            <div className="split__content">
              <h3 className="split__title underline">Innovating for Clients Story</h3>
              <p className="split__description">
                Nutritionist introduced a mobile app, revolutionizing the way clients engage with
                their personalized nutrition plans. The app allowed for easy tracking of progress,
                access to resources, and seamless communication with their dedicated nutrition
                coaches.
              </p>
              <p className="split__date">January 20, 2017</p>
            </div>
          </div>
          <div className="split__item">
            <img className="split__thumbnail" src="/thumbnail/story/celebration.png" alt="" />
            <div className="split__separator" />
            <div className="split__content">
              <h3 className="split__title underline">Celebrating Success Stories</h3>
              <p className="split__description">
                Nutritionist celebrated its 500th client success story. These stories showcased the
                positive impact of personalized nutrition coaching on individuals' lives, further
                motivating our team to continue providing exceptional services.
              </p>
              <p className="split__date">September 5, 2015</p>
            </div>
          </div>
          <div className="split__item">
            <img className="split__thumbnail" src="/thumbnail/story/expansion.png" alt="" />
            <div className="split__separator" />
            <div className="split__content">
              <h3 className="split__title underline">Expanding Reach Story</h3>
              <p className="split__description">
                Nutritionist expanded its services by launching an online platform, allowing
                individuals from all over the world to access personalized nutrition plans and
                expert guidance. This milestone brought convenience and accessibility to our growing
                client base.
              </p>
              <p className="split__date">June 10, 2014</p>
            </div>
          </div>
          <div className="split__item">
            <img className="split__thumbnail" src="/thumbnail/story/research.png" alt="" />
            <div className="split__separator" />
            <div className="split__content">
              <h3 className="split__title underline">Research and Expertise Story</h3>
              <p className="split__description">
                After extensive research and collaborating with nutrition experts, Sarah Mitchell
                and her team developed a comprehensive program rooted in scientific knowledge and
                evidence-based strategies. This milestone marked the establishment of Nutritionist
                as a trusted source of personalized nutrition coaching.
              </p>
              <p className="split__date">March 15, 2012</p>
            </div>
          </div>
          <div className="split__item">
            <img className="split__thumbnail" src="/thumbnail/story/inception.png" alt="" />
            <div className="split__separator" />
            <div className="split__content">
              <h3 className="split__title underline">The Inception Story</h3>
              <p className="split__description">
                On this day, Nutritionist was born with the vision of helping individuals achieve
                their weight loss and health goals through personalized nutrition coaching. The
                founder, Sarah Mitchell, recognized the need for a sustainable and effective
                approach to healthy living, and thus began the journey of Nutritionist.
              </p>
              <p className="split__date">January 1, 2010</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section__head">
          <h2 className="section__title">Company Achievements</h2>
          <p className="section__description">
            At Nutritionist, we take pride in our accomplishments and the positive impact we have
            made on the lives of our clients. Here are some of our notable achievements
          </p>
        </div>
        <div className="section__body section__body--grid">
          <div className="card">
            <div className="card__head">
              <div className="card__icon">
                <FlowerIcon />
              </div>
              <h3 className="card__name">10,000+ Transformations</h3>
            </div>
            <p className="card__text">
              Our personalized nutrition plans have helped thousands of individuals reach their
              weight loss goals and maintain a healthy lifestyle.
            </p>
          </div>
          <div className="card">
            <div className="card__head">
              <div className="card__icon">
                <EducationIcon />
              </div>
              <h3 className="card__name">Recognition for Excellence</h3>
            </div>
            <p className="card__text">
              Nutritionist has been recognized as a leading provider of personalized nutrition
              coaching, receiving accolades for our innovative approach and commitment to client
              success.
            </p>
          </div>
          <div className="card">
            <div className="card__head">
              <div className="card__icon">
                <CutleryIcon />
              </div>
              <h3 className="card__name">Positive Client Reviews</h3>
            </div>
            <p className="card__text">
              We have received numerous testimonials from satisfied clients who have experienced
              significant improvements in their health, weight, and overall well-being through our
              coaching program.
            </p>
          </div>
          <div className="card">
            <div className="card__head">
              <div className="card__icon">
                <NotepadIcon />
              </div>
              <h3 className="card__name">Collaborate With Top Health Experts.</h3>
            </div>
            <p className="card__text">
              Nutritionist has established partnerships with respected nutritionists, dietitians,
              and health experts to ensure that our clients receive the highest quality guidance and
              support.
            </p>
          </div>
        </div>
      </section>

      <div className="action">
        <div className="action__head">
          <h2 className="action__name">We Are Proud of Our Achievements</h2>
          <p className="action__text">
            But our ultimate satisfaction comes from seeing our clients achieve their goals and live
            healthier, happier lives. Join Nutritionist today and embark on your own transformative
            journey towards optimal health and well-being.
          </p>
        </div>
        <a href="/contact" className="action__link">
          Book a Demo
        </a>
      </div>
    </>
  );
}
