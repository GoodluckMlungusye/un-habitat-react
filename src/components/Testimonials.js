import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonials from '../data/testimonials';
import settings from '../utils/sliderSettings';

function Testimonials() {

  return (
    <div className="slider-container">

    <div className="title">
        <span className="header">Testimonials</span>
        <p className="desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus accusamus rerum vero</p>
    </div>

      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-top">
                <p> <span>&ldquo;</span>{item.description} <span>&rdquo;</span> 
                </p>
            </div>
            <div className="card-bottom">
              <h3>{item.name}</h3>
              <span className="category">{item.position}</span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
