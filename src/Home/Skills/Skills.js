import "./Skills.css";

function Skills() {
    return (
        <section id="skills-section">
            <div id="skills-content">
                <h2>Skills</h2>
                <section id="skills-grid">
                    <div className="category">
                        <h3>Programming Languages</h3>
                        <ul>
                            <li><img src="./assets/javascript.png" alt="JavaScript" /></li>
                            <li><img src="./assets/python.png" alt="Python" /></li>
                            <li><img src="./assets/java.png" alt="Java" /></li>
                            <li><img src="./assets/cpp.svg" alt="C++" /></li>
                            <li><img src="./assets/c-sharp.svg" alt="C#" /></li>
                        </ul>
                    </div>
                    <div className="category">
                        <h3>Frameworks & Libraries</h3>
                        <ul>
                            <li><img src="./assets/react.svg" alt="React.js" /></li>
                            <li><img src="./assets/Spring_Boot.svg" alt="Spring Boot" /></li>
                            <li><img src="./assets/numpy.svg" alt="NumPy" /></li>
                            <li><img src="./assets/pandas.svg" alt="Pandas" /></li>
                            <li><img src="./assets/sklearn.svg" alt="Scikit-learn" /></li>
                        </ul>
                    </div>
                    <div className="category">
                        <h3>Databases</h3>
                        <ul>
                            <li><img src="./assets/mysql.svg" alt="MySQL" /></li>
                            <li><img src="./assets/mongodb.svg" alt="MongoDB" /></li>
                            <li><img src="./assets/SQL.svg" alt="SQL" /></li>
                            <li><img src="./assets/sqlite.svg" alt="SQLite" /></li>
                        </ul>
                    </div>
                    <div className="category">
                        <h3>Tools & Platforms</h3>
                        <ul>
                            <li><img src="./assets/github-mark-white.png" alt="GitHub" /></li>
                            <li><img src="./assets/docker.png" alt="Docker" /></li>
                            <li><img src="./assets/bash.svg" alt="Bash" /></li>
                            <li><img src="./assets/version_control.png" alt="Version Control" /></li>
                        </ul>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default Skills; 