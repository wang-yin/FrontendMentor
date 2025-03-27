import "./App.css";
import SearchBar from "./components/SearchBar";
import Info from "./components/Info";
import Error from "./components/Error";
import Map from "./components/Map";
import getLocationInfo from "../api/getLocationInfo";
import { isValidIP } from "./utils/isValidIP";
import { useState, useEffect } from "react";

function App() {
  const [address, setAddress] = useState("");
  const [info, setInfo] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      if (address && !isValidIP(address)) {
        setError("Please provide a valid IP");
        return;
      }
      setError("");
      const data = await getLocationInfo(address);
      setInfo(data)
    };

    fetchData();
  }, [address]);

  return (
    <main>
      <section>
        <h1>IP Address Tracker</h1>
        <SearchBar setAddress={setAddress}/>
        {!error && info && <Info Info={info}/>}
        {error && <Error error={error}/>}
      </section>
      <div className="img-container">
        <picture>
          <source
            media="(min-width: 768px)"
            srcset="./images/pattern-bg-desktop.png"
          />
          <img
            src="./images/pattern-bg-mobile.png"
            alt="IP Address Tracker Background"
          />
        </picture>
        <div className="map-box">
          {!error && info && <Map info={info}/>}
          <div className={`${error ? "error" : ""}`}>
            {error && <p className="map-error">No data</p>}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
