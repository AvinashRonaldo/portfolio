import React from 'react';
import './about.css';
import profile_picture from '../../assets/Avinash.jpeg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={profile_picture} alt="About Avinash image" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>
								2 Year 2 Months + <br /> Developer Experience
							</small>
						</article>
						<article className="about__card">
							<FiUsers className="about__icon" />
							<h5>Education</h5>
							<small>B.Tech Computer Science Engineering</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>
								3+ Completed
								<br />
								and Counting
							</small>
						</article>
					</div>
					<p>
						As a dedicated software developer with two years of experience in
						the FinTech and Cloud Security industries, I bring a robust skill
						set and a passion for building scalable, secure, and efficient
						applications. My expertise lies in back-end development, leveraging
						technologies such as Node.js and Express.js, alongside Go and Gin
						frameworks, to deliver high-performance solutions.
					</p>
					<p>
						I am adept at working with relational databases, particularly using
						TypeORM with MySQL, and possess practical experience with NoSQL
						databases like MongoDB and in-memory data structures with Redis. My
						diverse technical background and industry-specific knowledge enable
						me to tackle complex challenges and contribute to innovative
						projects effectively.If you're looking for a developer who's
						passionate about web application development.I'd love to connect and
						collaborate with you.
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
