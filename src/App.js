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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main id="main-wrapper">
              <Home />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
          }
        />

        {/* Project case study page */}
        <Route path="/projects/chaeul-beauty" element={<ChaeulBeauty />} />
        <Route path="/projects/style-serenity" element={<StyleSerenity />} />
        <Route path="/projects/study-plan" element={<StudyPlan />} />
      </Routes>
    </Router>
  );
}
export default App;
