import { Link } from "react-router-dom";


function GameCard({ game, onFavorite, isFavorite }) {

  return (
    <div className="game-card">
     <Link to={`/games/${game.id}`}>

        <img
          src={game.background_image}
          alt={game.name}
           />

                <div className="game-info">

       <h3>{game.name}</h3>

 <p>
       {game.genres
              ?.map((genre) => genre.name)
              .join(", ") || game.genre}
</p>

 <span>
        ⭐ {game.rating}
</span>

        </div>
 </Link>

      {onFavorite && (
        <button
          onClick={() => onFavorite(game)}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>

      )}



    </div>
  );
}




export default GameCard;