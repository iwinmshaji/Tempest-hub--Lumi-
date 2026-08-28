import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((game) => game.id !== id);

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="games-page">
      <div className="games-header">
        <h2>Favorite Games</h2>
        <p>Your saved favorite games.</p>
      </div>

      {favorites.length === 0 ? (
        <div className="empty-favorites">
          <h3>No favorite games yet</h3>
          <p>Go to the Games page and add some games to your favorites.</p>
          <Link to="/games" className="hero-button">
            Explore Games
          </Link>
        </div>
      ) : (
        <div className="games-grid">
          {favorites.map((game) => (
            <div className="game-card" key={game.id}>
              <img
                src={game.background_image}
                alt={game.name}
              />

              <div className="game-info">
                <h3>{game.name}</h3>

                <p>
                  {game.genres?.map((genre) => genre.name).join(", ") ||
                    "No genre available"}
                </p>

                <span>
                  Rating: {game.rating || "N/A"}
                </span>

                <div className="game-actions">
                  <Link to={`/games/${game.id}`}>
                    View Details
                  </Link>

                  <button onClick={() => removeFavorite(game.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;