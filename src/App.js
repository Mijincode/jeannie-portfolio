import React from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChaeulBeauty from "./components/pages/ChaeulBeauty";
import StudyPlan from "./components/pages/StudyPlan";
import StyleSerenity from "./components/pages/StyleSerenity";
import HappyToo from "./components/pages/HappyToo";
import HMRedesign from "./components/pages/HMRedesign";
import FamilyNutrients from "./components/pages/FamilyNutrients";
import Happiness from "./components/pages/Happiness";
import ScrollToTop from "./components/ScrollToTop";
import MovieSearch from "./components/pages/MovieSearch";
import FlightRoutes from "./components/pages/FlightRoutes";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main id="main-wrapper">
              <Home />
              <hr className="section-divider" />

              <Projects />
              <hr className="section-divider" />
              <Skills />
              <hr className="section-divider" />
              <About />
              <hr className="section-divider" />
              <Contact />
            </main>
          }
        />

        {/* Project case study page */}

        <Route path="/projects/chaeul-beauty" element={<ChaeulBeauty />} />
        <Route
          path="/projects/family-nutrients"
          element={<FamilyNutrients />}
        />
        <Route path="/projects/happy-too" element={<HappyToo />} />
        <Route path="/projects/style-serenity" element={<StyleSerenity />} />
        <Route path="/projects/study-plan" element={<StudyPlan />} />

        <Route path="/projects/hm-redesign" element={<HMRedesign />} />

        <Route path="/projects/happiness" element={<Happiness />} />
        <Route path="/projects/movie-search" element={<MovieSearch />} />
        <Route path="/projects/flight-routes" element={<FlightRoutes />} />
      </Routes>
    </Router>
  );
}
export default App;
