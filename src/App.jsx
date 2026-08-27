import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Games from "./pages/Games";
import GameDetails from "./pages/GameDetails";
import Favorites from "./pages/Favorites";
import AddGame from "./pages/AddGame";
import EditGame from "./pages/EditGame";

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <Header />

        <main>
          <Routes>

            <Route
              path="/"
              element={<Home />}
            />

            <Route
              path="/games"
              element={<Games />}
            />

            <Route
              path="/games/:id"
              element={<GameDetails />}
            />

            <Route
              path="/favorites"
              element={<Favorites />}
            />

            <Route
              path="/add-game"
              element={<AddGame />}
            />

            <Route
              path="/edit-game/:id"
              element={<EditGame />}
            />

          </Routes>
        </main>

      </div>
    </BrowserRouter>
  );
}

export default App;