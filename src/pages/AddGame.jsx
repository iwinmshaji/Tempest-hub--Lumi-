import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addGame } from "../services/api";

function AddGame() {
  const navigate = useNavigate();

  const [game, setGame] = useState({
    name: "",
    background_image: "",
    rating: "",
    genre: "",
    released: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setGame({
      ...game,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addGame(game);

      setMessage("Game added successfully!");

      setTimeout(() => {
        navigate("/games");
      }, 1000);
    } catch (error) {
      setMessage("Failed to add game.");
    }
  };

  return (
    <div className="form-page">

      <h2>Add New Game</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Game name"
          value={game.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="background_image"
          placeholder="Image URL"
          value={game.background_image}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          value={game.rating}
          onChange={handleChange}
          min="0"
          max="5"
          step="0.1"
        />

        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={game.genre}
          onChange={handleChange}
        />

        <input
          type="date"
          name="released"
          value={game.released}
          onChange={handleChange}
        />

        <button type="submit">
          Add Game
        </button>

      </form>

      {message && (
        <p>
          {message}
        </p>
      )}

    </div>
  );
}

export default AddGame;