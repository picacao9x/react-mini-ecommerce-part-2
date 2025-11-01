import React, { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../data/products.json";
import Pagination from "../components/Pagination";

export default function Category() {
  const { categoryName } = useParams();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;


  const filtered = useMemo(() => {
    let result = products.filter(
      (p) => p.category.toLowerCase() === categoryName.toLowerCase()
    );

    if (search.trim() !== "") {
      result = result.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (sort === "price-asc") result = [...result].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") result = [...result].sort((a, b) => b.price - a.price);

    return result;
  }, [categoryName, search, sort]);

  return (
    <div className="container">
      <div style={{ marginBottom: "1rem" }}>
        <Link to="/products">← Back to all products</Link>
      </div>

      <h2>Category: {categoryName}</h2>

      {/* Bộ lọc */}
      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ flex: 1, padding: "0.3rem 0.5rem" }}
        />
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Sort by</option>
          <option value="price-asc">Price ↑</option>
          <option value="price-desc">Price ↓</option>
        </select>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="grid">
        {filtered.slice((currentPage - 1) * itemsPerPage, (currentPage - 1) * itemsPerPage + itemsPerPage).map((p) => (
          <Link
            key={p.id}
            to={`/product/${p.id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="card">
              <div>
                <img
                  src={p.image}
                  alt={p.name}
                  style={{ width: "100%", height: "auto" }}
                />
                <h3>{p.name}</h3>
                <p>{p.category}</p>
                <strong className="price">${p.price}</strong>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  alert(`Add ${p.name} to cart`);
                }}
                className="btn"
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && <p>No products found.</p>}
      <Pagination
        currentPage={currentPage}
        totalPages={Math.max(1, Math.ceil(filtered.length / itemsPerPage))}
        onPageChange={(p) => setCurrentPage(p)}
      />
    </div>
  );
}