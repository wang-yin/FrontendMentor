import "../styles/CardContent.css";
import ResultsItem from "../components/ResultsItem";
import Data from "../../data.json";

function CardContent() {
  return (
    <div className="content">
      <p className="summary">Summary</p>
      <div className="results-summary">
        {Data.map((item, index) => (
          <ResultsItem key={index} {...item} />
        ))}
      </div>
      <button>Continue</button>
    </div>
  );
}

export default CardContent;
