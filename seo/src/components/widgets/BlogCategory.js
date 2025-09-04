// src/widgets/BlogCategory.js
import { useEffect, useState } from 'react';
import Link from 'next/link';

const BlogCategory = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('https://cms.seorocket.com.br/wp-json/wp/v2/categories?per_page=10');
        const data = await res.json();
        // Filtra a categoria "Sem categoria" (geralmente ID 1)
        const filtered = data.filter(cat => cat.id !== 1);
        setCategories(filtered);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar categorias:', error);
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="widget mb-50">
        <h4 className="widget-title">Categories</h4>
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="widget mb-50">
      <h4 className="widget-title">Categories</h4>
      <ul className="category-list">
        {categories.map((cat) => (
          <li key={cat.id}>
            <Link href={`/blog?category=${cat.slug}`}>
              {cat.name} <span>({cat.count})</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogCategory;