import React from "react";

function Footer () {
    const year = new Date().getFullYear();
    return (
        <footer>    
            <div className="learn-more">
                <h3 className="footer-sentence">It's difficult to summarize the life and accomplishments of a person in a paragraph. To learn more:</h3>
                <ul>
                    <li><a href= "https://www.theartstory.org/" target="_blank" rel="noopener noreferrer">The Art Story</a></li>
                    <li><a href= "https://arthistoryproject.com/" target="_blank" rel="noopener noreferrer">Art History Project</a></li>
                    <li><a href= "https://www.khanacademy.org/humanities/art-history#approaches-to-art-history" target="_blank" rel="noopener noreferrer">Khan Academy</a></li>
                </ul>
                <p>Copyright Angelo Otero {year}</p>
                <p>All images used are under the public domain in the U.S.</p>
            </div>
        </footer>
    )
}

export default Footer;