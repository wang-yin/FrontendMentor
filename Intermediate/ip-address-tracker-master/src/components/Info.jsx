import "../styles/Info.css"

function Info() {
  return(
    <div className="info-box">
      <div className="info">
        <h4>IP Address</h4>
        <p>192.212.174.101</p>
      </div>
      <div className="info">
        <h4>Location</h4>
        <p>Brooklyn, NY 10001</p>
      </div>
      <div className="info">
        <h4>Timezone</h4>
        <p>123</p>
      </div>
      <div className="info">
        <h4>ISP</h4>
        <p>123</p>
      </div>
    </div>
  )
}

export default Info