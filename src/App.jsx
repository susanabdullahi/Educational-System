import About from "./Components/About";
import Campus from "./Components/Campus";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Programs from "./Components/Programs";
import Testimonials from "./Components/Testimonials";
import Title from "./Components/Title";



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subtitle="Our Programs" title="What we offer" />
      <Programs />
      <About />
      <Title subtitle="Gallery" title="Campus Photos" />
      <Campus/>
      <Title subtitle="TESTIMONIALS" title="WHAT STUDENT SAYS" />
      <Testimonials/>
      <Title subtitle="Contact Us" title="Get In Touch" />
      <Contact/>
      <Footer/>
    </div>

    
  );
}

export default App;
