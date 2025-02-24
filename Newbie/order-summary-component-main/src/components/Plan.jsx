import "../styles/Plan.css";

function Plan() {
  return (
    <div className="plan-container">
      <img src="/images/icon-music.svg" alt="music icon"></img>
      <div className="plan">
        <p className="plan-name">Annual Plan</p>
        <p className="plan-price">$59.99/year</p>
      </div>
      <a href="#">Change</a>
    </div>
  );
}

export default Plan;
