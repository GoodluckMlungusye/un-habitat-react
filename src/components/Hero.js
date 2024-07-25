import React from 'react'
import Counter from './Counter'

function Hero() {
  return (
    <div className="hero-info">
    <span>Engage with our community of learners</span>
    <div className="counter-wrapper">
        <div className="counter">
           <Counter number={41} title="Courses" />
        </div>
        <div className="vertical"></div>
        <div className="counter">
           <Counter number={12223} title="Users" />
        </div>
    </div>
</div>
  )
}

export default Hero