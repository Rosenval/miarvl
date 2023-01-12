import React from "react"
import mimi42 from "../imgs/mimi42.jpeg"

export default function Contact() {
    return(
        <div className="contact--and--img--container">
            <div className="contact--text">
                <p>Reach out to me!</p>
                <h2>@mia.rvl97@gmail.com</h2>
            </div>
            <img src={mimi42} alt="Mimi42" className="mimi42--img" />
        </div>
    )
}