import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
// import Header from "./components/Header";
import Skills from "./components/Skills";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
