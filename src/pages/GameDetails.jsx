import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  getGameById,
  getLocalGameById
} from "../services/api";

function GameDetails() {
  const { id } = useParams();

  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadGame = async () => {
      try {
        setLoading(true);
        setError("");

        try {
          const localGame = await getLocalGameById(id);

          setGame(localGame);
          return;
        } catch (error) {
          const rawgGame = await getGameById(id);

          setGame(rawgGame);
        }
      } catch (error) {
        setError("Unable to load game details.");
      } finally {
        setLoading(false);
      }
    };

    loadGame();
  }, [id]);

  if (loading) {
    return (
      <div className="game-details-page">
        <h2>Loading game...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="game-details-page">
        <h2>{error}</h2>

        <Link to="/games">
          ← Back to Games
        </Link>
      </div>
    );
  }

  return (
    <div className="game-details-page">

      <Link
        to="/games"
        className="back-button"
      >
        ← Back to Games
      </Link>

      <div className="game-details">

        <img
          src={game.background_image}
          alt={game.name}
          className="details-image"
        />

        <div className="details-content">

          <h1>
            {game.name}
          </h1>

          <p className="rating">
            ⭐ {game.rating}
          </p>

          <p>
            <strong>Genre:</strong>{" "}
            {game.genre ||
              game.genres
                ?.map((genre) => genre.name)
                .join(", ")}
          </p>

          <p>
            <strong>Released:</strong>{" "}
            {game.released || "Not available"}
          </p>

          <p>
            <strong>Platforms:</strong>{" "}
            {game.platforms
              ?.map((item) => item.platform.name)
              .join(", ") ||
              "Not available"}
          </p>

          <p className="description">
            {game.description_raw ||
              "No description available for this game."}
          </p>

        </div>

      </div>

    </div>
  );
}

export default GameDetails;