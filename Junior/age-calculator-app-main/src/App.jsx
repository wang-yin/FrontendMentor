import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
  });

  const [isValid, setIsValid] = useState(false);  // Add a new state to determine if the form is valid
  
  return (
    <main className="container">
      <Form
        formData={formData}
        setFormData={setFormData}
        setIsValid={setIsValid}
      />
      <Result formData={formData} isValid={isValid} />
    </main>
  );
}

export default App;
