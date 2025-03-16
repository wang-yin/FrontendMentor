import "../styles/Balance.css"

function Balance () {
  return (
    <>
    <div className="balance">
      <p className="balance-title">My balance</p>
      <h2 className="balance-amount">$921.48</h2>
    </div>
    <div className="balance-img">
      <img src="/images/logo.svg" alt="logo"></img>
    </div>
    </>
  )
}

export default Balance