import React, { useEffect } from "react"

export default function Nav() {

    const [toggleMenu, setToggleMenu] = React.useState(false);
    // const [firstToggle, setFirstToggle] = React.useState(false);
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);

    const toggleNav = () => {
        // if(firstToggle === false)
        //     setFirstToggle(!firstToggle)
        if(screenWidth < 840)
            setToggleMenu(!toggleMenu)
    }

    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', changeWidth)

        return() => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])

    return(
        <nav className="nav--container">
            <div className="nav--signature--container">

            {toggleMenu
            ? <button className="nav--close--btn" onClick={toggleNav}>&#10006;</button>
            : 
                <button className="nav--button" onClick={toggleNav}>
                    <div className="sandwich"></div>
                    <div className="sandwich"></div>
                    <div className="sandwich"></div>
                </button> 
            }


            {(toggleMenu || screenWidth > 840) && 
                <p className="inspired">inspired by<br/><span className="bold"><a href="https://www.marvel.com/" target="_blank" rel="noreferrer">marvel.com</a></span></p>
            }
                
            <h2 className="nav--signature uppercase">Miarvl</h2>
            </div>
            {/* {firstToggle ? toggleMenu ? 
                <div className="nav--ul--container">
                    <ul className="slide-in">
                        <li className="club--menu" onClick={toggleNav}><a href="#projects--container"> projects</a></li>
                        <li className="club--menu" onClick={toggleNav}><a href="#about--container">about</a></li>
                        <li className="club--menu" onClick={toggleNav}><a href="#resume--container">resume</a></li>
                        <li className="club--menu" onClick={toggleNav}><a href="#contact--container">contact</a></li>
                        <li className="inspired--small">inspired by<br/><span className="bold"><a href="https://www.marvel.com/" target="_blank" rel="noreferrer">marvel.com</a></span></li>
                    </ul>
                </div>
                :
                <div className="nav--ul--container">
                    <ul className="slide-out">
                        <li className="club--menu" onClick={toggleNav}><a href="#projects--container"> projects</a></li>
                        <li className="club--menu" onClick={toggleNav}><a href="#about--container">about</a></li>
                        <li className="club--menu" onClick={toggleNav}><a href="#resume--container">resume</a></li>
                        <li className="club--menu" onClick={toggleNav}><a href="#contact--container">contact</a></li>
                        <li className="inspired--small">inspired by<br/><span className="bold"><a href="https://www.marvel.com/" target="_blank" rel="noreferrer">marvel.com</a></span></li>
                    </ul>
                </div>
                :
                <div className="nav--ul--container">
                    <ul>
                        <li className="club--menu" onClick={toggleNav}><a href="#projects--container"> projects</a></li>
                        <li className="club--menu" onClick={toggleNav}><a href="#about--container">about</a></li>
                        <li className="club--menu" onClick={toggleNav}><a href="#resume--container">resume</a></li>
                        <li className="club--menu" onClick={toggleNav}><a href="#contact--container">contact</a></li>
                        <li className="inspired--small">inspired by<br/><span className="bold"><a href="https://www.marvel.com/" target="_blank" rel="noreferrer">marvel.com</a></span></li>
                    </ul>
                </div>
                
            } */(toggleMenu || screenWidth > 840) && 
            <div className="nav--ul--container">
            <ul>
                <li className="club--menu" onClick={toggleNav}><a href="#projects--container"> projects</a></li>
                <li className="club--menu" onClick={toggleNav}><a href="#about--container">about</a></li>
                <li className="club--menu" onClick={toggleNav}><a href="#resume--container">resume</a></li>
                <li className="club--menu" onClick={toggleNav}><a href="#contact--container">contact</a></li>
                <li className="inspired--small">inspired by<br/><span className="bold"><a href="https://www.marvel.com/" target="_blank" rel="noreferrer">marvel.com</a></span></li>
            </ul>
        </div>}
        </nav>
    )
}