import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GameCard from "../components/GameCard";
import SearchBar from "../components/SearchBar";
import FilterDropdown from "../components/FilterDropdown";
import {
  getGames,
  getLocalGames,
  deleteGame
} from "../services/api";

function Games() {
  const [games, setGames] = useState([]);
  const [localGames, setLocalGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");

    return saved ? JSON.parse(saved) : [];
  });

  const loadGames = async () => {
    try {
      setLoading(true);
      setError("");

      const rawgGames = await getGames();
      const savedGames = await getLocalGames();

      setGames(rawgGames);
      setLocalGames(savedGames);
    } catch (error) {
      setError("Unable to load games.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadGames();
  }, []);

  const toggleFavorite = (game) => {
    const exists = favorites.some(
      (favorite) => favorite.id === game.id
    );

    let updatedFavorites;

    if (exists) {
      updatedFavorites = favorites.filter(
        (favorite) => favorite.id !== game.id
      );
    } else {
      updatedFavorites = [
        ...favorites,
        game
      ];
    }

    setFavorites(updatedFavorites);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this game?"
    );

    if (!confirmDelete) {
      return;
    }

    try {
      await deleteGame(id);

      setLocalGames(
        localGames.filter(
          (game) => game.id !== id
        )
      );
    } catch (error) {
      alert("Failed to delete game.");
    }
  };

  const allGames = [
    ...games,
    ...localGames
  ];

  const filteredGames = allGames.filter((game) => {
    const matchesSearch = game.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const gameGenre =
      game.genre ||
      game.genres
        ?.map((item) => item.name)
        .join(", ");

    const matchesGenre =
      genre === "All" ||
      gameGenre?.includes(genre);

    return matchesSearch && matchesGenre;
  });

  if (loading) {
    return (
      <div className="games-page">
        <h2>Loading games...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="games-page">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="games-page">

      <div className="games-header">

        <h2>
          Explore Games
        </h2>

        <p>
          Find your next game to play.
        </p>

        <Link
          to="/add-game"
          className="add-game-button"
        >
          + Add Game
        </Link>

      </div>

      <div className="game-filters">

        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search games..."
        />

        <FilterDropdown
          value={genre}
          onChange={setGenre}
        />

      </div>

      <div className="games-grid">

        {filteredGames.length > 0 ? (
          filteredGames.map((game) => {

            const isLocalGame = localGames.some(
              (localGame) => localGame.id === game.id
            );

            const isFavorite = favorites.some(
              (favorite) => favorite.id === game.id
            );

            return (
              <div key={game.id}>

                <GameCard
                  game={game}
                  onFavorite={toggleFavorite}
                  isFavorite={isFavorite}
                />

                {isLocalGame && (
                  <div className="game-actions">

                    <Link
                      to={`/edit-game/${game.id}`}
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() =>
                        handleDelete(game.id)
                      }
                    >
                      Delete
                    </button>

                  </div>
                )}

              </div>
            );
          })
        ) : (
          <p>
            No games found.
          </p>
        )}

      </div>

    </div>
  );
}

export default Games;