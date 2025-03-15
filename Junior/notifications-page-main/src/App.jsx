import { useState } from "react"
import './App.css'
import Messages from './components/Messages'

function App() {
  const [isMark, setIsMark] = useState(false)

  const  handleMark = () => {
    setIsMark(true)
  }

  return (
    <main>
      <div className='header'>
        <h3>Notifications {!isMark && (<span>3</span>)}</h3>
        <p onClick={handleMark}>Mark all as read</p>
      </div>
      <Messages isMark={isMark}/>
    </main>
  )
}

export default App
