import './Footer.css';

function Footer({ name, github, linkedin, docker, leetcode }) {
    return (
        <footer>
            <div id="footer-content">
                <p style={{ color: "#ffffff" }}>{name}</p>
                <p style={{ fontSize: "medium" }}>Building the web, one project at a time.</p>
                <ul>
                    <li><a href={github} target='_blank' rel='noreferrer'>Github</a></li>
                    <li><a href={linkedin} target='_blank' rel='noreferrer'>LinkedIn</a></li>
                    <li><a href={docker} target='_blank' rel='noreferrer'>DockerHub</a></li>
                    <li><a href={leetcode} target='_blank' rel='noreferrer'>LeetCode</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;