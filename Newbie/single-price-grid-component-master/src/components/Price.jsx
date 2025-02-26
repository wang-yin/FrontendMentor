import '../styles/Price.css'

function Price() {
  return (
    <div className="price-container">
      <h3 className="price-title">Monthly Subscription</h3>
      <p className='price'>$29<span> per month</span></p>
      <p className='content'>Full access for less than $1 a day</p>
      <button>Sign Up</button>
    </div>
  )
}

export default Price