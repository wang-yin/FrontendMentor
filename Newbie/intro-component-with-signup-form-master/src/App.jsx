import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <main>
      <div className="article">
        <h1 className="main-heading">Learn to code by watching others</h1>
        <p className="main-description">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="price-info">
        <p>
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </p>
      </div> 
      <Form />
    </main>
  );
}

export default App;
