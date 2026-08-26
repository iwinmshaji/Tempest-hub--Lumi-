import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Games from "./pages/Games";

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
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;