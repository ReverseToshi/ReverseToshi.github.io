import { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav({name, scrollToAbout, scrollToProjects, scrollToEducation, scrollToSkills, scrollToContacts}) {
    const [open, setOpen] = useState(false);
    return (<div id="nav-bar">
            <div className={"left"}>
                <h1 style={{fontWeight:"bold"}}>{name}</h1>
            </div>
            <div id="go-back">
                <h2 style={{fontWeight:"bold"}}>
                <Link to="/">Go Back</Link>
                </h2>
            </div>
        </div>
    )
}

export default Nav;