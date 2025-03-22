import "../styles/ToggleSwitch.css"

function ToggleSwitch({ theme }) {
  return(
    <label className="toggle-switch">
      <input className="toggle-checkbox" type="checkbox"></input>
      <span className={`slider ${theme}-mode-slider`}></span>
    </label>
  )
}

export default ToggleSwitch;