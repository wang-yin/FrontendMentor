import "../styles/Form.css";

function Form() {
  return (
    <form className="flex-column form">
      <div className="header">
        <h2 className="form-title">Mortgage Calculator</h2>
        <button type="reset" id="clear-all">
          Clear All
        </button>
      </div>
      <div className="form-control flex-column">
        <label htmlFor="amount" className="mb">
          Mortgage Amount
        </label>
        <div className="flex frame">
          <p className="unit">$</p>
          <input id="amount" type="text"></input>
        </div>
      </div>
      <div className="term-rate">
        <div className="form-control flex-column">
          <label htmlFor="term" className="mb">
            Mortgage Term
          </label>
          <div className="flex frame">
            <input id="term" type="text"></input>
            <p className="unit">years</p>
          </div>
        </div>
        <div className="form-control flex-column">
          <label htmlFor="rate" className="mb">
            Interest Rate
          </label>
          <div className="flex frame">
            <input id="rate" type="text"></input>
            <p className="unit">%</p>
          </div>
        </div>
      </div>
      <fieldset>
        <legend className="mb">Mortgage Type</legend>
        <div className="type-container">
          <input id="repayment" type="radio"></input>
          <label htmlFor="repayment">Repayment</label>
        </div>
        <div className="type-container">
          <input id="Interest" type="radio"></input>
          <label htmlFor="Interest">Interest Only</label>
        </div>
      </fieldset>
      <button type="submit" className="button-submit">
        <img src="/images/icon-calculator.svg" alt="calculator"></img>
        <span>Calculate Repayments</span>
      </button>
    </form>
  );
}

export default Form;
