import type { Metadata } from "next";
import * as Switch from "@/components/base/switch";
import * as TabArea from "@/components/base/tab-area";
import { Blog } from "@/components/card/blog";
import Testimonial from "@/components/card/testimonial";
import Section from "@/components/page/section";
import Card from "@/components/card/card";
import blogs from "@/config/blogs";
import cards from "@/config/cards";
import testimonials from "@/config/testimonials";
import "./page.scss";

export const metadata: Metadata = {
  title: "Home",
  description: "This is the description of the home page."
};

export default function LandingPage() {
  return (
    <main className="main">
      <header className="introduction">
        <div>
          <img
            src="/woman.png"
            alt="Confident woman in green athletic wear pointing to the side with a smile on a light green background."
          />
        </div>
        <div>
          <div className="introduction__head">
            <div className="introduction__stack">
              <img src="/avatar/emily-johnson.png" alt="" />
              <img src="/avatar/elizabeth-jackson.png" alt="" />
              <img src="/avatar/eva-friedman.png" alt="" />
            </div>
            <p className="introduction__stack-text">
              <span>430+</span>
              <span> </span>
              <span>Happy Customers</span>
            </p>
          </div>
          <div className="introduction__body">
            <div className="introduction__text">
              <div className="introduction__header">
                <p className="introduction__callout">Transform Your ❤️ Health with</p>
                <h1 className="introduction__title">Personalized Nutrition Coaching</h1>
              </div>
              <p className="introduction__description">
                Welcome to Nutritionist, your partner in achieving optimal health through
                personalized nutrition coaching. Our certified nutritionists are here to guide you
                on your weight loss journey, providing customized plans and ongoing support. Start
                your transformation today and experience the power of personalized nutrition
                coaching.
              </p>
            </div>
            <div className="introduction__buttons">
              <button className="button button--solid button--lg button--px-xs">
                Get Started Today
              </button>
              <button className="button button--light button--lg button--px-xs">Book a Demo</button>
            </div>
          </div>
        </div>
      </header>

      <Section
        title="Features"
        description="Welcome to the Feature Section of Nutritionist, your ultimate destination for all things nutrition and wellness."
        className="section__body--grid"
      >
        {cards.map((card, id) => (
          <Card key={id} {...card} />
        ))}
      </Section>

      <Section
        title="Our Blogs"
        description="Our blog is a treasure trove of informative and engaging articles written by our team of
            nutritionists, dietitians, and wellness experts. Here's what you can expect from our
            blog."
        className="section__body--grid"
      >
        {blogs.map((blog, id) => (
          <Blog key={id} {...blog} />
        ))}
      </Section>

      <Section
        title="Our Testimonials"
        description="Our satisfied clients share their success stories and experiences on their journey to better health and well-being."
        className="switch"
      >
        <Switch.Provider>
          <Switch.Root>
            <Switch.Body>
              {testimonials.map((data, id) => (
                <Testimonial key={id} {...data} />
              ))}
            </Switch.Body>
            <Switch.Foot />
          </Switch.Root>
        </Switch.Provider>
      </Section>

      <Section
        title="Our Pricing"
        description="We outline our flexible and affordable options to support you on your journey to optimal health and nutrition. We believe that everyone deserves access to personalized nutrition guidance and resources"
        className="tabs"
      >
        <TabArea.Provider defaultTab="monthly">
          <TabArea.Root>
            <TabArea.Head>
              <TabArea.List>
                <TabArea.Item value="monthly">Monthly</TabArea.Item>
                <TabArea.Item value="yearly">Yearly</TabArea.Item>
              </TabArea.List>
              <TabArea.Note>Save 50% on Yearly</TabArea.Note>
            </TabArea.Head>
            <TabArea.Body>
              <TabArea.Content value="monthly">
                <div className="plan">
                  <div className="plan__head">
                    <h3 className="plan__name">Basic Plan</h3>
                    <p className="plan__note">Up to 50% off on Yearly Plan</p>
                  </div>
                  <p className="plan__text">
                    Get started on your health journey with our Basic Plan. It includes personalized
                    nutrition coaching, access to our app, meal planning assistance, and email support.
                  </p>
                  <div className="plan__foot">
                    <p className="plan__cost">
                      <span>$49</span>
                      <span>/month</span>
                    </p>
                    <button className="plan__pick">Choose Plan</button>
                  </div>
                </div>
                <div className="plan">
                  <div className="plan__head">
                    <h3 className="plan__name">Premium Plan</h3>
                    <p className="plan__note">Up to 50% off on Yearly Plan</p>
                  </div>
                  <p className="plan__text">
                    Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan,
                    you'll receive video consultations, priority support, and personalized recipe
                    recommendations.
                  </p>
                  <div className="plan__foot">
                    <p className="plan__cost">
                      <span>$79</span>
                      <span>/month</span>
                    </p>
                    <button className="plan__pick">Choose Plan</button>
                  </div>
                </div>
                <div className="plan">
                  <div className="plan__head">
                    <h3 className="plan__name">Ultimate Plan</h3>
                    <p className="plan__note">Up to 50% off on Yearly Plan</p>
                  </div>
                  <p className="plan__text">
                    Experience the full benefits of personalized nutrition coaching with our Ultimate
                    Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and
                    exclusive workshops.
                  </p>
                  <div className="plan__foot">
                    <p className="plan__cost">
                      <span>$99</span>
                      <span>/month</span>
                    </p>
                    <button className="plan__pick">Choose Plan</button>
                  </div>
                </div>
              </TabArea.Content>
              <TabArea.Content value="yearly">
                <div className="plan">
                  <div className="plan__head">
                    <h3 className="plan__name">Basic Plan</h3>
                    <p className="plan__note">Up to 50% off on Yearly Plan</p>
                  </div>
                  <p className="plan__text">
                    Get started on your health journey with our Basic Plan. It includes personalized
                    nutrition coaching, access to our app, meal planning assistance, and email support.
                  </p>
                  <div className="plan__foot">
                    <p className="plan__cost">
                      <span>$490</span>
                      <span>/year</span>
                    </p>
                    <button className="plan__pick">Choose Plan</button>
                  </div>
                </div>
                <div className="plan">
                  <div className="plan__head">
                    <h3 className="plan__name">Premium Plan</h3>
                    <p className="plan__note">Up to 50% off on Yearly Plan</p>
                  </div>
                  <p className="plan__text">
                    Upgrade to our Premium Plan for enhanced features. In addition to the Basic Plan,
                    you'll receive video consultations, priority support, and personalized recipe
                    recommendations.
                  </p>
                  <div className="plan__foot">
                    <p className="plan__cost">
                      <span>$790</span>
                      <span>/year</span>
                    </p>
                    <button className="plan__pick">Choose Plan</button>
                  </div>
                </div>
                <div className="plan">
                  <div className="plan__head">
                    <h3 className="plan__name">Ultimate Plan</h3>
                    <p className="plan__note">Up to 50% off on Yearly Plan</p>
                  </div>
                  <p className="plan__text">
                    Experience the full benefits of personalized nutrition coaching with our Ultimate
                    Plan. Enjoy all the features of the Premium Plan, along with 24/7 chat support and
                    exclusive workshops.
                  </p>
                  <div className="plan__foot">
                    <p className="plan__cost">
                      <span>$990</span>
                      <span>/year</span>
                    </p>
                    <button className="plan__pick">Choose Plan</button>
                  </div>
                </div>
              </TabArea.Content>
            </TabArea.Body>
          </TabArea.Root>
        </TabArea.Provider>
      </Section>
    </main>
  );
}
