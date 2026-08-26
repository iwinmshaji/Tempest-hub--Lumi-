import GameCard from "../components/GameCard";

function Games() {
  const games = [
    {
      id: 1,
      name: "Minecraft",
      genre: "Adventure",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600"
    },
    {
      id: 2,
      name: "Cyberpunk",
      genre: "Action",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600"
    },
    {
      id: 3,
      name: "Racing Game",
      genre: "Racing",
      rating: 4.2,
      image:
        "https://images.unsplash.com/photo-1511882150382-421056c89033?w=600"
    }
  ];

  return (
    <div className="games-page">
      <div className="games-header">
        <h2>Explore Games</h2>

        <p>
          Find your next game to play.
        </p>
      </div>

      <div className="games-grid">
        {games.map((game) => (
          <GameCard
            key={game.id}
            game={game}
          />
        ))}
      </div>
    </div>
  );
}

export default Games;