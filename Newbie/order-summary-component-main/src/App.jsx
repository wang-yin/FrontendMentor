import "./App.css";
import Plan from "./components/Plan";
import Button from "./components/Button";

function App() {
  return (
    <main>
      <img src="/images/illustration-hero.svg" alt="illustration-hero"></img>
      <div className="content">
        <h2>Order Summary</h2>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <Plan />
        <Button />
      </div>
    </main>
  );
}

export default App;
