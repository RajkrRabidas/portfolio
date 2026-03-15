import Header from "../Header/Header";

function HomeSection() {
  return (
    <div id="home">
      <Header />

      <div className="hero">
        <div className="profile-img">
          <img
            className="side-img"
            src="https://ik.imagekit.io/rajdev/portfolio-img.png"
            alt="Profile"
          />
        </div>

        <div className="hero-content">
          <p className="hero-sub herofooter">
            HELLO... I AM {"\u{1F44B}"}
          </p>
          <div className="hero-title-wrapper">
            <h1 className="hero-title title-devloper herofooter">WEB DEVELOPER</h1>
            <h2 className="hero-title title-designer herofooter">DESIGNER</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
