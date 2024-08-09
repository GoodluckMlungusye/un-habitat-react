import React from 'react';
import webinars from '../data/webinars';
import { ASSET_URL } from '../constants/links';

function HomeWebinars() {
  
  const webinarImage = webinars.image;
  const webinarContent = webinars.blocks.map((webinar, index) => (
    <div className="webinar-desc" key={index}>
        <div className="date-block">
            <span>{webinar.date}</span>{webinar.month}
        </div>
        <div className="webinar-info">
            <div><span>{webinar.description}</span></div>
            <div className="location-block">
            
                    <div className="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span>{webinar.time}</span>
                    </div>
            
                    <div className="svg-wrapper">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        <span>{webinar.location}</span>
                    </div>
            </div>
        </div>
    </div>
  ));

  return (
    <div className="webinars">
    <div className="portfolio-header"><span>Upcoming Webinars</span></div>
    <div className="webinar-wrapper">
        <div className="webinar-img"><img src={`${ASSET_URL}/extras/${webinarImage}`} alt=""/></div>
        <div className="webinar-content">
            {webinarContent}
        </div>
    </div>
</div>
  )
}

export default HomeWebinars