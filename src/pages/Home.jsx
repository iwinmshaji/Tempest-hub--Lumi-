import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">

      <section className="hero">

        <h1>
          Welcome to TempestHub
        </h1>

        <p>
          Discover, search and save your favorite games.
        </p>

        <Link
          to="/games"
          className="hero-button"
        >
          Explore Games
        </Link>

      </section>

      <section className="home-features">

        <div>
          <h3>Discover Games</h3>
          <p>
            Browse games using the RAWG API.
          </p>
        </div>

        <div>
          <h3>Search & Filter</h3>
          <p>
            Quickly find games by name or genre.
          </p>
        </div>

        <div>
          <h3>Save Favorites</h3>
          <p>
            Save your favorite games for later.
          </p>
        </div>

      </section>

    </div>
  );
}

export default Home;