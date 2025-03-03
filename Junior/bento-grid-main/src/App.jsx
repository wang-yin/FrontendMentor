import "./App.css";

function App() {
  return (
    <main>
      <div className="col-one">
        <div className="item create">
          <h2>
            Create and schedule content <i>quicker.</i>
          </h2>
          <img src="/images/illustration-create-post.webp"></img>
        </div>
        <div className="item ai">
          <h2>Write your content using AI.</h2>
          <img src="/images/illustration-ai-content.webp"></img>
        </div>
      </div>
      <div className="col-two">
        <div className="item media">
          <h1>
            Social Media <span>10x</span> <i>Faster</i> with AI
          </h1>
          <img src="/images/illustration-five-stars.webp"></img>
          <p>Over 4,000 5-star reviews</p>
        </div>
        <div className="element">
          <div className="item manage">
            <img src="/images/illustration-multiple-platforms.webp"></img>
            <h2>Manage multiple accounts and platforms.</h2>
          </div>
          <div className="item maintain">
            <h2>Maintain a consistent posting schedule.</h2>
            <img src="/images/illustration-consistent-schedule.webp"></img>
          </div>
        </div>
      </div>
      <div className="col-three">
        <div className="item schedule">
          <h2>Schedule to social media.</h2>
          <img src="/images/illustration-schedule-posts.webp"></img>
          <p>
            Optimize post timings to publish content at the perfect time for
            your audience.
          </p>
        </div>
      </div>
      <div className="col-four">
        <div className="item audience">
          <h1>{`>`}56%</h1>
          <p>faster audience growth</p>
          <img src="/images/illustration-audience-growth.webp"></img>
        </div>
        <div className="item grow">
          <img src="/images/illustration-grow-followers.webp"></img>
          <h1>Grow followers with non-stop content.</h1>
        </div>
      </div>
    </main>
  );
}

export default App;
