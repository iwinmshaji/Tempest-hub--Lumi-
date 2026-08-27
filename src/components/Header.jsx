import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <Link to="/">
          TempestHub
        </Link>
      </div>

      <nav>

        <Link to="/">
          Home
        </Link>

        <Link to="/games">
          Games
        </Link>

        <Link to="/favorites">
          Favorites
        </Link>

        <Link to="/add-game">
          Add Game
        </Link>

      </nav>

    </header>
  );
}

export default Header;