import React from "react";
import "./portfolio.css";
/* import IMG1 from "../../assets/brights-lite.png";
import IMG2 from "../../assets/blog.png";
import IMG3 from "../../assets/calculator.png";
import IMG4 from "../../assets/brochure.png";
import IMG5 from "../../assets/Portfolio3.png";
import IMG6 from "../../assets/Portfolio4.png"; */

const data = [
  {
    id: 1,
    //image: #,
    title: "AudioGPT",
    github: "#",
    demo: "#",
    brief:
      "#",
  },
  {
    id: 2,
    //image: ,
    title: "Sports Blog",
    github: "#",
    demo: "#",
    brief: "#",
  },
  {
    id: 3,
    title: "AutoResponder",
    github: "#",
    demo: "#",
    brief:
      "#",
  },
  
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, brief }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={brief} className="btn">
                  Project Brief
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;