function GameCard({ game }) {
  return (
    <div className="game-card">
      <img
        src={game.image}
        alt={game.name}
      />

      <div className="game-info">
        <h3>{game.name}</h3>

        <p>{game.genre}</p>

        <span>⭐ {game.rating}</span>
      </div>
    </div>
  );
}

export default GameCard;