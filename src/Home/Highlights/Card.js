import "./Card.css";

function cardClass(index){
    const row = Math.floor(index/2);
    const col = index%2;
    if ((row+col)%2 === 0){
        return "even-card";
    } else {
        return "odd-card";
    }
}

function Card({index ,title, description, link, thumbnail, techStack, projectType}) {
    const techArray = Array.isArray(techStack) ? techStack : (typeof techStack === 'string' ? techStack.split(',').map(t => t.trim()) : []);

    return (
        <div className={"card-container " + cardClass(index)}>
            <img src={thumbnail} alt={`${title} thumbnail`} className="card-thumbnail"/>
            <div className="card-content">
                <p className="application-type">{projectType}</p>
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <div className="card-techstack">
                    {techArray.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                    ))}
                </div>
                <a href={link} target="_blank" rel="noreferrer" className="card-link">View Project →</a>
            </div>
        </div>
    );
}

export default Card;