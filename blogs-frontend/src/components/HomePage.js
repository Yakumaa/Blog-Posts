import React from 'react';
import Header from './Header';
import Hero from './Hero';
import FeaturedPosts from './FeaturedPosts';
import Footer from './Footer';
// import DisplayBlogList from './DisplayBlogList';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedPosts />
      <Footer />
    </div>
  );
};

export default HomePage;