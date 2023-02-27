import React from "react"
import supermimi from "../imgs/supermimi-nobg.png"

export default function Hero() {
    return(
        <div className="hero--container">
            <div className="text--container">
                               <div className="text--text">
                    <h1>
                        <span className="mia uppercase">Mialy</span>
                        &nbsp;
                        <span className="ravalson uppercase">Ravalson</span>
                    </h1>

                <div className="motto--and--welcome">
                    <div className="motto--container">
                        <span className="motto uppercase">from </span>
                        <span className="motto pink uppercase">beginning </span>
                        <span className="motto uppercase">to </span>
                        <span className="motto uppercase">front-<span className="pink uppercase">end</span>!</span>
                    </div>
                    <p className="welcome">Front-end developer working towards becoming my own hero,<br/>
                    welcome to my journey!</p>
                </div>
                </div>
                <div className="icons">
                <a href="https://github.com/Rosenval" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/mialy-ravalson/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                {/* <a href="" target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a> */}
                <a href="https://www.instagram.com/mi.rodeilculo/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                {/* <a href="" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a> */}
                </div>
            </div>
            <div className="img--creds--container">
                <img src={supermimi} alt="supermimi" className="supermimi--img" />
                {/* <p className="supermimi--creds">made with <span className="italic">Kawaii Superhero Avatar Maker</span><br/>
                <a href="https://play.google.com/store/apps/dev?id=7131101731737554083" target="_blank" rel="noreferrer">KawaiiGames.net</a></p> */}
            </div>
        </div>
    )
}
