function ServiceCard({ service }) {
  return (
    <div className={service.cardClassName}>
      <div className={service.topClassName}>
        <video
          src={service.video}
          className="services__content-card_development_video"
          playsInline
          autoPlay
          loop
          muted
        ></video>
        <p className={service.descriptionClassName}>{service.description}</p>
      </div>
      <div className={service.bottomClassName}>
        <h4 className={service.titleClassName}>{service.title}</h4>
        <h5 className={service.counterClassName}>{service.counter}</h5>
      </div>
    </div>
  );
}

export default ServiceCard;
