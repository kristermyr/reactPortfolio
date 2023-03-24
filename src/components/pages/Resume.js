import React from 'react';
import resume1 from '../assets/resume.jpg'
import resume2 from '../assets/resume.pdf'
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