/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import Form from './components/Form'
import Messagelist from './components/Messagelist'
import './App.css'

const App = () => {
  const [status, setStatus] = useState(false);
  return (
    <div className="app">
      <div className="container">
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <Form setStatus={setStatus}/>
      </div>
      <Messagelist status={status}/>
    </div>
  )
}

export default App
