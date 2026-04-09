import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import Project1 from "./components/pages/Case-Study-1";
import Project2 from "./components/pages/Case-Study-2";
import Project3 from "./components/pages/Case-Study-3";
// import Header from "./components/Header";
import Skills from "./components/Skills";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./components/Project";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<main>
            <Navbar />
            {/* <Header /> */}
            <About />
            <Skills />
            <Work />
            <Contact />
            <Footer />
          </main>} />
          <Route path="/Project 1" element={<Project1/>}/>
          <Route path="/Project 2" element={<Project2/>}/>
          <Route path="/Project 3" element={<Project3/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
