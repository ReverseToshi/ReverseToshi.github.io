import { useState } from "react";
import "./Nav.css"

function Nav({name}){
    const [open, setOpen] = useState(false);
    return (<div id="nav-bar">
            <div className={"left"}>
                <h1 style={{fontWeight:"bold"}}>{name}</h1>
            </div>
            <ul className={open ? "nav-links active" : "nav-links"}>
                <li>About</li>
                <li>Projects</li>
                <li>Education</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
            <div id="menu-icon" onClick={() => setOpen(!open)}>
                <button style={{height:"auto"}}>☰</button>
            </div>
        </div>
    )
}

export default Nav;