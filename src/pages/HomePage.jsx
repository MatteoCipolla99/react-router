import { useState, useEffect } from "react";
import axios from "axios";

export default function Homepage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="container page-container">
      <h2 className="page-title">Benvenuto nel nostro Blog!</h2>
      <p>Scopri gli ultimi articoli e curiosità.</p>
      <div className="posts-wrap">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <img src={post.image} alt={post.title} />
            <div className="post-content">
              <h3 className="post-title">{post.title}</h3>
              <p className="post-description">{post.content}</p>
              <div className="tags">
                {Array.isArray(post.tags) ? (
                  post.tags.map((tag, index) => (
                    <div key={index} className="tag">
                      {tag}
                    </div>
                  ))
                ) : (
                  <div className="tag">{post.tags}</div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
