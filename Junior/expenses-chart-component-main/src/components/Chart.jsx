import { useEffect, useState } from "react"
import "../styles/Chart.css"

function Chart () {
  const [isHovered, setIsHovered] = useState(null)
  const [expenses, setExpenses] = useState([])

  const fetchData = async () => {
    try {
      const result = await fetch("/data.json").then((response) =>
        response.json()
      )
      setExpenses(result)
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleMouseEnter = (index) => {
    setIsHovered(index)
  }

  const handleMouseLeave = () => {
    setIsHovered(null)
  }

  return(
    <>
    {expenses.map((expense, index) => (
      <div className="bar-chart-container" key={expense.day}>
        <p className="chart-label">{expense.day}</p>
        <div className={`bar-chart ${expense.day}`} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={handleMouseLeave}></div>
        {isHovered === index && <p className="hovered">${expense.amount}</p>}
      </div>
    ))}
    </>
  )
}

export default Chart