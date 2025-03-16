import './App.css'
import Balance from './components/Balance'
import Data from './components/Data'

function App() {

  return (
    <>
    <div className='balance-container'>
      <Balance />
    </div>
    <div className='data-container'>
      <Data />
    </div>
    </>
  )
}

export default App
