import "../styles/Chart.css"

function Chart () {
  return(
    <>
    <div className="bar-chart-container">
      <p className="chart-label">mon</p>
      <div className="bar-chart mon"></div>
    </div>

    <div className="bar-chart-container">
      <p className="chart-label">tue</p>
      <div className="bar-chart tue"></div>
    </div>

    <div className="bar-chart-container">
      <p className="chart-label">wed</p>
      <div className="bar-chart wed"></div>
    </div>

    <div className="bar-chart-container">
      <p className="chart-label">thu</p>
      <div className="bar-chart thu"></div>
    </div>

    <div className="bar-chart-container">
      <p className="chart-label">fri</p>
      <div className="bar-chart fri"></div>
    </div>

    <div className="bar-chart-container">
      <p className="chart-label">sat</p>
      <div className="bar-chart sat"></div>
    </div>

    <div className="bar-chart-container">
      <p className="chart-label">sun</p>
      <div className="bar-chart sun"></div>
    </div>
    </>
  )
}

export default Chart