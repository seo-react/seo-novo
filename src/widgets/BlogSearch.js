// src/widgets/BlogSearch.js
import { useState } from 'react';
import Link from 'next/link';

const BlogSearch = () => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      window.location.href = `/blog?search=${encodeURIComponent(query)}`;
    }
  };

  return (
    <div className="widget mb-50">
      <h4 className="widget-title">Search</h4>
      <form onSubmit={handleSubmit}>
        <div className="search-form">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogSearch;