import './About.css';

function Intro({name, scrollToProjects}) {
    return (
        <section id="intro-section">
            <div className="intro-layout">
                <div className="intro-text">
                    <h1>Hi! I'm <span className='red'>{name}</span></h1>
                    <p>A <span className='red'>creative developer</span> building full-stack applications and exploring new technologies. This portfolio showcases my projects, skills, and experiences in the tech world.</p>
                    <button onClick={scrollToProjects}>See my work</button>
                </div>
                <div className="intro-image-wrapper">
                    <img src="./profile.png" alt={`${name} profile`} className="intro-profile" />
                </div>
            </div>
        </section>
    )
}

export default Intro;