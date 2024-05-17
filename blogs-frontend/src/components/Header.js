import React from 'react';
import { Link } from 'react-router-dom';
// import DisplayBlogList from './DisplayBlogList';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">Blog Post Web App</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;