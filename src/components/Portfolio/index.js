import React from 'react';
import Project from '../Project';

import img1 from '../../assets/book.jpg';
import img2 from '../../assets/holidayplanner.jpg';
import img3 from '../../assets/weather.jpeg';
import img4 from '../../assets/schedule.jpg';
import img5 from '../../assets/Run-Buddy.png';
import img6 from '../../assets/fof-home.png';


function Portfolio () {

  const projects = [
    {
      id: 6,
      name: 'Fortress of Fandom',
      liveUrl: 'https://immense-mesa-76865.herokuapp.com/',
      gitUrl: 'https://github.com/logandpage/fortress-of-fandom',
      style: {
        backgroundImage: "url( " + img6 + ")"
      }
    },
    {
      id: 1,
      name: 'Book Search',
      liveUrl: 'https://rocky-everglades-54421.herokuapp.com/',
      gitUrl: 'https://github.com/logandpage/book-engine-search',
      style: {
        backgroundImage: "url( " + img1 + ")"
      }
    },
    {
      id: 2,
      name: 'Holiday Planner',
      liveUrl: 'https://desolate-inlet-16467.herokuapp.com/',
      gitUrl: 'https://github.com/ThomasNguyen546/holiday-planner',
      style: {
        backgroundImage: "url( " + img2 + ")"
      }
    },
    {
      id: 3,
      name: 'Weather Dashboard',
      liveUrl: 'https://logandpage.github.io/wheather-city/',
      gitUrl: 'https://github.com/logandpage/wheather-city',
      style: {
        backgroundImage: "url( " + img3 + ")"
      }
    },
    {
      id: 4,
      name: 'Schedule',
      liveUrl: 'https://logandpage.github.io/schedule/',
      gitUrl: 'https://github.com/logandpage/schedule',
      style: {
        backgroundImage: "url( " + img4 + ")"
      }
    },
    {
      id: 5,
      name: 'Run Buddy',
      liveUrl: 'https://lernantino.github.io/run-buddy/',
      gitUrl: 'https://github.com/logandpage/run-buddy',
      style: {
        backgroundImage: "url( " + img5 + ")",
      }
    }
  ];


  return (
    <section id="project-container">
      <div className="section-title">
        <h2 id="project-header">Projects</h2>
      </div>
      <div id="project-grid">
        {projects.map(project => (
          <Project {...project}
          key={project.id}
          />
        ))}
      </div>
    </section>
  )
}

export default Portfolio;