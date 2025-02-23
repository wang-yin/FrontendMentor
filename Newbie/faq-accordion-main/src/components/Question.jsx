import { useState } from "react";
import "../styles/Question.css";

function Question({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <>
      <div className="question-container">
        <div
          className="question-header"
          onClick={() => setIsExpanded(!isExpanded)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-expanded={isExpanded}
        >
          <h3>{question}</h3>
          <img
            src={
              isExpanded
                ? "/images/icon-minus.svg"
                : "/images/icon-plus.svg"
            }
            alt={isExpanded ? "Hide Answers" : "Show Answer"}
          ></img>
        </div>
        {isExpanded && (
          <div className="answer-container" aria-hidden={!isExpanded}>
            <p className="answer">{answer}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Question;
