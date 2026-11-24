
import React, { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const categories = [
  "All",
  "Electronics",
  "Fashion",
  "Home",
  "Services",
  "Food",
  "Other",
];

const products = [
  {
    id: 1,
    name: "Smart Electronics",
    category: "Electronics",
    description: "Discover modern electronic products.",
    icon: "📱",
  },
  {
    id: 2,
    name: "Fashion & Clothing",
    category: "Fashion",
    description: "Explore clothing and accessories.",
    icon: "👕",
  },
  {
    id: 3,
    name: "Home & Living",
    category: "Home",
    description: "Products for everyday living.",
    icon: "🏠",
  },
  {
    id: 4,
    name: "Professional Services",
    category: "Services",
    description: "Find services from businesses worldwide.",
    icon: "💼",
  },
  {
    id: 5,
    name: "Food & Grocery",
    category: "Food",
    description: "Explore food and grocery businesses.",
    icon: "🛒",
  },
  {
    id: 6,
    name: "Other Products",
    category: "Other",
    description: "Discover more products and opportunities.",
    icon: "🌍",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [language, setLanguage] = useState("EN");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <main className="marketplace">

      <header className="header">
        <a className="logo" href="#">
          <span className="logo-icon">π</span>
          <span>Global Pi Marketplace</span>
        </a>

        <nav className="navigation">
          <a href="#home">Home</a>
          <a href="#categories">Categories</a>
          <a href="#about">About</a>
        </nav>

        <select
          className="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          aria-label="Select language"
        >
          <option value="EN">English</option>
          <option value="FA">فارسی</option>
          <option value="PS">پښتو</option>
          <option value="ZH">中文</option>
        </select>
      </header>

      <section className="hero" id="home">
        <div className="hero-content">
          <span className="hero-label">
            GLOBAL COMMERCE • PI ECOSYSTEM
          </span>

          <h1>
            Discover a World of
            <span> Opportunities</span>
          </h1>

          <p>
            Explore products, services and businesses
            from around the world in one marketplace.
          </p>

          <div className="search-box">
            <input
              type="search"
              placeholder="Search products, services..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="button">Search</button>
          </div>

          <p className="hero-note">
            A marketplace designed for everyone.
          </p>
        </div>

        <div className="hero-symbol">π</div>
      </section>

      <section className="categories-section" id="categories">
        <div className="section-heading">
          <div>
            <span className="eyebrow">EXPLORE</span>
            <h2>Marketplace Categories</h2>
            <p>Find what you need from different categories.</p>
          </div>
        </div>

        <div className="category-filters">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              className={
                category === item ? "filter active" : "filter"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-icon">
                {product.icon}
              </div>

              <h3>{product.name}</h3>

              <p>{product.description}</p>

              <span className="product-category">
                {product.category}
              </span>
            </article>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="empty-state">
            <span>🔎</span>
            <h3>No results found</h3>
            <p>Try another search or category.</p>
          </div>
        )}
      </section>

      <section className="about-section" id="about">
        <span className="eyebrow">OUR VISION</span>
        <h2>Commerce Without Borders</h2>
        <p>
          Global Pi Marketplace aims to connect buyers,
          sellers and service providers worldwide.
          Pi payment will be an important option alongside
          other practical marketplace features.
        </p>
      </section>

      <footer className="footer">
        <div className="footer-logo">
          <span>π</span> Global Pi Marketplace
        </div>
        <p>
          A global marketplace for products and services.
        </p>
        <small>
          © 2026 Global Pi Marketplace. All rights reserved.
        </small>
      </footer>

    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
