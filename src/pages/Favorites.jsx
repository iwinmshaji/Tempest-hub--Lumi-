import { useEffect, useState } from "react";
import GameCard from "../components/GameCard";

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("favorites");

    if (saved) {
      setFavorites(JSON.parse(saved));
    }
  }, []);

  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter(
      (game) => game.id !== id
    );

    setFavorites(updatedFavorites);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  return (
    <div className="games-page">

      <div className="games-header">

        <h2>
          My Favorites
        </h2>

        <p>
          Your saved games.
        </p>

      </div>

      {favorites.length === 0 ? (
        <div className="empty-favorites">

          <h3>
            No favorites yet
          </h3>

          <p>
            Go to the Games page and add some games.
          </p>

        </div>
      ) : (
        <div className="games-grid">

          {favorites.map((game) => (
            <div
              className="favorite-item"
              key={game.id}
            >

              <GameCard
                game={game}
              />

              <button
                onClick={() => removeFavorite(game.id)}
              >
                Remove from Favorites
              </button>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Favorites;