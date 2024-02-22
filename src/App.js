import { Navbar } from "./components/pageComponents/Navbar";
import Content from "./components/pageComponents/Content";
import About from "./components/pageComponents/About";
import Resume from "./components/pageComponents/Resume";
import ScrollToTopButton from "./components/pageComponents/ScrollTop";
import Contact from "./components/pageComponents/Contact";
import Projects from "./components/pageComponents/Projects";
import Footer from "./components/pageComponents/Footer";

function App() {
  return (
    <>
        <Navbar />
        <Content />
        <About />
        <Resume />
        <Projects />
        <Contact />
        <ScrollToTopButton />
        <Footer />
    </>
  );
}

export default App;
