import type { Metadata } from "next";
import { CheckIcon, CrossIcon, LeafIcon } from "@/components/base/icon";
import * as Accordion from "@/components/base/accordion";
import * as TabArea from "@/components/base/tab-area";
import "./page.scss";

export const metadata: Metadata = {
  title: "Pricing",
  description: "This is the description of the pricing page."
};

export default function PricingPage() {
  return (
    <>
      <div className="banner">
        <div className="banner__head">
          <div className="banner__image">
            <LeafIcon />
          </div>

          <div className="banner__header">
            <h2 className="banner__title">Our Pricing</h2>
            <p className="banner__description">
              At Nutritionist, we offer flexible pricing options to accommodate your unique
              requirements and budget. Our goal is to provide you with exceptional personalized
              nutrition coaching that is accessible and tailored to your needs. Choose from our
              three plans below and take the first step towards a healthier lifestyle
            </p>
          </div>
        </div>
      </div>

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
                <div className="plan__list">
                  <p>Personalized nutrition plan tailored to your goals and dietary preferences.</p>
                  <p>
                    Access to our mobile app for convenient meal tracking and progress monitoring.
                  </p>
                  <p>Email support to address your questions and concerns.</p>
                  <p>
                    Regular check-ins with a dedicated nutritionist to review your progress and
                    provide guidance.
                  </p>
                </div>
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
                <div className="plan__list">
                  <p>All the features included in the Basic Plan.</p>
                  <p>
                    One-on-one video consultations with your dedicated nutritionist for more
                    personalized guidance and support.
                  </p>
                  <p>Recipe recommendations and meal planning assistance.</p>
                  <p>Priority email support for quicker responses to your inquiries.</p>
                  <p>
                    Educational resources and guides to deepen your understanding of nutrition and
                    healthy habits.
                  </p>
                </div>
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
                <div className="plan__body">
                  <div className="plan__list">
                    <p>All the features included in the Plus Plan.</p>
                    <p>
                      Unlimited access to video consultations with your dedicated nutritionist for
                      ongoing support and accountability.
                    </p>
                    <p>
                      Advanced progress tracking tools to monitor your weight, body measurements,
                      and fitness goals.
                    </p>
                    <p>
                      Customized meal plans and recipe suggestions based on your preferences and
                      nutritional needs.
                    </p>
                    <p>Priority email and phone support for immediate assistance.</p>
                  </div>
                  <p className="plan__best">
                    The Premium Plan is designed for individuals who are committed to achieving
                    significant results and require the highest level of support and
                    personalization.
                  </p>
                </div>
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
                <div className="plan__list">
                  <p>Personalized nutrition plan tailored to your goals and dietary preferences.</p>
                  <p>
                    Access to our mobile app for convenient meal tracking and progress monitoring.
                  </p>
                  <p>Email support to address your questions and concerns.</p>
                  <p>
                    Regular check-ins with a dedicated nutritionist to review your progress and
                    provide guidance.
                  </p>
                </div>
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
                <div className="plan__list">
                  <p>All the features included in the Basic Plan.</p>
                  <p>
                    One-on-one video consultations with your dedicated nutritionist for more
                    personalized guidance and support.
                  </p>
                  <p>Recipe recommendations and meal planning assistance.</p>
                  <p>Priority email support for quicker responses to your inquiries.</p>
                  <p>
                    Educational resources and guides to deepen your understanding of nutrition and
                    healthy habits.
                  </p>
                </div>
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
                <div className="plan__body">
                  <div className="plan__list">
                    <p>All the features included in the Plus Plan.</p>
                    <p>
                      Unlimited access to video consultations with your dedicated nutritionist for
                      ongoing support and accountability.
                    </p>
                    <p>
                      Advanced progress tracking tools to monitor your weight, body measurements,
                      and fitness goals.
                    </p>
                    <p>
                      Customized meal plans and recipe suggestions based on your preferences and
                      nutritional needs.
                    </p>
                    <p>Priority email and phone support for immediate assistance.</p>
                  </div>
                  <p className="plan__best">
                    The Premium Plan is designed for individuals who are committed to achieving
                    significant results and require the highest level of support and
                    personalization.
                  </p>
                </div>
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

      <section className="container section">
        <div className="section__head">
          <h2 className="section__title">Features</h2>
          <p className="section__description">
            Welcome to the Feature Section of Nutritionist, your ultimate destination for all things
            nutrition and wellness.
          </p>
        </div>
        <table>
          <thead>
            <tr>
              <th>
                <p>Features</p>
              </th>
              <th>
                <p>Free Plan</p>
              </th>
              <th>
                <p>Premium Plan</p>
              </th>
              <th>
                <p>Ultimate Plan</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Personalized Nutrition Plan</td>
              <td>
                <CheckIcon data-active={true} />
              </td>
              <td>
                <CheckIcon data-active={true} />
              </td>
              <td>
                <CheckIcon data-active={true} />
              </td>
            </tr>
            <tr>
              <td>Mobile App Access</td>
              <td>
                <CheckIcon data-active={true} />
              </td>
              <td>
                <CheckIcon data-active={true} />
              </td>
              <td>
                <CheckIcon data-active={true} />
              </td>
            </tr>
            <tr>
              <td>Email Support</td>
              <td>
                <CheckIcon data-active={true} />
              </td>
              <td>
                <CheckIcon data-active={true} />
              </td>
              <td>
                <CheckIcon data-active={true} />
              </td>
            </tr>
            <tr>
              <td>One-on-One Video Consultations</td>
              <td>
                <CrossIcon data-active={false} />
              </td>
              <td>
                <CheckIcon data-active={true} />
              </td>
              <td>
                <CheckIcon data-active={true} />
              </td>
            </tr>
            <tr>
              <td>Recipe Recommendations and Meal Planning</td>
              <td>
                <CrossIcon data-active={false} />
              </td>
              <td>
                <CheckIcon data-active={true} />
              </td>
              <td>
                <CheckIcon data-active={true} />
              </td>
            </tr>
            <tr>
              <td>Priority Support</td>
              <td>
                <CrossIcon data-active={false} />
              </td>
              <td>
                <CheckIcon data-active={true} />
              </td>
              <td>
                <CheckIcon data-active={true} />
              </td>
            </tr>
            <tr>
              <td>Educational Resources and Guides</td>
              <td>
                <CrossIcon data-active={false} />
              </td>
              <td>
                <CheckIcon data-active={true} />
              </td>
              <td>
                <CheckIcon data-active={true} />
              </td>
            </tr>
            <tr>
              <td>Advanced Progress Tracking Tools</td>
              <td>
                <CrossIcon data-active={false} />
              </td>
              <td>
                <CrossIcon data-active={false} />
              </td>
              <td>
                <CheckIcon data-active={true} />
              </td>
            </tr>
            <tr>
              <td>Customized Meal Plans and Recipe Suggestions</td>
              <td>
                <CrossIcon data-active={false} />
              </td>
              <td>
                <CrossIcon data-active={false} />
              </td>
              <td>
                <CheckIcon data-active={true} />
              </td>
            </tr>
            <tr>
              <td>Phone Support</td>
              <td>
                <CrossIcon data-active={false} />
              </td>
              <td>
                <CrossIcon data-active={false} />
              </td>
              <td>
                <CheckIcon data-active={true} />
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="container section">
        <div className="section__head">
          <h2 className="section__title">FAQ</h2>
          <p className="section__description">
            We address commonly asked questions and provide comprehensive answers to help you
            navigate your way through your nutrition and wellness journey.
          </p>
        </div>
        <div className="section__body section__body--questions">
          <Accordion.Provider>
            <Accordion.Root>
              <Accordion.Item id="0">
                <Accordion.Head>
                  <Accordion.Title>What is personalized nutrition coaching?</Accordion.Title>
                  <Accordion.Trigger />
                </Accordion.Head>
                <Accordion.Body>This is the answer for this question.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item id="1">
                <Accordion.Head>
                  <Accordion.Title>How can nutrition coaching help me lose weight?</Accordion.Title>
                  <Accordion.Trigger />
                </Accordion.Head>
                <Accordion.Body>This is the answer for this question.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item id="2">
                <Accordion.Head>
                  <Accordion.Title>
                    Can I still enjoy my favorite foods while on a nutrition plan?
                  </Accordion.Title>
                  <Accordion.Trigger />
                </Accordion.Head>
                <Accordion.Body>This is the answer for this question.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item id="3">
                <Accordion.Head>
                  <Accordion.Title>
                    How often will I have contact with my nutritionist?
                  </Accordion.Title>
                  <Accordion.Trigger />
                </Accordion.Head>
                <Accordion.Body>This is the answer for this question.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item id="4">
                <Accordion.Head>
                  <Accordion.Title>How long will it take to see results?</Accordion.Title>
                  <Accordion.Trigger />
                </Accordion.Head>
                <Accordion.Body>This is the answer for this question.</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item id="5">
                <Accordion.Head>
                  <Accordion.Title>
                    Are the meal plans and recipes provided suitable for vegetarians or vegans?
                  </Accordion.Title>
                  <Accordion.Trigger />
                </Accordion.Head>
                <Accordion.Body>This is the answer for this question.</Accordion.Body>
              </Accordion.Item>
            </Accordion.Root>
          </Accordion.Provider>
          <div className="ask">
            <LeafIcon className="ask__icon" />
            <div className="ask__head">
              <h2 className="ask__title">Ask your question</h2>
              <p className="ask__subtitle">Feel Free to Ask questions on anytime</p>
            </div>
            <a href="/contact" className="ask__link">
              Ask A Question
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
