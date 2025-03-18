import './App.css'
import Form from './components/Form'
import Result from './components/Result'

function App() {

  return (
    <>
      <div className='form-container'>
        <Form />
      </div>
      <div className='result-container'>
        <Result />
      </div>
    </>
  )
}

export default App
