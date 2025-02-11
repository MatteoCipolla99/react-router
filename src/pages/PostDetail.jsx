import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${id}`)
      .then((response) => {
        setPost(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore nel caricamento del post:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="container page-container">Caricamento...</div>;
  }

  if (!post) {
    return <div className="container page-container">Post non trovato</div>;
  }

  return (
    <div className="container page-container">
      <div className="post-detail">
        <img src={post.image} alt={post.title} className="post-detail-image" />
        <h1 className="page-title">{post.title}</h1>
        <div className="post-detail-content">
          <p>{post.content}</p>
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
    </div>
  );
}
