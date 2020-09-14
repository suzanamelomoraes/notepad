import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <h1>Notepad</h1>
      <p>
        <Link to={'/'}>Home</Link>
      </p>
    </div>
  );
};

export default Header;
