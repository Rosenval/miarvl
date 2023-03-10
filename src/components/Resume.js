import React from "react"

export default function Resume(props) {
    console.log(props)
    return(
        <div className="section--and--p--container">
            <div className="section--and--separator">
                <div className="resume--section--container">
                    <div className="resume--section uppercase">{props.item.section}</div>
                </div>
            </div>
            
            <div className="p--container">
                <div className="p--first--container">
                    {props.item.date && <p className="resume--date bold">{props.item.date}</p>}
                    <p className="resume--p">{props.item.content}</p>
                </div>
                <div className="p--second--container">
                    {props.item.date2 && <p className="resume--date bold">{props.item.date2}</p>}
                    {props.item.content2 && <p className="resume--p">{props.item.content2}</p>}
                </div>
            </div>
        </div>
    )
}