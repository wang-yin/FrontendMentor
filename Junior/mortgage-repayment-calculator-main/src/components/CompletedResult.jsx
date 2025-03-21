import "../styles/CompletedResult.css"

function CompletedResult ({ value }) {
  return (
    <div className="completed-result">
      <h2>Your results</h2>
      <p>Your results are shown below based on the information you provided. 
  To adjust the results, edit the form and click “calculate repayments” again.</p>
      <div className="info">
        <p>Your monthly repayments</p>
        <h1>${value.monthlyPayment.toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
        <hr></hr>
        <p className="total">Total you'll repay over the term</p>
        <h2 className="total-amount">${value.totalRepayement.toFixed(2)
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h2>
      </div>
    </div>
  )
}

export default CompletedResult