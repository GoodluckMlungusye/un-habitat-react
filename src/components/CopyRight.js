import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright">
      <p>&copy;<span id="copyright">{currentYear} United Nations Human Settlements Programme</span></p>
    </div>
  );
};

export default Copyright;
