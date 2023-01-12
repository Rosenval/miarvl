import React from "react"
import mimi from "../imgs/mimi.png"

export default function About() {
    return(
        <div className="img--and--about--container">
            <img src={mimi} alt="Mimi" className="mimi--img" />
            <p className="mimi--p">Hi, Mia here! I am an aspiring
            front-end developer, currently attending 42Roma Luiss coding school.
            As far as I remember, the exact moment my fascination for web development started was when
            I edited the code of a Tumblr theme for the first time - basically copy-pasting a code
            I found somewhere on the Internet having absolutely no clue about what
            I was doing/what was happening - though seeing how a bunch of code could radically
            change the appearance of a page was like witnessing magic for me.
            Long story short, after spending my whole life convincing myself that coding was too
            hard and I'd never be smart enough to make it, during 2020 quarantine I decided to
            give it a try, just to see how much of it I could understand and test my limits.
            I started studying by myself, then, later on, I found out about 42 -
            and that changed the whole game.</p>
        </div>
    )
}