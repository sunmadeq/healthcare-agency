import type { Metadata } from "next";
import { LeafIcon } from "@/components/base/icon";
import "./page.scss";

export const metadata: Metadata = {
  title: "Process",
  description: "This is the description of the process page."
};

export default function ProcessPage() {
  return (
    <>
      <div className="banner">
        <div className="banner__head">
          <div className="banner__image">
            <LeafIcon />
          </div>

          <div className="banner__header">
            <h2 className="banner__title">Your Journey to Health and Wellness</h2>
            <p className="banner__description">
              At Nutritionist, we believe in providing a personalized and comprehensive approach to
              help you achieve your health and wellness goals. Our "How it Works" process is
              designed to guide you through each step of your journey, ensuring that you receive the
              support, knowledge, and tools you need to succeed. Here's a detailed breakdown of our
              process:
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="section__head">
          <h2 className="section__title">How It Works</h2>
          <p className="section__description">
            We provide a step-by-step guide on how to get started on your journey towards better
            health and nutrition. We are here to simplify the process and make it easy for you to
            navigate our platform and access the resources you need to achieve your goals. Here's
            how it works
          </p>
        </div>
        <div className="section__body section__body--grid">
          <div className="step">
            <p className="step__item">01</p>
            <div className="step__card">
              <div className="step__head">
                <div className="step__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="#262626"
                    viewBox="0 0 26 26"
                  >
                    <path d="M17.113 19.56 9.296 6.253c-.328-.559-.787-.723-1.31-.673-.43.05-.998.272-1.522.573-1.82 1.04-2.511 2.637-4.28 3.64-.772.437-1.441.602-1.762.781-.378.215-.546.574-.32.968l2.926 4.994c.328.56.794.717 1.31.666.43-.05 1.005-.272 1.522-.58 1.827-1.039 2.511-2.63 4.28-3.64.59-.33 1.128-.509 1.47-.638l4.55 7.76c.153.266.48.352.75.201a.558.558 0 0 0 .203-.745Zm-3.61-7.853.633 1.074.255-.437c.342.13.874.308 1.47.638 1.762 1.01 2.454 2.601 4.273 3.64.524.308 1.092.53 1.522.58.524.05.982-.107 1.31-.666l2.933-4.994c.226-.394.051-.753-.32-.968-.32-.179-.997-.344-1.769-.78-1.768-1.004-2.453-2.602-4.272-3.641-.525-.3-1.1-.523-1.522-.573-.524-.05-.983.114-1.31.673l-3.203 5.454Zm-1.005 3.869-.64-1.082-2.97 5.066a.551.551 0 0 0 .204.745c.27.15.597.065.742-.2l2.665-4.53Z" />
                  </svg>
                </div>
                <p className="step__name">Initial Consultation</p>
              </div>
              <p className="step__text">
                We start by scheduling an initial consultation, either in person or through a
                convenient online meeting. During this session, we will discuss your health history,
                lifestyle, goals, and any specific dietary requirements.
              </p>
            </div>
          </div>
          <div className="step">
            <p className="step__item">02</p>
            <div className="step__card">
              <div className="step__head">
                <div className="step__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <g clipPath="url(#a)">
                      <path
                        fill="#262626"
                        d="M0 10.636C0 11.669.631 12.3 1.665 12.3h22.144c1.034 0 1.676-.632 1.676-1.665v-.534c0-1.022-.642-1.675-1.676-1.675H1.665C.63 8.427 0 9.08 0 10.102v.534Zm6.92 13.613h11.644c2.514 0 3.297-1.47 3.613-3.047l1.512-7.41H1.806l1.502 7.41c.316 1.578 1.1 3.047 3.613 3.047Zm.708-1.872c-.413.065-.718-.152-.783-.522l-.936-5.474c-.066-.37.174-.664.587-.74.414-.054.73.153.795.522l.925 5.474c.054.37-.164.664-.588.74Zm3.45-.01c-.414.02-.719-.23-.74-.61l-.36-5.408c-.021-.381.25-.653.653-.686.425-.033.708.229.74.61l.36 5.407c.021.381-.25.664-.653.686Zm3.351 0c-.413-.023-.685-.306-.664-.687l.36-5.408c.032-.38.315-.642.74-.609.402.033.674.305.652.686l-.359 5.408c-.021.38-.326.63-.729.61Zm3.428.01c-.425-.076-.642-.37-.588-.74l.925-5.474c.066-.37.381-.576.794-.522.414.076.653.392.588.762l-.936 5.452c-.065.37-.38.587-.783.522ZM3.504 8.895H5.68l3.83-6.65c.294-.521.055-.979-.348-1.196-.391-.207-.914-.174-1.207.315l-4.451 7.53Zm16.3 0h2.177l-4.45-7.53c-.284-.48-.806-.512-1.208-.316-.392.218-.643.675-.349 1.197l3.83 6.649Z"
                      />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h26v26H0z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className="step__name">Assessing Your Needs</p>
              </div>
              <p className="step__text">
                Our team of experienced nutritionists and dietitians will conduct a thorough
                assessment of your nutritional needs and create a personalized plan tailored to your
                unique requirements.
              </p>
            </div>
          </div>
          <div className="step">
            <p className="step__item">03</p>
            <div className="step__card">
              <div className="step__head">
                <div className="step__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="27"
                    fill="none"
                    viewBox="0 0 26 27"
                  >
                    <path
                      fill="#262626"
                      d="M7.725 25.74h10.553c2.057 0 3.08-1.064 3.08-3.215V6.991c0-2.15-1.023-3.215-2.98-3.215h-.229v1.341c0 1.29-.845 2.202-2.077 2.202h-6.14c-1.233 0-2.078-.912-2.078-2.202V3.776h-.228c-1.958 0-2.981 1.064-2.981 3.215v15.534c0 2.15 1.023 3.216 3.08 3.216ZM9.931 6.13h6.141c.577 0 .924-.378.924-1.013V4.042c0-.635-.347-1.014-.924-1.014h-.914c-.07-1.157-1.004-2.1-2.156-2.1-1.153 0-2.087.943-2.157 2.1h-.914c-.576 0-.924.379-.924 1.014v1.075c0 .635.348 1.014.924 1.014ZM13.001 4c-.476 0-.864-.409-.864-.89 0-.502.388-.901.865-.901s.864.4.864.9c0 .482-.387.892-.864.892Z"
                    />
                  </svg>
                </div>
                <p className="step__name">Personalized Nutrition Plan</p>
              </div>
              <p className="step__text">
                Based on the information gathered, we will develop a personalized nutrition plan
                that takes into account your dietary preferences, lifestyle, and health goals. This
                plan will provide you with clear guidelines on what to eat, portion sizes, and meal
                timing.
              </p>
            </div>
          </div>
          <div className="step">
            <p className="step__item">04</p>
            <div className="step__card">
              <div className="step__head">
                <div className="step__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="27"
                    fill="none"
                    viewBox="0 0 26 27"
                  >
                    <path
                      fill="#262626"
                      d="M9.3 25.235c.914 0 1.48-.512 1.469-1.404l-.218-12.22c0-.381.163-.664.5-.816 1.437-.631 2.057-1.295 1.981-3.2l-.304-6.68c-.022-.48-.305-.752-.751-.752-.425 0-.686.283-.686.773l.076 6.496c0 .381-.239.62-.598.62-.37 0-.631-.228-.631-.587L10.028.74C10.019.272 9.747 0 9.3 0s-.707.272-.718.74l-.11 6.725c0 .359-.26.587-.63.587-.36 0-.61-.239-.61-.62L7.31.936c0-.49-.25-.773-.686-.773-.446 0-.73.272-.75.751l-.295 6.681c-.087 1.905.534 2.569 1.97 3.2.337.152.5.435.5.816l-.206 12.22c-.011.892.544 1.404 1.458 1.404Zm8.51-9.49-.23 8.031c-.032.947.545 1.459 1.448 1.459.925 0 1.49-.468 1.49-1.339V.816c0-.555-.38-.816-.772-.816-.413 0-.685.218-1.033.73-1.753 2.458-2.906 7.061-2.906 11.414v.533c0 .751.272 1.306.816 1.665l.642.435c.392.272.566.577.544.969Z"
                    />
                  </svg>
                </div>
                <p className="step__name">Meal Planning and Recipes</p>
              </div>
              <p className="step__text">
                To make your journey easier, we will provide you with a variety of delicious and
                nutritious meal options, along with recipes that align with your personalized
                nutrition plan.
              </p>
            </div>
          </div>
          <div className="step">
            <p className="step__item">05</p>
            <div className="step__card">
              <div className="step__head">
                <div className="step__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="27"
                    fill="none"
                    viewBox="0 0 26 27"
                  >
                    <path
                      fill="#262626"
                      d="M9.3 25.235c.914 0 1.48-.512 1.469-1.404l-.218-12.22c0-.381.163-.664.5-.816 1.437-.631 2.057-1.295 1.981-3.2l-.304-6.68c-.022-.48-.305-.752-.751-.752-.425 0-.686.283-.686.773l.076 6.496c0 .381-.239.62-.598.62-.37 0-.631-.228-.631-.587L10.028.74C10.019.272 9.747 0 9.3 0s-.707.272-.718.74l-.11 6.725c0 .359-.26.587-.63.587-.36 0-.61-.239-.61-.62L7.31.936c0-.49-.25-.773-.686-.773-.446 0-.73.272-.75.751l-.295 6.681c-.087 1.905.534 2.569 1.97 3.2.337.152.5.435.5.816l-.206 12.22c-.011.892.544 1.404 1.458 1.404Zm8.51-9.49-.23 8.031c-.032.947.545 1.459 1.448 1.459.925 0 1.49-.468 1.49-1.339V.816c0-.555-.38-.816-.772-.816-.413 0-.685.218-1.033.73-1.753 2.458-2.906 7.061-2.906 11.414v.533c0 .751.272 1.306.816 1.665l.642.435c.392.272.566.577.544.969Z"
                    />
                  </svg>
                </div>
                <p className="step__name">Ongoing Support</p>
              </div>
              <p className="step__text">
                Throughout your journey, our team of nutrition experts will be there to provide
                ongoing support, answer your questions, and offer guidance. We believe in the power
                of continuous encouragement to help you stay motivated and achieve long-term
                success.
              </p>
            </div>
          </div>
          <div className="step">
            <p className="step__item">06</p>
            <div className="step__card">
              <div className="step__head">
                <div className="step__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <path
                      fill="#262626"
                      d="M12.616 23.827c.174 0 .446-.065.718-.207 6.192-3.242 8.183-4.864 8.183-8.77V6.645c0-1.12-.479-1.48-1.392-1.86-1.274-.523-5.343-2.003-6.606-2.438a2.86 2.86 0 0 0-.903-.153c-.305 0-.61.066-.892.153-1.273.413-5.343 1.926-6.616 2.437-.903.37-1.393.74-1.393 1.86v8.206c0 3.906 2.1 5.343 8.183 8.77.283.153.544.207.718.207ZM7.708 13.37c0-.13.066-.294.185-.435l6.149-7.716c.467-.587 1.251-.195.968.534l-2.024 5.44h3.798c.294 0 .511.207.511.501 0 .13-.065.294-.185.435l-6.148 7.716c-.468.587-1.24.195-.968-.523l2.034-5.452H8.22a.495.495 0 0 1-.512-.5Z"
                    />
                  </svg>
                </div>
                <p className="step__name">Progress Tracking</p>
              </div>
              <p className="step__text">
                We encourage you to track your progress using our user-friendly mobile app or
                website tools. You can log your meals, monitor your weight, and track your physical
                activity, allowing you to have a clear picture of your progress and make any
                necessary adjustments.
              </p>
            </div>
          </div>
          <div className="step">
            <p className="step__item">07</p>
            <div className="step__card">
              <div className="step__head">
                <div className="step__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="27"
                    fill="none"
                    viewBox="0 0 26 27"
                  >
                    <path
                      fill="#1C1C1E"
                      d="M4.645 16.377c0 .925.62 1.534 1.6 1.534h5.886v5.082c0 1.665.697 3.047.969 3.047.26 0 .957-1.382.957-3.047v-5.082h5.887c.98 0 1.6-.609 1.6-1.534 0-2.296-1.84-4.722-4.897-5.832l-.359-4.995c1.589-.903 2.894-1.926 3.46-2.655.283-.37.425-.74.425-1.067 0-.664-.512-1.153-1.273-1.153H7.3c-.773 0-1.273.49-1.273 1.153 0 .327.13.697.413 1.067.566.729 1.872 1.752 3.46 2.655l-.359 4.994c-3.057 1.11-4.896 3.537-4.896 5.833Z"
                    />
                  </svg>
                </div>
                <p className="step__name">Regular Check-ins</p>
              </div>
              <p className="step__text">
                We will schedule regular check-ins to review your progress, address any concerns,
                and make any necessary adjustments to your nutrition plan. Our goal is to ensure
                that you are consistently moving towards your desired outcomes.
              </p>
            </div>
          </div>
          <div className="step">
            <p className="step__item">08</p>
            <div className="step__card">
              <div className="step__head">
                <div className="step__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <path
                      fill="#1C1C1E"
                      d="m24.218 8.92-8.81-4.02c-.918-.413-1.665-.61-2.411-.592-.738-.018-1.485.18-2.412.592l-8.8 4.02c-.576.261-.855.719-.855 1.177 0 .457.279.906.855 1.175l3.707 1.688 5.696-2.666a.3.3 0 0 1-.072-.197c0-.566.954-.997 1.917-.997.971 0 1.907.431 1.907.997 0 .583-.936 1.023-1.907 1.023a3.27 3.27 0 0 1-.855-.117l-5.435 2.54 3.842 1.759c.927.422 1.674.601 2.412.592.746.01 1.493-.17 2.411-.592l8.81-4.03c.576-.269.855-.718.855-1.175 0-.458-.28-.916-.855-1.176ZM6.707 14.872v5.457c1.511.915 3.671 1.472 6.29 1.472 5.309 0 8.728-2.271 8.728-4.954v-3.088l-5.804 2.648c-1.053.485-2.006.727-2.924.718-.91.009-1.872-.233-2.925-.718L6.707 14.87Zm-2.43-1.113v3.088c0 .78.45 1.75 1.26 2.575v-5.08l-1.26-.583Zm1.26 8.652h1.17v-2.082a5.779 5.779 0 0 1-1.17-.907v2.989Zm-.711.063v2.36c0 .71.459 1.167 1.17 1.167h.243c.71 0 1.17-.458 1.17-1.167v-2.36c0-.71-.46-1.167-1.17-1.167h-.243c-.711 0-1.17.458-1.17 1.167Z"
                    />
                  </svg>
                </div>
                <p className="step__name">Education and Resources</p>
              </div>
              <p className="step__text">
                Along the way, we will provide you with educational resources, such as articles,
                guides, and videos, to enhance your understanding of nutrition and empower you to
                make informed choices for a healthier lifestyle.
              </p>
            </div>
          </div>
          <div className="step">
            <p className="step__item">09</p>
            <div className="step__card">
              <div className="step__head">
                <div className="step__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="27"
                    fill="none"
                    viewBox="0 0 26 27"
                  >
                    <path
                      fill="#1C1C1E"
                      d="M9.898 25.866h6.208c3.535 0 5.283-1.815 5.252-5.445-.04-4.146-.06-7.158-.162-9.416-.295-6.642-2.134-8.592-8.19-8.592-6.055 0-7.904 1.95-8.199 8.591-.101 2.26-.121 5.27-.162 9.417-.03 3.63 1.717 5.445 5.253 5.445Zm-.295-4.094c-.874 0-1.432-.578-1.432-1.444v-5.322c0-.877.558-1.454 1.432-1.454h6.807c.864 0 1.423.578 1.423 1.454v5.322c0 .866-.559 1.444-1.422 1.444H9.602Zm-1.432-4.25h9.662v-1.227H8.17v1.228ZM13.007 0c-1.951 0-3.323 1.34-3.323 3.166h1.433c0-1 .772-1.712 1.89-1.712 1.107 0 1.89.712 1.89 1.712h1.432C16.33 1.341 14.947 0 13.007 0Z"
                    />
                  </svg>
                </div>
                <p className="step__name">Fine-Tuning and Adjustments</p>
              </div>
              <p className="step__text">
                As your journey progresses and your goals evolve, we will fine-tune and make
                adjustments to your nutrition plan to ensure that it continues to align with your
                changing needs.
              </p>
            </div>
          </div>
          <div className="step">
            <p className="step__item">10</p>
            <div className="step__card">
              <div className="step__head">
                <div className="step__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="none"
                    viewBox="0 0 26 26"
                  >
                    <path
                      fill="#1C1C1E"
                      d="M12.6 18.412h.9c5.004 0 8.377-3.378 8.377-8.622V7.755c0-2.386-3.563-4.01-8.827-4.01-5.264 0-8.827 1.624-8.827 4.01V9.79c0 5.063 3.363 8.622 8.377 8.622Zm.45-8.21c-4.183 0-7.266-1.064-7.266-2.447 0-1.374 3.083-2.446 7.266-2.446 4.193 0 7.276 1.072 7.276 2.446 0 1.383-3.083 2.446-7.276 2.446Zm7.746 3.779h.79c2.232 0 3.573-1.173 3.573-3.118 0-1.935-1.35-3.118-3.572-3.118h-.64v1.554h.64c1.27 0 2.011.581 2.011 1.564 0 .972-.74 1.564-2.011 1.564h-.791v1.554ZM13 23.215c7.606 0 13-2.166 13-5.314 0-1.223-.83-2.296-2.292-3.158-.6.25-1.26.39-2.011.41-1.591 2.778-4.504 4.432-8.197 4.432h-.9c-4.113 0-7.326-2.185-8.757-5.604C1.411 14.923 0 16.287 0 17.9c0 3.148 5.404 5.314 13 5.314Z"
                    />
                  </svg>
                </div>
                <p className="step__name">Sustainable Lifestyle Habits</p>
              </div>
              <p className="step__text">
                Our ultimate goal is to help you develop sustainable lifestyle habits that will
                support your long-term health and wellness. We will equip you with the knowledge and
                skills to maintain your progress even after you've completed the program.
              </p>
            </div>
          </div>
        </div>
      </section>

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
}
