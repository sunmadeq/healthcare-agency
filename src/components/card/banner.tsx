import { LeafIcon } from "@/components/icon";

export interface IBanner {
  title: string;
  description: string;
}

export const Banner = (banner: IBanner) => {
  return (
    <div className="banner">
      <div className="banner__head">
        <div className="banner__image">
          <LeafIcon />
        </div>

        <div className="banner__header">
          <h2 className="banner__title">Our Blogs</h2>
          <p className="banner__description">
            Welcome to the Blog section of Nutritionist, your trusted source for insightful
            articles, tips, and expert advice on nutrition and wellness. Here, we strive to provide
            you with engaging and informative content that will inspire and empower you to make
            informed decisions about your health. Explore our blog to discover a wealth of resources
            that cover a wide range of topics related to nutrition, fitness, and overall well-being.
          </p>
        </div>
      </div>
      <div className="banner__body banner__body--navigation">
        <div>
          <a data-active="true" href="?filter=all">
            All
          </a>
          <a data-active="false" href="?filter=weight-loss-tips">
            Weight Loss Tips
          </a>
          <a data-active="false" href="?filter=healthy-eating">
            Healthy eating
          </a>
          <a data-active="false" href="?filter=fitness-and-exercise">
            Fitness and Exercise
          </a>
          <a data-active="false" href="?filter=mindset-and-motivation">
            Mindset and Motivation
          </a>
          <a data-active="false" href="?filter=recipes-and-meal-planning">
            Recipes and Meal Planning
          </a>
        </div>
      </div>
    </div>
  );
};
