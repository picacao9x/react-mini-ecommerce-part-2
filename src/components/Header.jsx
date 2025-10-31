import { Link } from "react-router-dom";
import "../styles/app.css";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        {/* Logo */}
        <Link to="/" className="logo">
          🛍️ MyShop
        </Link>

        {/* Menu */}
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </div>
    </header>
  );
}
