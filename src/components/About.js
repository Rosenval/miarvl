import React from "react"
import mimi from "../imgs/mimi.png"

export default function About() {
    return(
        <div className="img--and--about--container">
            <img src={mimi} alt="Mimi" className="mimi--img" />
            <p className="mimi--p">Hi, Mia here! I am an aspiring
            front-end developer who attended the 42Roma Luiss coding school.
            As far as I remember, the exact moment my fascination for web development started was when
            I edited the code of a Tumblr theme for the first time: seeing how a bunch of code could radically
            change the appearance of a page was like witnessing magic for me. I then realized that witnessing was
            not enough anymore, I wanted to <span className="bold">make</span> it.
            Long story short, during 2020 quarantine I decided to give coding a try, both for fun and to test my limits.
            I started studying by myself, then, later on, I found out about 42 - and that changed the whole game.</p>
        </div>
    )
}