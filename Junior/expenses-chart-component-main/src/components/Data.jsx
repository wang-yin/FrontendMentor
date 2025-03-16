import "../styles/Data.css"
import Chart from "./Chart"

function Data () {
  return (
    <>
    <div className="data">
      <h1 className="data-title">Spending - Last 7 days</h1>
      <div className="chart">
        <Chart />
      </div>
      <hr></hr>
      <div className="monthly-summary">
        <div className="monthly-summary-amount">
          <p className="monthly-summary-label">Total this month</p>
          <h2 className="monthly-summary-total">$478.33</h2>
        </div>
        <div className="monthly-summary-change">
          <p className="monthly-summary-percentage">+2.4%</p>
          <p className="monthly-summary-comparison">from last month</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Data