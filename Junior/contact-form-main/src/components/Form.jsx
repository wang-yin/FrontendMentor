import { useState } from "react";
import "../styles/Form.css";

function Form({ setShowAlert }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    type: "",
    message: "",
    contact: "",
  });
  const [errors, setErrors] = useState({});
  const [selectedType, setSelectedType] = useState("");

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    if (name === "type") {
      setSelectedType(value);
    }
  };

  const handleFocus = (e) => {
    const { name } = e.target

    setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: "",
  }));
  }

  const validate = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "This field is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "This field is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "This field is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.type) {
      newErrors.type = "Please select a query type";
    }
    if (!formData.message.trim()) {
      newErrors.message = "This field is required";
    }
    if (!formData.contact) {
      newErrors.contact = "To submit this form, please consent to being contacted";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowAlert(true);
      resetForm();
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      type: "",
      message: "",
      contact: false,
    });

    setSelectedType("");
    document.activeElement.blur();
  };


  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="title-container">
        <h1 className="title">Contact Us</h1>
      </div>
      <div className="name-container flex-col-2">
        <label className="first-name flex-col-3">
          First Name *
          <input
            className={`${errors.firstName ? "error" : ""}`}
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            onFocus={handleFocus}
          />
          {errors.firstName && (
            <p className="error-message">{errors.firstName}</p>
          )}
        </label>
        <label className="last-name flex-col-3">
          Last Name *
          <input
            className={`${errors.lastName ? "error" : ""}`}
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            onFocus={handleFocus}
          />
          {errors.lastName && (
            <p className="error-message">{errors.lastName}</p>
          )}
        </label>
      </div>
      <div className="email-container">
        <label className="email flex-col-3">
          Email Address *
          <input
            className={`${errors.email ? "error" : ""}`}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={handleFocus}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </label>
      </div>
      <div className="type-container">
        <label className="type flex-col-3">
          Query Type *
          <div className="radio flex-col-2">
            <fieldset className={selectedType === "A" ? "selected" : ""}>
              <input
                type="radio"
                className="check"
                name="type"
                value="A"
                id="queryA"
                onChange={handleChange}
                onFocus={handleFocus}
                checked={formData.type === "A"}
              />
              <label htmlFor="queryA"> General Enquiry</label>
            </fieldset>
            <fieldset className={selectedType === "B" ? "selected" : ""}>
              <input
                type="radio"
                className="check"
                name="type"
                value="B"
                id="queryB"
                onChange={handleChange}
                onFocus={handleFocus}
                checked={formData.type === "B"}
              />
              <label htmlFor="queryB">Support Request</label>
            </fieldset>
            {errors.type && <p className="error-message">{errors.type}</p>}
          </div>
        </label>
      </div>
      <div className="message-container">
        <label htmlFor="message" className="flex-col-3">
          Message *
          <textarea
            className={`message ${errors.message ? "error" : ""}`}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onFocus={handleFocus}
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}
        </label>
      </div>
      <div className="contact-consent">
        <label>
          <input
            type="checkbox"
            className="check"
            name="contact"
            onChange={handleChange}
            onFocus={handleFocus}
            checked={formData.contact}
          />
          I consent to being contacted by the team *
        </label>
        {errors.contact && <p className="error-message">{errors.contact}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
