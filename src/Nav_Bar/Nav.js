import { useState } from "react";
import "./Nav.css";

function Nav({name, scrollToAbout, scrollToProjects, scrollToEducation, scrollToSkills, scrollToContacts}) {
    const [open, setOpen] = useState(false);
    return (<div id="nav-bar">
            <div className={"left"}>
                <h1 style={{fontWeight:"bold"}}>{name}</h1>
            </div>
            <ul className={open ? "nav-links active" : "nav-links"}>
                <li><button onClick={scrollToAbout}>About</button></li>
                <li><button onClick={scrollToProjects}>Projects</button></li>
                <li><button onClick={scrollToEducation}>Education</button></li>
                <li><button onClick={scrollToSkills}>Skills</button></li>
                <li><button onClick={scrollToContacts}>Contact</button></li>
            </ul>
            <div id="menu-icon" onClick={() => setOpen(!open)}>
                <button style={{height:"auto"}}>☰</button>
            </div>
        </div>
    )
}

export default Nav;