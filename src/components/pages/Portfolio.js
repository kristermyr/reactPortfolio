import React from "react";
import homebros from "./assets/homebros.png"
import marvel from "./assets/marvelDirectory.PNG";
import didINeedThat from "./assets/didYouNeedThat.jpg"
import eCommerce from "./assets/eCommerce.png"
import project1 from "./assets/background.jpg"
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
              Marvel character lookup
            </p>
            <a href="https://akshatha2022.github.io/MarvelDirectory/" class="btn btn-primary">Deployed site</a>
            <a href="https://github.com/Akshatha2022/MarvelDirectory" class="btn btn-primary">Github</a>
            
          </div>
        </div>
        <div class="card" style={style.img}>
          <img src={didINeedThat} class="card-img-top" alt="project pic"></img>
          <div class="card-body">
            <p class="card-text">
              Did you really need that?
            </p>
            <a href="https://did-i-need-that.herokuapp.com/" class="btn btn-primary">Deployed site</a>
            <a href="https://github.com/llangerud/did-i-need-that" class="btn btn-primary">Github</a>
          </div>
        </div>
        <div class="card" style={style.img}>
          <img src={eCommerce} class="card-img-top" alt="project pic"></img>
          <div class="card-body">
            <p class="card-text">
            E-Commerce Back End application
            </p>
            <a href="https://github.com/kristermyr/E-commerce-Back-End" class="btn btn-primary">Deployed site</a>
            <a href="https://github.com/kristermyr/E-commerce-Back-End" class="btn btn-primary">Github</a>
          </div>
        </div>
        <div class="card" style={style.img}>
          <img src={homebros} class="card-img-top" alt="project pic"></img>
          <div class="card-body">
            <p class="card-text">
              HomeBros
            </p>
            <a href="https://arcane-savannah-38796.herokuapp.com/" class="btn btn-primary">Deployed site</a>
            <a href="https://github.com/kristermyr/home-bros" class="btn btn-primary">Github</a>
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
