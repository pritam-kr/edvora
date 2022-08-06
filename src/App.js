import "./App.css";
import { Nav } from "./components/nav/Nav";
import { useRidesContext } from "./context/ridesContext";

function App() {
  return (
    <div className="App">
      <Nav />

      <main className="main">
        <div className="max-width main-wrapper">
          <div className="main-topbar">
            <div className="rides">
              <ul>
                <li className="list subheading">Nearest rides</li>
                <li className="list subheading">Upcoming rides</li>
                <li className="list subheading">Past rides</li>
              </ul>
            </div>

            <div className="filter">
              <h3 className="heading">Filters</h3>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
