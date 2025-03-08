import Alert from './components/Alert.jsx'
import Form from './components/Form'
import { useState } from "react";

function App() {
  const [showAlert, setShowAlert] = useState(false)

  return (
    <>
      {showAlert && <Alert onClose={() => setShowAlert(false)}/>}
      <div className='main'>
        <Form setShowAlert={setShowAlert} />
      </div>
    </>
  )
}

export default App;