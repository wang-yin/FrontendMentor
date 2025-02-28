import "./App.css";

function App() {
  return (
    <main>
      <div className="Mask">
        <img
          src="/images/image-header-mobile.jpg"
          srcset="/images/image-header-mobile.jpg, /images/image-header-desktop.jpg"
          sizes="(min-width: 768px) 1200px, 600px"
          alt="business image"
        ></img>
      </div>
      <div className="content">
        <h1>
          Get <span>insights</span> that help your business grow.
        </h1>
        <p className="paragraph">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="stats">
          <div className="stat">
            <h2>10k+</h2>
            <p>COMPANIES</p>
          </div>
          <div className="stat">
            <h2>314</h2>
            <p>TEMPLATES</p>
          </div>
          <div className="stat">
            <h2>12M+</h2>
            <p>QUERIES</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
