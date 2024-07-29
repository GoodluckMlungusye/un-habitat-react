import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonials from '../data/testimonials';

function Testimonials() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

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
