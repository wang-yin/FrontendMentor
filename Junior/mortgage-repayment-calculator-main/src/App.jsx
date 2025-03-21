import "./App.css";
import Form from "./components/Form";
import EmptyResult from "./components/EmptyResult";
import CompletedResult from "./components/CompletedResult";
import { useState } from "react";

function App() {
  const [isCalculator, setIsCalculator] = useState(false);
  const [value, setValue] = useState({ monthlyPayment: 0, totalRepayement: 0 });

  return (
    <>
      <div className="form-container">
        <Form onCalculator={setIsCalculator} getvalue={setValue} />
      </div>
      <div className="result-container">
        {isCalculator ? <CompletedResult value={value} /> : <EmptyResult />}
      </div>
    </>
  );
}

export default App;
