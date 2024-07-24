import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="links">
        <div className="owner-info">
          <div className="wrap">
            <img src="/assets/images/logo/un_habitat.png" alt="UN Habitat Logo" />
            <span className="footer-title">uN-habitat</span>
          </div>
          <div className="wrap-desc">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus accusamus rerum vero laboriosam
              voluptate sequi, at soluta quis numquam dolore! Doloribus accusamus rerum vero laboriosam
            </p>
          </div>
        </div>

        <div className="office">
          <span className="footer-title">office</span>
          <span>United Nations Human Settlements Programme (UN-Habitat)</span>
          <span>P.O Box 30030-00100</span>
          <span>
            <a href="mailto:unhabitat@example.org">unhabitat-learn@un.org</a>
          </span>
          <span>Nairobi, KENYA</span>
        </div>

        <div className="footer-nav-links">
          <span className="footer-title">Important Links</span>
          <span><a href="link">Home</a></span>
          <span><a href="link">About</a></span>
          <span><a href="course.html">Courses</a></span>
          <span><a href="link">Webinars</a></span>
          <span><a href="faq.html">FAQ</a></span>
        </div>

        <div className="footer-newsletter">
          <span className="footer-title">Newsletter</span>
          <div className="news-wrapper">
            <input type="text" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
          <div className="social-wrapper">
            <div>
              <a href="https://www.facebook.com/UNHABITAT/">
                <img src="/assets/icons/facebook.png" alt="Facebook" />
              </a>
            </div>
            <div>
              <a href="https://linkedin.com/company/un-habitat-united-nation-human-settlements-programme-">
                <img src="/assets/icons/linkedin.png" alt="LinkedIn" />
              </a>
            </div>
            <div>
              <a href="https://twitter.com/UNHABITAT">
                <img src="/assets/icons/x.png" alt="Twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
