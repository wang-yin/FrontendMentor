import "../styles/Error.css"

function Error({ error }) {
  return(
    <div className="error-box">
      <p className="error-message">{error}</p>
    </div>
  )
}

export default Error