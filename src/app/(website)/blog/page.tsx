import type { Metadata } from "next";
import { LeafIcon } from "@/components/base/icon";
import "./page.scss";

export const metadata: Metadata = {
  title: "Blog",
  description: "This is the description of the blog page."
};

const BlogPage = () => {
  return (
    <>
      <div className="banner">
        <div className="banner__head">
          <div className="banner__image">
            <LeafIcon />
          </div>

          <div className="banner__header">
            <h2 className="banner__title">Our Blogs</h2>
            <p className="banner__description">
              Welcome to the Blog section of Nutritionist, your trusted source for insightful
              articles, tips, and expert advice on nutrition and wellness. Here, we strive to
              provide you with engaging and informative content that will inspire and empower you to
              make informed decisions about your health. Explore our blog to discover a wealth of
              resources that cover a wide range of topics related to nutrition, fitness, and overall
              well-being.
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

      <div className="blogs">
        <div className="blog">
          <div className="blog__head">
            <p className="blog__category underline">Weight Loss Tips</p>
            <img className="blog__image" src="/thumbnail/blog/blog-4.png" alt="" />
          </div>
          <div className="blog__body">
            <div className="blog__text">
              <p className="blog__title">10 Effective Strategies for Sustainable Weight Loss</p>
              <p className="blog__description">
                Discover proven strategies for long-term weight loss success. Learn how to create
                healthy habits, set achievable goals, and make sustainable lifestyle changes.
              </p>
            </div>
            <button className="button button--solid button--lg button--px-md">Read More</button>
          </div>
        </div>
        <div className="blog">
          <div className="blog__head">
            <p className="blog__category underline">Weight Loss Tips</p>
            <img className="blog__image" src="/thumbnail/blog/blog-5.png" alt="" />
          </div>
          <div className="blog__body">
            <div className="blog__text">
              <p className="blog__title">The Role of Portion Control in Weight Management</p>
              <p className="blog__description">
                Learn how portion control can help you manage your weight effectively. Find
                practical tips for controlling portion sizes and avoiding overeating.
              </p>
            </div>
            <button className="button button--solid button--lg button--px-md">Read More</button>
          </div>
        </div>
        <div className="blog">
          <div className="blog__head">
            <p className="blog__category underline">Weight Loss Tips</p>
            <img className="blog__image" src="/thumbnail/blog/blog-6.png" alt="" />
          </div>
          <div className="blog__body">
            <div className="blog__text">
              <p className="blog__title">Understanding Emotional Eating and How to Overcome It</p>
              <p className="blog__description">
                Explore the connection between emotions and eating habits. Get valuable insights on
                how to identify emotional triggers and develop healthier coping mechanisms.
              </p>
            </div>
            <button className="button button--solid button--lg button--px-md">Read More</button>
          </div>
        </div>
        <div className="blog">
          <div className="blog__head">
            <p className="blog__category underline">Weight Loss Tips</p>
            <img className="blog__image" src="/thumbnail/blog/blog-7.png" alt="" />
          </div>
          <div className="blog__body">
            <div className="blog__text">
              <p className="blog__title">How to Stay Motivated on Your Weight Loss Journey</p>
              <p className="blog__description">
                Find effective strategies to stay motivated and overcome obstacles during your
                weight loss journey. Get tips on setting realistic goals, tracking progress, and
                celebrating achievements.
              </p>
            </div>
            <button className="button button--solid button--lg button--px-md">Read More</button>
          </div>
        </div>
        <div className="blog">
          <div className="blog__head">
            <p className="blog__category underline">Healthy Eating</p>
            <img className="blog__image" src="/thumbnail/blog/blog-8.png" alt="" />
          </div>
          <div className="blog__body">
            <div className="blog__text">
              <p className="blog__title">The Benefits of a Plant-Based Diet for Overall Health</p>
              <p className="blog__description">
                Explore the advantages of adopting a plant-based diet. Learn about the potential
                health benefits, nutrient-rich plant-based foods, and tips for transitioning to a
                plant-based lifestyle.
              </p>
            </div>
            <button className="button button--solid button--lg button--px-md">Read More</button>
          </div>
        </div>
        <div className="blog">
          <div className="blog__head">
            <p className="blog__category underline">Healthy Eating</p>
            <img className="blog__image" src="/thumbnail/blog/blog-9.png" alt="" />
          </div>
          <div className="blog__body">
            <div className="blog__text">
              <p className="blog__title">
                Understanding Macronutrients: Carbohydrates, Proteins, and Fats
              </p>
              <p className="blog__description">
                Get a comprehensive overview of macronutrients and their role in a balanced diet.
                Discover the best sources of each macronutrient and how to incorporate them into
                your meals.
              </p>
            </div>
            <button className="button button--solid button--lg button--px-md">Read More</button>
          </div>
        </div>
        <div className="blog">
          <div className="blog__head">
            <p className="blog__category underline">Fitness and Exercise</p>
            <img className="blog__image" src="/thumbnail/blog/blog-10.png" alt="" />
          </div>
          <div className="blog__body">
            <div className="blog__text">
              <p className="blog__title">
                Cardio vs. Strength Training: Which Is Better for Weight Loss?
              </p>
              <p className="blog__description">
                Explore the benefits of both cardio and strength training exercises for weight loss.
                Find out how to combine them effectively to maximize your results.
              </p>
            </div>
            <button className="button button--solid button--lg button--px-md">Read More</button>
          </div>
        </div>
        <div className="blog">
          <div className="blog__head">
            <p className="blog__category underline">Fitness and Exercise</p>
            <img className="blog__image" src="/thumbnail/blog/blog-11.png" alt="" />
          </div>
          <div className="blog__body">
            <div className="blog__text">
              <p className="blog__title">
                Building a Home Workout Routine: Tips and Best Practices
              </p>
              <p className="blog__description">
                Discover how to create an effective workout routine at home. Learn about equipment
                options, exercise techniques, and ways to stay motivated.
              </p>
            </div>
            <button className="button button--solid button--lg button--px-md">Read More</button>
          </div>
        </div>
        <div className="blog">
          <div className="blog__head">
            <p className="blog__category underline">Mindset and Motivation</p>
            <img className="blog__image" src="/thumbnail/blog/blog-12.png" alt="" />
          </div>
          <div className="blog__body">
            <div className="blog__text">
              <p className="blog__title">Developing a Positive Body Image and Self-Confidence</p>
              <p className="blog__description">
                Explore techniques for cultivating a positive body image and improving
                self-confidence. Learn how to embrace your body and appreciate your unique
                qualities.
              </p>
            </div>
            <button className="button button--solid button--lg button--px-md">Read More</button>
          </div>
        </div>
        <div className="blog">
          <div className="blog__head">
            <p className="blog__category underline">Mindset and Motivation</p>
            <img className="blog__image" src="/thumbnail/blog/blog-13.png" alt="" />
          </div>
          <div className="blog__body">
            <div className="blog__text">
              <p className="blog__title">Overcoming Self-Sabotage in Your Weight Loss Journey</p>
              <p className="blog__description">
                Identify self-sabotaging behaviors and learn strategies to overcome them. Discover
                how to shift your mindset and develop healthier habits.
              </p>
            </div>
            <button className="button button--solid button--lg button--px-md">Read More</button>
          </div>
        </div>
        <div className="blog">
          <div className="blog__head">
            <p className="blog__category underline">Recipes and Meal Planning</p>
            <img className="blog__image" src="/thumbnail/blog/blog-14.png" alt="" />
          </div>
          <div className="blog__body">
            <div className="blog__text">
              <p className="blog__title">Healthy and Flavorful Lunch Ideas for a Busy Lifestyle</p>
              <p className="blog__description">
                Discover a variety of tasty and nutritious lunch options that are perfect for those
                with busy schedules. These recipes are quick to make and packed with essential
                nutrients.
              </p>
            </div>
            <button className="button button--solid button--lg button--px-md">Read More</button>
          </div>
        </div>
        <div className="blog">
          <div className="blog__head">
            <p className="blog__category underline">Recipes and Meal Planning</p>
            <img className="blog__image" src="/thumbnail/blog/blog-15.png" alt="" />
          </div>
          <div className="blog__body">
            <div className="blog__text">
              <p className="blog__title">
                Satisfying and Nutritious Dinner Recipes for Weight Loss
              </p>
              <p className="blog__description">
                Find a collection of flavorful dinner recipes that are both satisfying and
                supportive of your weight loss goals. These recipes are designed to be healthy and
                delicious.
              </p>
            </div>
            <button className="button button--solid button--lg button--px-md">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
