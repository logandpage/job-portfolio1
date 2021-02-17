import React from 'react';

// images for Footer
import githubImage from "../../assets/png/github.png"
import gmailImage from "../../assets/png/gmail.png"
import linkedinImage from "../../assets/png/linkedIn.png"

function Footer() {

    return (
        <footer>
            <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <img class="footerImage" id="github" src={githubImage} alt="github" />
            </a>
            <a href="https://www.google.com/gmail/about/" target="_blank" rel="noopener noreferrer">
                <img class="footerImage" id="gmail" src={gmailImage} alt="gmail"/>
            </a>
            <a href="www.linkedin.com/in/logan-page-49b8661b2" target="_blank" class="footerImage" rel="noopener noreferrer">
                <img class="footerImage" id="linkedin" src={linkedinImage} alt="linkedIn"/>
            </a>
            </div>
        </footer>
    )
}

export default Footer