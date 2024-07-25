import React from 'react'

function Social() {
  return (
    <div className="social">
    <div className="newsletter">
        <div className="newsletter-content">
            <span>newsletter</span>
            <span>Receive news and updates in your inbox</span>
            <button>Subscribe to our newsletter</button>
        </div>
        <div className="block"></div>
        <div className="media">
            <h1>Let's keep in touch</h1>
            <div className="icons">
                <a href="https://www.facebook.com/UNHABITAT/"><img src="/assets/icons/facebook.png" alt="fb"/></a>
                <a href="https://linkedin.com/company/un-habitat-united-nation-human-settlements-programme-"><img src="/assets/icons/linkedin.png" alt="in"/></a>
                <a href="https://twitter.com/UNHABITAT"><img src="/assets/icons/x.png" alt="x"/></a>
            </div>
        </div>
    </div>
    <div className="mobile">
        <div className="owner">
            <span>Download MOODLE Mobile APP</span>
        </div>
        <div className="mobile-desc"><span>Access learning at a touch of a button</span></div>
        <div className="mobile-block">
            <img src="/assets/images/extras/google.png" alt="google"/>
            <img src="/assets/images/extras/apple.png" alt="apple"/>
        </div>
    </div>
</div>
  )
}

export default Social