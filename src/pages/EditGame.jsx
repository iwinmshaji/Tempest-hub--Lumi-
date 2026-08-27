import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getLocalGameById,
  updateGame
} from "../services/api";
  



function EditGame() {
  const { id } = useParams();
  const navigate = useNavigate();




  const [game, setGame] = useState({
    name: "",
    background_image: "",
    rating: "",
    genre: "",
    released: ""
  });






  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");


  useEffect(() => {
    const loadGame = async () => {
      try {
        const data = await getLocalGameById(id);

        setGame({
          name: data.name || "",
          background_image: data.background_image || "",
          rating: data.rating || "",
          genre: data.genre || "",
          released: data.released || ""
        });
      } catch (error) {
        setMessage("Unable to load game.");
      } finally {
        setLoading(false);
      }
    };
    





    loadGame();
  }, [id]);

  const handleChange = (e) => {
    setGame({
      ...game,
      [e.target.name]: e.target.value
    });
  };






  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateGame(id, game);

      setMessage("Game updated successfully!");

      setTimeout(() => {
        navigate("/games");
      }, 1000);
    } catch (error) {
      setMessage("Failed to update game.");
    }
  };





  if (loading) {
    return (
      <div className="form-page">
        <h2>Loading game...</h2>
      </div>
    );
  }






  return (
    <div className="form-page">

      <h2>Edit Game</h2>





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
          Update Game
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
export default EditGame;