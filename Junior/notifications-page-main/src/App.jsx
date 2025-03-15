import './App.css'
import Messages from './components/Messages'

function App() {

  return (
    <main>
      <div className='header'>
        <h3>Notifications <span>3</span></h3>
        <p>Mark all as read</p>
      </div>
      <Messages />
    </main>
  )
}

export default App
