import React from "react"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Projects from "./components/Projects"
import projectsArr from "./projectsArr"
import About from "./components/About"
import Resume from "./components/Resume"
import resumeArr from "./resumeArr"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./styles.css"

export default function App() {
    const allProjects = projectsArr.map(item => {
        return (
        <Projects
        key={item.id}
        item={item}
        />
        )
    })

    const resumeSections = resumeArr.map(item =>{
        return (
            <Resume
            key={item.id}
            item={item}
            />
        )
    })

    return(
        <div>
            <div className="home">
                <Nav />
                <Hero />
            </div>
            <div id="projects--container">
                <h3 className="body--sections--title uppercase">my projects</h3>
                {allProjects}
            </div>
            <div id="about--container">
                <h3 className="body--sections--title uppercase">about me</h3>
                <About />
            </div>
            <div id="resume--container">
                <h3 className="body--sections--title--no--bg uppercase">resume</h3>
                {resumeSections}
            </div>
            <div id="contact--container">
                <h3 className="body--sections--title--no--bg uppercase">contact</h3>
                <Contact />
            </div>
            <Footer />
        </div>
    )
}