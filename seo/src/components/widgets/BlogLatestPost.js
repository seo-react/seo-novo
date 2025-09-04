// src/widgets/BlogLatestPost.js
import { useEffect, useState } from 'react';
import Link from 'next/link';

const BlogLatestPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          'https://cms.seorocket.com.br/wp-json/wp/v2/posts?_embed&per_page=3'
        );
        const data = await res.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar posts recentes:', error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="widget mb-50">
        <h4 className="widget-title">Recent Posts</h4>
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="widget mb-50">
      <h4 className="widget-title">Recent Posts</h4>
      <ul className="recent-posts-list">
        {posts.map((post) => {
          const imgUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/assets/img/blog/default.jpg';
          const date = new Date(post.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          });

          return (
            <li key={post.id}>
              <div className="post-img">
                <Link href={`/blog/${post.slug}`}>
                  <img src={imgUrl} alt={post.title.rendered} width="80" height="60" />
                </Link>
              </div>
              <div className="post-content">
                <h5>
                  <Link href={`/blog/${post.slug}`}>{post.title.rendered}</Link>
                </h5>
                <span>{date}</span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogLatestPost;