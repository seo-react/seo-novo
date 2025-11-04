import React, { useState } from "react";
import { useRouter } from "next/router";

const HeroInput = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="hero__input">
        <i className="fa-regular fa-magnifying-glass"></i>
        <input
          type="text"
          placeholder="Analyze any website or app"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="hero-btn-1 rr-btn-style-1">Search</button>
      </div>
    </form>
  );
};

export default HeroInput;
