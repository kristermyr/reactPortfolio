import React from 'react';
import project1 from './assets/project1.jpg'

const styles ={
  content: {
  borderRadius:100,
  width:20,
  },
  image:{
    height:200,
    width:200,
  }
};
export default function Portfolio() {
  return (
    <div className='container'>
    <div >
      <div className="card" styles={styles.content} >
  
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <img src={project1}  alt="project1" styles={styles.image} ></img>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="https://www.linkedin.com/feed/" className="btn btn-primary">Go somewhere</a>
  </div>
  
</div>
    </div>
    </div>
  );
}