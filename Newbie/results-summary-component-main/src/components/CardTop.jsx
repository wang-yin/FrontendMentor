import '../styles/CardTop.css'

function CardTop() {
  return (
    <div className="top">
      <p className="result">Your Result</p>
      <div className="circle">
        <h1>76</h1>
        <p>of 100</p>
      </div>
      <h3 className="evaluation-text">Great</h3>
      <p className="result-description">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

export default CardTop;
