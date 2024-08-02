import { ArrowUpIcon, MailIcon, PhoneIcon, WaypointIcon } from "@/components/base/icon";

export const Footer = () => {
  return (
    <footer className="container footer">
      <div className="footer__upper">
        <div className="footer__stripe">
          <a href="/">
            <img className="footer__logotype" src="/logotype.svg" alt="Nutritionist" />
          </a>

          <a className="footer__anchor" href={"#header"}>
            Got To Top
            <div>
              <ArrowUpIcon />
            </div>
          </a>
        </div>

        <nav className="footer__navigation">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/team">Team</a>
          <a href="/process">Process</a>
          <a href="/pricing">Pricing</a>
          <a href="/blog">Blog</a>
        </nav>
      </div>

      <div className="footer__lower">
        <div className="footer__contacts">
          <div>
            <MailIcon />
            hello@squareup.com
          </div>
          <div>
            <PhoneIcon />
            +91 91813 23 2309
          </div>
          <div>
            <WaypointIcon />
            Somewhere in the World
          </div>
        </div>

        <p className="footer__copyright">&copy; 2024 Nutritionist. All rights reserved.</p>
      </div>
    </footer>
  );
};
