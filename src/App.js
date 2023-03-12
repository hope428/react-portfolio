import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Skills from "./components/Skills";

function App() {
  return (
    <main>
      <Navbar />
      <Header />
      <Skills />
      <Work />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
