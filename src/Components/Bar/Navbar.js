import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="image">
      <Link to="/home"><img src="logo1.png" alt="Logo" className="logo" /></Link>
      </div>  
      <div className="search-container"> 
      <form className="search-form">
        <input type="text" placeholder="Search.." className="search-box" />
        <button type="submit" className="search-button"><AiOutlineSearch/> </button>
      </form>        
      </div>
      <div className="profile">
        <Link to="/profile"><img src="profile.jpg" alt="profile" className="profile" /></Link>
      </div>    
    </nav>

  );
}

export default Navbar;
