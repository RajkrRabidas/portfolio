import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import { socialLinks } from "../../data/socialData";

function ContactSection() {
  return (
    <section aria-labelledby="get-in-touch" className="contact-section" id="contact">
      <div className="contact-wrap">
        <header className="contact-head">
          <h1 id="get-in-touch" className="contact-title">
            GET IN TOUCH
          </h1>
          <span className="contact-sticker">Want to know more?</span>
        </header>

        <ContactForm />

        <footer className="contact-footer">
          <div className="footer-left">
            <div className="footer-logo">
              <svg
                width="48"
                height="32"
                viewBox="0 0 48 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect x="0" y="0" width="48" height="32" rx="6" fill="#fff" />
                <text
                  x="24"
                  y="22"
                  textAnchor="middle"
                  fontSize="12"
                  fill="#000"
                  fontFamily="Inter, sans-serif"
                >
                  RAJ
                </text>
              </svg>
              <div className="footer-name">R.k Rabidas</div>
            </div>
            <nav className="footer-nav">
              <Link to="/#work">Work</Link>
              <Link to="/#about">About</Link>
              <Link to="/#contact">Contacts</Link>
            </nav>
          </div>
          <div className="footer-right">
            <div className="alt-contact">
              Hate contact forms?
              <a className="mail" href="mailto:singhkabir05185@gmail.com">
                <span>
                  {" "}
                  Me too <i className="ri-arrow-right-line"></i>
                </span>
                raj@gmail.com
              </a>
            </div>
            <div className="follow">FOLLOW</div>
            <div className="socials">
              {socialLinks.map((link) => (
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={link.href}
                  aria-label={link.label}
                  className="social"
                  key={link.label}
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
            <div className="fine-print">
              All rights reserved <br /> created by R.k Rabidas in 2025
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default ContactSection;
