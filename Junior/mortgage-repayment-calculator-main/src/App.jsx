import './App.css'
import Form from './components/Form'
import EmptyResult from './components/EmptyResult'
import CompletedResult from './components/CompletedResult'

function App() {

  return (
    <>
      <div className='form-container'>
        <Form />
      </div>
      <div className='result-container'>
        <CompletedResult />
      </div>
    </>
  )
}

export default App
