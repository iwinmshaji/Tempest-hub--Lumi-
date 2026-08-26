import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span>⚡</span>
        <h1>TempestHub</h1>
      </div>

      <nav>
        <Link className="active" to="/">Home</Link>
        <Link to="/games">Games</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}

export default Header;