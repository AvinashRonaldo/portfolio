import React from "react";
import "./about.css";
import profile_picture from "../../assets/Avinash.jpeg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

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
                1 Year 7 Months + <br /> Developer Experience
              </small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Education</h5>
              <small>
                B.Tech Computer Science Engineering
              </small>
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
            I'm a problem solver with a background in Computer Science.I am 
            a passionate web developer with a focus on developing various projects 
            that ensure the safety and security.
          </p>
          <p>
            In recent years, I've worked in the Cloud Security Industry in 
            Web Application Development. I thrive in a role
            where I can use my broad knowledge to break down complex problems
            and where the tasks require interaction between Design &
            Functionality.
          </p>
          <p>
            I've immersed myself in the learning web application development 
            using Node.js,which I've used to build robust and efficient web 
            applications.If you're looking for a developer who's passionate about 
            web application development.I'd love to connect and collaborate with you.
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