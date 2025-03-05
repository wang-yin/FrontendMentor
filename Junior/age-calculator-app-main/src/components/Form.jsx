import { useState } from "react";
import "../styles/Form.css";

function Form({ formData, setFormData, setIsValid }) {
  const [errors, setErrors] = useState({});

  // Determine if it is a leap year
  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  // Validate input data
  const validateData = (day, month, year) => {
    let newErrors = {};

    // Check if it is a null value
    if (!day.trim()) newErrors.day = "This field is required";
    if (!month.trim()) newErrors.month = "This field is required";
    if (!year.trim()) newErrors.year = "This field is required";

    // If there is a null value, return an error directly without further checking.
    if (Object.keys(newErrors).length > 0) return newErrors;

    // Convert to a number
    day = parseInt(day);
    month = parseInt(month);
    year = parseInt(year);

    // Reasonable range check
    if (year < 1990 || year > new Date().getFullYear()) {
      newErrors.year = "Must be in the past";
    }
    if (month < 1 || month > 12) {
      newErrors.month = "Must be a valid month";
    }
    if (day < 1 || day > 31) {
      newErrors.day = "Must be a valid day";
    }

    // Maximum number of days in each month
    const daysInMonth = {
      1: 31,
      2: isLeapYear(year) ? 29 : 28,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      12: 31,
    };

    // Ensure the date does not exceed the maximum number of days in that month.
    if (day > daysInMonth[month]) {
      newErrors.day = "Must be a valid date";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateData(formData.day, formData.month, formData.year);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsValid(false); // If there is an error, immediately set it to false, allowing "Result.jsx" to clear.
      return; // If there is an error, do not update formData.
    }

    setErrors({});

    // Only update formData when the data is valid.
    setFormData({
      day: formData.day,
      month: formData.month,
      year: formData.year,
    });

    setIsValid(true); // Only allow "Result.jsx" to calculate when the data is correct.
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear errors in real-time.
    setErrors({
      ...errors,
      [e.target.name]: "",
    });

    setIsValid(false); // Clear the result every time the input changes.
  };

  // When the input is clicked, remove the error styling.
  const handleFocus = (e) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "",
    }));
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="inputs-container flex">
        <label className={`flex-col ${errors.day ? "error" : ""}`}>
          DAY
          <input
            type="number"
            className={`input-DD ${errors.day ? "error" : ""}`}
            placeholder="DD"
            name="day"
            value={formData.day}
            onChange={handleChange}
            onFocus={handleFocus}
          ></input>
          {errors.day && <p className="error-text">{errors.day}</p>}
        </label>
        <label className={`flex-col ${errors.month ? "error" : ""}`}>
          MONTH
          <input
            type="number"
            className={`input-MM ${errors.month ? "error" : ""}`}
            placeholder="MM"
            name="month"
            value={formData.month}
            onChange={handleChange}
            onFocus={handleFocus}
          ></input>
          {errors.month && <p className="error-text">{errors.month}</p>}
        </label>
        <label className={`flex-col ${errors.year ? "error" : ""}`}>
          YEAR
          <input
            type="number"
            className={`input-YYYY ${errors.year ? "error" : ""}`}
            placeholder="YYYY"
            name="year"
            value={formData.year}
            onChange={handleChange}
            onFocus={handleFocus}
          ></input>
          {errors.year && <p className="error-text">{errors.year}</p>}
        </label>
      </div>
      <hr></hr>
      <button type="submit">
        <img src="/images/icon-arrow.svg" alt="submit"></img>
      </button>
    </form>
  );
}

export default Form;
