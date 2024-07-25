import React from 'react'
import Gallery from './FeaturedCourse'

function Portfolio() {
  return (
    <div className="portfolio">
        <div className="mainContainer">
            <div className="portfolio-header"><span>Featured Courses</span></div>
            <Gallery/>
        </div>
    </div>
  )
}

export default Portfolio