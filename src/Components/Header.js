import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <h1>Olympics Medals</h1>
      <p>Name: Punnam Sai Ganesh</p>
      <div className='HeaderEmail'>
      <p>Email:</p>
      <a id='HeaderEmailLink' href="mailto:punnamganesh752@gmail.com" className="email-link"> Punnamganesh752@gmail.com</a>
      </div>
      <p>Contact: 9542455696</p>
    </div>
  );
};

export default Header;
