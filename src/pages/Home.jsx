import { Link } from "react-router-dom";

function Home() {




  return (
    <div className="home-page">
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >


          <source src="/redguy.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Welcome to TempestHub</h1>

          <p>
            Discover, search and save your favorite games.
          </p>

          <Link to="/games" className="hero-button">
            Explore Games
          </Link>
        </div>
      </section>



      <section className="home-features">
        <div className="feature-card">
          <h2>Discover Games</h2>
          <p>
            Browse games using the RAWG API and discover new titles to play.
          </p>
        </div>







        <div className="feature-card">
          <h2>Search & Filter</h2>
          <p>
            Quickly find games by searching for their name or filtering by
            genre.
          </p>
        </div>





        <div className="feature-card">
          <h2>Save Favorites</h2>


          <p>

            Save your favorite games and easily access them whenever you want.
          </p>


        </div>
      </section>
    </div>
  );
}
export default Home;