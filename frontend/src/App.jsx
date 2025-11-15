// src/App.jsx
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import About from "./pages/about/About.jsx";
import Courses from "./pages/courses/Courses.jsx";
import Assessments from "./pages/assessments/Assessments.jsx";
import AssessmentDetail from "./pages/assessments/AssessmentDetail.jsx";

function App() {
  return (
    <>
      <NavBar />

      <main className="pt-20 min-h-screen bg-[#fef7ef]">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Hero />} />

          {/* About page */}
          <Route path="/about" element={<About />} />

          <Route path="/courses" element={<Courses />} />

          <Route path="/assessments" element={<Assessments />} />
          <Route path="/assessments/:id" element={<AssessmentDetail />} /> 

        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
