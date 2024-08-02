import { ArrowRightIcon, BallIcon, MenuIcon } from "@/components/base/icon";

export const Header = () => {
  return (
    <header id="header" className="header">
      <div className="container header__upper">
        <a href="/contact" className="header__announcement">
          <BallIcon />
          Join Our Personalized Nutrition Demo For Free
          <ArrowRightIcon />
        </a>
      </div>

      <div className="container header__lower">
        <a href="/">
          <img className="header__logotype" src="/logotype.svg" alt="Nutritionist" />
        </a>

        <div className="header__right">
          <nav className="header__navigation">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/team">Team</a>
            <a href="/process">Process</a>
            <a href="/pricing">Pricing</a>
            <a href="/blog">Blog</a>
          </nav>

          <div className="header__buttons">
            <a
              href="/contact"
              className="header__contact button button--solid button--md button--px-sm"
            >
              Contact
            </a>

            <button className="header__menu button button--ghost button--md button--square">
              <MenuIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
