import "./Highlights.css";
import React, { useEffect, useState } from "react";
import Card from "./Card.js";
import {Link} from "react-router-dom";

function Highlights() {
    const [highlightsList, setHighlightsList] = useState([]);

    useEffect(() => {
        fetch("./Projects.json")
        .then((res) => res.json())
        .then((data) => {
            // Filter highlights
            const highlights = data.filter((item) => item.highlight === true);
            setHighlightsList(highlights);
        })
        .catch((err) => console.error("Error loading JSON:", err));
    }, []);
    return (
        <section id="highlights-section">
        <h1>Highlights</h1>
        <div id="highlights-content">
            {/* <p style={{textAlign:"center", fontSize:"2rem"}}>Some webs I've woven</p> */}
            <ul>
                {highlightsList.map((item, index) => (
                    <li>
                        <Card 
                            index={index}
                            title={item.title} 
                            description={item.description} 
                            thumbnail={item.thumbnail} 
                            techStack={item.tech} 
                            link={item.url} 
                            projectType={item.type}
                        />
                    </li>
                ))}
            </ul>
            <p id="view-link"><Link to="/projects">View all projects↗</Link></p>
        </div>
        </section>
    );
}

export default Highlights;