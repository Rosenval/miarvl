import React from "react"
import mimi42 from "../imgs/mimi42.jpeg"

export default function Contact() {
    return(
        <div className="contact--and--img--container">
            <div className="contact--elements">
                <div className="contact--text">
                    <p className="contact--reach">Reach out to me!</p>
                    <h2 className="contact--mail">mia.rvl97@gmail.com</h2>
                </div>
                <img src={mimi42} alt="Mimi42" className="mimi42--img" />
            </div>
        </div>
    )
}