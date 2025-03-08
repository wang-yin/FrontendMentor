import "../styles/Alert.css"

function Alert({ onClose }) {
  return (
    <>
    <div className="overlay" onClick={onClose}></div>
    <div className="dialog">
      <div className="alert-title">
        <img src="/images/icon-success-check.svg" alt="Success Icon"></img>
        <span>Message Sent!</span>
      </div>
      <div className="alert-content">
        <p>Thanks for completing the form. We'll be in touch soon!</p>
      </div>
    </div>
    </>
  )
}

export default Alert