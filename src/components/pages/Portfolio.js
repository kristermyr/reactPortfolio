import React from "react";
import marvel from "../src/assets/marvelDirectory.PNG";
const style = {
  img: {
    display: "flex",
    justifyContent: "space-inbetween",
    width: "18rem",
  },
};

export default function Portfolio() {
  return (
    <div className="container">
      <div className="row">
        <div class="card" style={style.img}>
          <img src={marvel} class="card-img-top" alt="project pic"></img>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="https://www.google.com/" class="btn btn-primary">Deployed site</a>
            <a href="https://www.google.com/" class="btn btn-primary">Github</a>
            
          </div>
        </div>
        <div class="card" style={style.img}>
          <img src={marvel} class="card-img-top" alt="project pic"></img>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="https://www.google.com/" class="btn btn-primary">Deployed site</a>
            <a href="https://www.google.com/" class="btn btn-primary">Github</a>
          </div>
        </div>
        <div class="card" style={style.img}>
          <img src={project1} class="card-img-top" alt="project pic"></img>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="https://www.google.com/" class="btn btn-primary">Deployed site</a>
            <a href="https://www.google.com/" class="btn btn-primary">Github</a>
          </div>
        </div>
        <div class="card" style={style.img}>
          <img src={project1} class="card-img-top" alt="project pic"></img>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="https://www.google.com/" class="btn btn-primary">Deployed site</a>
            <a href="https://www.google.com/" class="btn btn-primary">Github</a>
          </div>
        </div>
        <div class="card" style={style.img}>
          <img src={project1} class="card-img-top" alt="project pic"></img>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="https://www.google.com/" class="btn btn-primary">Deployed site</a>
            <a href="https://www.google.com/" class="btn btn-primary">Github</a>
          </div>
        </div>
        <div class="card" style={style.img}>
          <img src={project1} class="card-img-top" alt="project pic"></img>
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="https://www.google.com/" class="btn btn-primary">Deployed site</a>
            <a href="https://www.google.com/" class="btn btn-primary">Github</a>
            
          </div>
        </div>
       
        
      </div>
    </div>
  );
}
