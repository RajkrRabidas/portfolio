import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <div className="second-section">
      <div className="about-container" id="about">
        <h2 className="section-tag">// About Me</h2>
        <p className="intro-text reveal-text">
          I&apos;m a versatile <span className="highlight">Full Stack Developer</span> and
          <span className="highlight">Designer</span> who turns ideas into
          <span className="highlight">real digital experiences.</span>
          <br />
          I focus on <span className="highlight">clean interfaces</span>,
          <span className="highlight">smooth animations</span>, and
          <span className="highlight">fast performance</span> to deliver impactful web
          solutions.
        </p>

        <div className="btn-container">
          <Link
            to="/assets/Raj_Resume.pdf"
            download
            reloadDocument
            className="btn-primary"
          >
            Download CV
          </Link>
          <Link to="#work" className="btn-secondary">
            See My Work
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
