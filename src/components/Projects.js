import React from "react"

export default function Projects(props) {
    return (
        <div id="projects" className="projects">
            <img src={`../../public-imgs/${props.item.img}`} alt={props.item.alt} className="project--img--size" />
            <p className="project--name uppercase bold">{props.item.title}</p>
            <p className="project--description">{props.item.description}</p>
            <button className="preview--button">preview</button> <button className="github--button">github</button>
        </div>
    )
}