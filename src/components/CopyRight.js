import React from 'react';

const Copyright = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright">
      <p>&copy;<span id="copyright">{currentYear} UN-Habitat Learn. All rights reserved. Designed by Amani Minja Jackson.</span></p>
    </div>
  );
};

export default Copyright;
