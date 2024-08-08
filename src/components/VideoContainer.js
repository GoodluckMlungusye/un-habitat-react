import React from 'react';

const VideoContainer = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline>
        <source src="/assets/videos/hero/h1.mp4" type="video/mp4" />
      </video>

      <div className="video-content">
        <a href="link">Explore our courses</a>
        <a href="https://learn.unhabitat.org/login/signup.php">Register for free</a>
      </div>
    </div>
  );
};

export default VideoContainer;
