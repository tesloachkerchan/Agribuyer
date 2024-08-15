import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../../assets/img/one.jpg';
import img2 from '../../assets/img/img2.jpg';
import img3 from '../../assets/img/three.jpg';
import img4 from '../../assets/img/four.jpg';
import img5 from '../../assets/img/img5.jpg'
import '../mark/marquee.css';

function App() {
  return (
    <div className="App bg-icon">
      <div className="title">
        <h1>Our Partners</h1>
      </div>

      <div className='bg-icon'>
        <Marquee direction="right" speed={100} delay={3} gradient={false}>
          <div className="image_wrapper">
            <img src={img1} alt="Technology Partner 1" />
          </div>
          <div className="image_wrapper">
            <img src={img2} alt="Technology Partner 2" />
          </div>
          <div className="image_wrapper">
            <img src={img3} alt="Technology Partner 3" />
          </div>
          <div className="image_wrapper">
            <img src={img4} alt="Technology Partner 4" />
          </div>
          <div className="image_wrapper">
            <img src={img5} alt="Technology Partner 4" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default App;
