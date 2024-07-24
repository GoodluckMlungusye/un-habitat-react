import React from 'react';

const VideoContainer = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline>
        <source src="/assets/videos/hero/h1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="video-content">
        <a href="link">Explore our courses</a>
        <a href="link">Register</a>
      </div>
    </div>
  );
};

export default VideoContainer;
