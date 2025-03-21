import { useState } from "react";
import "../styles/Form.css";
import { calculatePayement } from "../../utils/calculate"

function Form({ onCalculator, getvalue }) {
  const [formData, setFormData] = useState({
    amount: "",
    term: "",
    rate: "",
    type: "",
  });
  const [errors, setErrors] = useState({});

  const validateNumber = (value) => {
    return isNaN(value) || value === "";
  };

  const validate = () => {
    let newErrors = {};

    if (!formData.amount.trim()) {
      newErrors.amount = "This field is required";
    } else if (validateNumber(formData.amount)) {
      newErrors.amount = "Not a number";
    }
    if (!formData.term.trim()) {
      newErrors.term = "This field is required";
    } else if (validateNumber(formData.term)) {
      newErrors.term = "Not a number";
    }
    if (!formData.rate.trim()) {
      newErrors.rate = "This field is required";
    } else if (validateNumber(formData.rate)) {
      newErrors.rate = "Not a number";
    }
    if (!formData.type) {
      newErrors.type = "This field is required";
    }

    return newErrors
  }

  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if(Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      setErrors({})
      onCalculator(true)
      const result = calculatePayement(formData.amount, formData.rate, formData.term, formData.type)
      getvalue(result)
    }
  };

  const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "amount") {
    const rawValue = value.replace(/,/g, "");
    if (isNaN(rawValue)) return; 


    setFormData({
      ...formData,
      [name]: rawValue, 
    });
  } else {
    setFormData({
      ...formData,
      [name]: value,
    });
  }
};

  const onReset = () => {
    setFormData({ amount: "", term: "", rate: "", type: "" });
    setErrors({});
    onCalculator(false)
  }
  return (
    <form className="flex-column form" onSubmit={handleSubmit} noValidate>
      <div className="header">
        <h2 className="form-title">Mortgage Calculator</h2>
        <button
          type="reset"
          id="clear-all"
          onClick={onReset}
        >
          Clear All
        </button>
      </div>
      <div className="amount-container form-control flex-column">
        <label htmlFor="amount" className="mb">
          Mortgage Amount
        </label>
        <div className={`flex frame ${errors.amount ? "error" : ""}`}>
          <p className="unit">$</p>
          <input
            id="amount"
            type="text"
            name="amount"
            value={formData.amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            onChange={handleChange}
          ></input>
        </div>
        {errors.amount && <p className="error-msg">{errors.amount}</p>}
      </div>
      <div className="term-rate">
        <div className="form-control flex-column">
          <label htmlFor="term" className="mb">
            Mortgage Term
          </label>
          <div className={`flex frame ${errors.term ? "error" : ""}`}>
            <input
              id="term"
              type="text"
              name="term"
              value={formData.term}
              onChange={handleChange}
            ></input>
            <p className="unit">years</p>
          </div>
          {errors.term && <p className="error-msg">{errors.term}</p>}
        </div>
        <div className="form-control flex-column">
          <label htmlFor="rate" className="mb">
            Interest Rate
          </label>
          <div className={`flex frame ${errors.rate ? "error" : ""}`}>
            <input
              id="rate"
              type="text"
              name="rate"
              value={formData.rate}
              onChange={handleChange}
            ></input>
            <p className="unit">%</p>
          </div>
          {errors.rate && <p className="error-msg">{errors.rate}</p>}
        </div>
      </div>
      <fieldset>
        <legend className="mb">Mortgage Type</legend>
        <div className="type-container">
          <input
            name="type"
            id="repayment"
            type="radio"
            value="repayment"
            onChange={handleChange}
            checked={formData.type === "repayment"}
          ></input>
          <label htmlFor="repayment">Repayment</label>
        </div>
        <div className="type-container">
          <input
            name="type"
            id="interest-only"
            type="radio"
            value="interest-only"
            onChange={handleChange}
            checked={formData.type === "interest-only"}
          ></input>
          <label htmlFor="interest-only">Interest Only</label>
        </div>
        {errors.type && <p className="error-msg">{errors.type}</p>}
      </fieldset>
      <button type="submit" className="button-submit">
        <img src="/images/icon-calculator.svg" alt="calculator"></img>
        <span>Calculate Repayments</span>
      </button>
    </form>
  );
}

export default Form;
