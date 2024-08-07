import { NavLink } from 'react-router-dom';
import React from 'react';
import navigationLinks from '../data/navigation_links';
import footerLinks from '../data/footer_links';

const Footer = () => {

  const navLinks = navigationLinks.slice(1).map((link) => (
    <span key={link.to}>{link.isInnerLink?<NavLink to={link.to}>{link.label}</NavLink> : <a href={link.to}>{link.label}</a>}</span>
  ));

  const footLinks = footerLinks.map((footerLink) => (
      <div key={footerLink.label}>
        <a href={footerLink.link}>
          <img src={`/assets/icons/${footerLink.icon}`} alt={footerLink.label}/>
        </a>
    </div>
  ));

  return (
    <div className="footer">
      <div className="links">
        <div className="owner-logo">
            <img src="/assets/images/logo/un_habitat.png" alt="UN Habitat Logo" />
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
          {navLinks}
        </div>

        <div className="footer-newsletter">
          <span className="footer-title">Newsletter</span>
          <div className="news-wrapper">
            <input type="text" placeholder="Email Address" />
            <button>Subscribe</button>
          </div>
          <div className="social-wrapper">
            {footLinks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
