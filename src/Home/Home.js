import React, {useRef} from "react";
import Intro from "./About/Intro.js";
import Nav from "../Nav_Bar/Nav.js";
import Highlights from "./Highlights/Highlights.js";
import Education  from "./Education/Education.js";
import Footer from "../Footer/Footer.js";
import Skills from "./Skills/Skills.js";
import Contact from "./Contact/Contact.js";

function Home(){
    const aboutRef = React.useRef(null);
    const projectsRef = React.useRef(null);
    const educationRef = React.useRef(null);
    const skillsRef = React.useRef(null);
    const contactsRef = React.useRef(null);
    const scrollToAbout = ()=>{
        aboutRef.current?.scrollIntoView({behavior:"smooth"});
    }
    const scrollToProjects = () => {
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToEducation = ()=>{
        educationRef.current?.scrollIntoView({behavior: "smooth"});
    };
    const scrollToSkills = ()=>{
        skillsRef.current?.scrollIntoView({behavior: "smooth"});
    };
    const scrollToContacts = ()=>{
        contactsRef.current?.scrollIntoView({behavior:"smooth"});
    };
    return(
        <div>
      <Nav name="Dwij Shah" 
        scrollToAbout={scrollToAbout} 
        scrollToProjects={scrollToProjects} 
        scrollToEducation={scrollToEducation} 
        scrollToSkills={scrollToSkills}
        scrollToContacts={scrollToContacts}/>
      <main className="content">
        <section ref={aboutRef}>        
            <Intro name="Dwij Shah" scrollToProjects={scrollToProjects}/>
        </section>
        <section ref={projectsRef}>
          <Highlights/>
        </section>
        <section ref={educationRef}>
            <Education />
        </section>
        <section ref={skillsRef}>
            <Skills />
        </section>
        <section ref={contactsRef}>
            <Contact/>
        </section>
      </main>
      <Footer name="Dwij Shah" github="https://github.com/ReverseToshi" linkedin="https://www.linkedin.com/in/dwij-shah-revert" docker="https://hub.docker.com/u/reversetoshi" leetcode="https://leetcode.com/ReverseToshi"/>
    </div>
    )
}

export default Home;