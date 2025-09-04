// src/widgets/BlogSearch.js
import { useState } from 'react';

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
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
};

export default BlogSearch;