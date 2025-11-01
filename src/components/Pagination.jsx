import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null;

  const pages = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <nav style={{ display: "flex", gap: 8, alignItems: "center", marginTop: 50 }}>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        style={{ padding: "0.4rem 0.6rem" }}
      >
        ◀
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          aria-current={p === currentPage ? "page" : undefined}
          style={{
            padding: "0.4rem 0.6rem",
            background: p === currentPage ? "#007bff" : "transparent",
            color: p === currentPage ? "#fff" : "inherit",
            border: "1px solid #ddd",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        style={{ padding: "0.4rem 0.6rem" }}
      >
        ▶
      </button>
    </nav>
  );
}
