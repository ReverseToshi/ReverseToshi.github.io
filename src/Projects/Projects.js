import React from 'react';
import Card from '../Home/Highlights/Card';
import Nav from './Nav';
import './projects.css';
import { useEffect, useState } from 'react';

function Projects(){
    const [projectsList, setProjectsList] = useState([]);
    
        useEffect(() => {
            fetch("./Projects.json")
            .then((res) => res.json())
            .then((data) => {
                // Render all projects on the projects page.
                setProjectsList(Array.isArray(data) ? data : []);
            })
            .catch((err) => console.error("Error loading JSON:", err));
        }, []);
    return (
        <div>
            <Nav name={"Dwij Shah"} />
            <div id='highlights-content'>
                <ul>
                    {projectsList.map((item, index) => (
                    <li key={`${item.title || 'project'}-${index}`}>
                        <Card 
                            index={index}
                            title={item.title || 'Untitled Project'} 
                            description={item.description || 'No description provided.'} 
                            thumbnail={item.thumbnail || './thumbnails/CPU.png'} 
                            techStack={item.tech} 
                            link={item.url || '#'} 
                            projectType={item.type || 'Project'}
                        />
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default Projects;