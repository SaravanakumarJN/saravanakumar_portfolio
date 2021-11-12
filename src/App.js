import React from "react";
import "./App.css";
import { About } from "./components/about/About";
import { Skills } from "./components/skills/Skills";
// import { Proficiency } from "./components/proficiency/Proficiency";
import { Projects } from "./components/projects/Projects";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { ScrollTopBtn } from "./components/scroll_top_btn/ScrollTopBtn";
import ScrollAnimation from "react-animate-on-scroll";
import { Experience } from "./components/experience/Experience";
import { Navbar } from "./components/navbar/Navbar";
import { ContactForm } from "./components/contact_form/ContactForm";

const App = () => {
  let about_section = React.useRef(null);
  let skills_section = React.useRef(null);
  let project_section = React.useRef(null);
  let experience_section = React.useRef(null);
  let contact_section = React.useRef(null);

  const handleSectionScroll = (arg) => {
    let scroll_obj = {
      left: 0,
      behavior: "smooth",
    };
    if (arg === "about") {
      scroll_obj.top = about_section.current.offsetTop - 70;
      window.scrollTo(scroll_obj);
    } else if (arg === "skills") {
      scroll_obj.top = skills_section.current.offsetTop - 70;
      window.scrollTo(scroll_obj);
    } else if (arg === "projects") {
      scroll_obj.top = project_section.current.offsetTop - 70;
      window.scrollTo(scroll_obj);
    } else if (arg === "experience") {
      scroll_obj.top = experience_section.current.offsetTop - 70;
      window.scrollTo(scroll_obj);
    } else if (arg === "contact") {
      scroll_obj.top = contact_section.current.offsetTop - 70;
      window.scrollTo(scroll_obj);
    }
  };

  return (
    <div className='container'>
      <Navbar handleSectionScroll={handleSectionScroll} />
      <Header />
      <ScrollAnimation duration={2} animateOnce={true} animateIn='fadeIn'>
        <div ref={about_section}>
          <About />
        </div>
      </ScrollAnimation>
      <ScrollAnimation duration={2} animateOnce={true} animateIn='fadeIn'>
        <div ref={experience_section}>
          <Experience />
        </div>
      </ScrollAnimation>
      <ScrollAnimation duration={2} animateOnce={true} animateIn='fadeIn'>
        <div ref={skills_section}>
          <Skills />
        </div>
      </ScrollAnimation>
      {/* <ScrollAnimation duration={2} animateOnce={true} animateIn='fadeIn'>
        <Proficiency />
      </ScrollAnimation> */}
      <ScrollAnimation duration={2} animateOnce={true} animateIn='fadeIn'>
        <div ref={project_section}>
          <Projects />
        </div>
      </ScrollAnimation>
      <ScrollAnimation duration={2} animateOnce={true} animateIn='fadeIn'>
        <div ref={contact_section}>
          <ContactForm />
        </div>
      </ScrollAnimation>
      {/* <ScrollAnimation duration={2} animateOnce={true} animateIn='fadeIn'> */}
      <Footer />
      {/* </ScrollAnimation> */}
      <ScrollTopBtn />
    </div>
  );
};

export default App;
