import "./Education.css";
import Card from "./EducationCard.js";

function Education(){
    return (
        <div id="education">
            <div id="education-content">
                <h1>Education</h1>
                <ul>
                    <li>
                        <Card
                        instituteName="Nottingham Trent University"
                        degree="Bachelor of Science in Computer Science Artificial Intelligence"
                        period="2023 - 2026"
                        grade="Second Class First Division Class Honours (2:1)"
                        location="Nottingham, UK"/>
                    </li>
                    <li>
                        <Card
                        instituteName="Kendriya Vidyalaya O.N.G.C. Chandkheda"
                        degree="Senior Secondary Education (A-levels equivalent)"
                        period="2019 - 2021"
                        grade="92.6% (Physics 95, Chemistry 95, Mathematics 99, Computer Science 90, English 80)"
                        location="Chandkheda, India"/>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Education;