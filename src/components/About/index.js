import React from "react";
import photoImage from '../../assets/me.JPG'

function About() {
    return (
        <section>
			<div class="page-container">
				<div>
					<h2>About Me</h2>
				</div>
				<div class="center">
            	    <img class="me" src={photoImage} width="350" height="250" alt="Me" />
				</div>
				<div>
					<p>
						Logan Page
					</p>
				</div>
			</div>	
		</section>
    );
}

export default About;