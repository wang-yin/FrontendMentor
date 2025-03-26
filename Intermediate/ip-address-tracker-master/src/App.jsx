import "./App.css";
import SearchBar from "./components/SearchBar";
import Info from "./components/Info";
import Map from "./components/Map";


function App() {
  return (
    <main>
      <section>
        <h1>IP Address Tracker</h1>
        <SearchBar />
        <Info />
      </section>
      <div className="img-container">
        <picture>
          <source media="(min-width: 768px)" srcset="./images/pattern-bg-desktop.png" />
          <img src="./images/pattern-bg-mobile.png" alt="IP Address Tracker Background" />
        </picture>
        <Map />
      </div>
    </main>
  );
}

export default App;
