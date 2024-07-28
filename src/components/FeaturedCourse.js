import React, { useState, useEffect, useRef } from 'react';
import Isotope from 'isotope-layout';
import featuredCourseCategories from '../data/featured_course_categories';
import featuredCourses from '../data/featured_courses';

const Gallery = () => {
  const galleryRef = useRef(null);
  const $galleryContainer = useRef(null);
  const [activeValue, setActiveValue] = useState('*')

  useEffect(() => {
    // Initialize Isotope when component mounts
    $galleryContainer.current = new Isotope(galleryRef.current, {
      itemSelector: '.item',
      layoutMode: 'fitRows',
    });

    return () => {
      // Clean up Isotope instance when component unmounts
      $galleryContainer.current.destroy();
    };
  }, []);

  const handleFilter = (value, active) => {
    $galleryContainer.current.arrange({ filter: value });
    setActiveValue(active);
  };

  const buttonGroup = featuredCourseCategories.map((category) => (
    <button key={category.value} className={`button ${activeValue === category.value? "active": " "}`} onClick={() => handleFilter(`${category.value === "*"? "*" : `.${category.value}`}`, category.value)}>
        {category.label}
    </button>
  ));

  const galleryItems = featuredCourses.map((featuredCourse) => (
    <div key={featuredCourse.value} className={`item ${featuredCourse.value}`}>
        <div className="image">
            <img src={featuredCourse.image} alt={featuredCourse.value}/>
        </div>
        <div className="content">
            <h4>{featuredCourse.name}</h4>
            <p>
                {featuredCourse.description}
            </p>
            <div className="info">
                <span className="view-btn">view</span>
            </div>
        </div>
    </div>
  ));

  return (
    <>
      <div className="button-group">
        {buttonGroup}
      </div>


      <div ref={galleryRef} className="gallery">
        {galleryItems}
      </div>
    </>
  );
};

export default Gallery;
