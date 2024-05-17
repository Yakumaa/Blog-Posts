import React from 'react';
import placeholderImage from '../images/1.png';

const FeaturedPosts = () => {
  return (
    <section className="featured-posts">
      <h2>Featured Posts</h2>
      <div className="post-grid">

        <div className="post-card">
          <img src={placeholderImage} alt="Post Image"/>
          <h3>Post Title</h3>
          <p>Post excerpt goes here...</p>
          <a href="#">Read More</a>
        </div>

        <div className="post-card">
          <img src={placeholderImage} alt="Post Image"/>
          <h3>Post Title</h3>
          <p>Post excerpt goes here...</p>
          <a href="#">Read More</a>
        </div>
        <div className="post-card">
          <img src={placeholderImage} alt="Post Image"/>
          <h3>Post Title</h3>
          <p>Post excerpt goes here...</p>
          <a href="#">Read More</a>
        </div>
        <div className="post-card">
          <img src={placeholderImage} alt="Post Image"/>
          <h3>Post Title</h3>
          <p>Post excerpt goes here...</p>
          <a href="#">Read More</a>
        </div>
        <div className="post-card">
          <img src={placeholderImage} alt="Post Image"/>
          <h3>Post Title</h3>
          <p>Post excerpt goes here...</p>
          <a href="#">Read More</a>
        </div>
        <div className="post-card">
          <img src={placeholderImage} alt="Post Image"/>
          <h3>Post Title</h3>
          <p>Post excerpt goes here...</p>
          <a href="#">Read More</a>
        </div>
        <div className="post-card">
          <img src={placeholderImage} alt="Post Image"/>
          <h3>Post Title</h3>
          <p>Post excerpt goes here...</p>
          <a href="#">Read More</a>
        </div>
        <div className="post-card">
          <img src={placeholderImage} alt="Post Image"/>
          <h3>Post Title</h3>
          <p>Post excerpt goes here...</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;