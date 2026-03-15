import { services } from "../../data/servicesData";
import ServiceCard from "./ServiceCard";

function ServicesSection() {
  return (
    <section className="services-section" id="services">
      <h2 className="section-tag2">// Services</h2>
      <div className="pin-spacer">
        <div className="services__content">
          <div className="services__content-left">
            <h4 className="services__content-left_text">
              How can I <br />
              assist you?
            </h4>
            <svg width="86" height="80" fill="none">
              <path
                fill="#F9FDFE"
                fillRule="evenodd"
                d="M0 0h6v49.193h68.517L54.2 28.71l4.243-4.276L86 52.217 58.444 80l-4.243-4.275L74.517 55.24H0V0Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <div className="services__content-cards">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
