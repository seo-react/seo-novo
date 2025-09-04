// src/widgets/BlogTags.js
import { useEffect, useState } from 'react';
import Link from 'next/link';

const BlogTags = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const res = await fetch('https://cms.seorocket.com.br/wp-json/wp/v2/tags?per_page=20');
        const data = await res.json();
        setTags(data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar tags:', error);
        setLoading(false);
      }
    };
    fetchTags();
  }, []);

  if (loading) {
    return (
      <div className="widget mb-50">
        <h4 className="widget-title">Tags</h4>
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="widget mb-50">
      <h4 className="widget-title">Tags</h4>
      <div className="tagcloud">
        {tags.map((tag) => (
          <Link key={tag.id} href={`/blog?tag=${tag.slug}`} className="tag-cloud-link">
            {tag.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogTags;