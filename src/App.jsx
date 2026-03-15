import { memo, useRef } from "react";
import { usePortfolioAnimations } from "./hooks/usePortfolioAnimations";
import HomeSection from "./components/Home/HomeSection";
import AboutSection from "./components/About/AboutSection";
import ProjectsSection from "./components/Projects/ProjectsSection";
import ServicesSection from "./components/Services/ServicesSection";
import ContactSection from "./components/Contact/ContactSection";


const App = memo(function App() {
  const rootRef = useRef(null);

  usePortfolioAnimations(rootRef);

  return (
    <div id="main" ref={rootRef}>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
});

export default App;
