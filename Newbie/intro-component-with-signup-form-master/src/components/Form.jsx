import { useState } from "react";
import "../styles/Form.css";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    let newFormData = { ...formData };

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name cannot be empty";
      newFormData.firstName = "";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name cannot be empty";
      newFormData.lastName = "";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email cannot be empty";
      newFormData.email = "";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Looks like this is not an email";
      newFormData.email = "";

      setTimeout(() => {
        setFormData((prevData) => ({
          ...prevData,
          emailPlaceholder: "email@example.com",
        }));
      }, 100);
    }
    if (!formData.password) {
      newErrors.password = "Password cannot be empty";
      newFormData.password = "";
    }
    setErrors(newErrors);
    setFormData(newFormData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      emailPlaceholder:
        e.target.name === "email" ? "" : formData.emailPlaceholder,
    });

    setErrors({ ...errors, [e.target.name]: "" });
  };

  return (
    <form onSubmit={handleSubmit} novalidate="novalidate">
      <div className={`input-container ${errors.firstName ? "error" : ""}`}>
        <input
          type="text"
          placeholder={errors.firstName ? "" : "First Name"}
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        ></input>
        {errors.firstName && (
          <img src="/images/icon-error.svg" alt="icon-error"></img>
        )}
        {errors.firstName && <span>{errors.firstName}</span>}
      </div>
      <div className={`input-container ${errors.lastName ? "error" : ""}`}>
        <input
          type="text"
          placeholder={errors.lastName ? "" : "Last Name"}
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        ></input>
        {errors.lastName && (
          <img src="/images/icon-error.svg" alt="icon-error"></img>
        )}
        {errors.lastName && <span>{errors.lastName}</span>}
      </div>
      <div className={`input-container ${errors.email ? "error" : ""}`}>
        <input
          type="email"
          placeholder={
            errors.email && !formData.email
              ? formData.emailPlaceholder || ""
              : "Email Address"
          }
          name="email"
          value={formData.email}
          onChange={handleChange}
        ></input>
        {errors.email && (
          <img src="/images/icon-error.svg" alt="icon-error"></img>
        )}
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div className={`input-container ${errors.password ? "error" : ""}`}>
        <input
          type="password"
          placeholder={errors.password ? "" : "Password"}
          name="password"
          value={formData.password}
          onChange={handleChange}
        ></input>
        {errors.password && (
          <img src="/images/icon-error.svg" alt="icon-error"></img>
        )}
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit">Claim your free trial</button>
      <div className="statement-container">
        <p className="statement">
          By clicking the button, you are agreeing to our{" "}
          <span>Terms and Services</span>
        </p>
      </div>
    </form>
  );
}

export default Form;
