import React from 'react';
import resume1 from './assets/resume.jpg'
import resume2 from './assets/KristerMyrlonnResume.pdf'
import html from './assets/html.png'
import css from './assets/css.png'
import javascript from './assets/javascript.png'
import github from './assets/github.png'
import react from './assets/react.png'
import node from './assets/node.png'
import sql from './assets/sql.png'
const style = {
  img: {
    display: "flex",
    justifyContent: "space-inbetween",
    width: "18rem",
  },
};
export default function Resume() {
  return (
    <div className="container">

    <h1>Skills</h1>

    <div class="container padding">
  <div class="row col-4">
    <div class="col-4">
    <img src={html} className="programming" alt="project pic"></img>
    </div>
    <div class="col-4">
    <img src={css} className="programming" alt="project pic"></img>
    </div>
    <div class="col-4">
    <img src={javascript} className="programming" alt="project pic"></img>
    </div>
    <div class="col-4">
    <img src={github} className="programming" alt="project pic"></img>
    </div>
    <div class="col-4">
    <img src={react} className="programming" alt="project pic"></img>
    </div>
    <div class="col-4">
    <img src={node} className="programming" alt="project pic"></img>
    </div>
    <div class="col-4">
    <img src={sql} className="programming" alt="project pic"></img>
    </div>
    
   
  </div>
</div>
      <div className="row">
        <div class="card" style={style.img}>
          <img src={resume1} class="card-img-top" alt="project pic"></img>
          <div class="card-body">
            <a href={resume2}  target="_blank" class="btn btn-primary">Download resume!</a>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}