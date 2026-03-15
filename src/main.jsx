import { useLayoutEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import "./styles/header.css";
import "./styles/home.css";
import "./styles/about.css";
import "./styles/projects.css";
import "./styles/services.css";
import "./styles/contact.css";
import "./styles/responsive.css";

function ScrollToHash() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return undefined;
    }

    const targetId = location.hash.slice(1);
    const timeoutId = window.setTimeout(() => {
      const element = document.getElementById(targetId);

      if (!element) {
        return;
      }

      const top = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top, behavior: "smooth" });
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [location.hash, location.pathname]);

  return null;
}

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ScrollToHash />
    <Routes>
      <Route path="*" element={<App />} />
    </Routes>
  </BrowserRouter>
);
