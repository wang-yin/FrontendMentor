import "../styles/Info.css"

function Info({ Info }) {
  return(
    <div className="info-box">
      <div className="info">
        <h4>IP Address</h4>
        <p>{Info.ip}</p>
      </div>
      <div className="info">
        <h4>Location</h4>
        <p>{Info.location.city}, {Info.location.region}</p>
      </div>
      <div className="info">
        <h4>Timezone</h4>
        <p>UTC {Info.location.timezone}</p>
      </div>
      <div className="info">
        <h4>ISP</h4>
        <p>{Info.isp}</p>
      </div>
    </div>
  )
}

export default Info