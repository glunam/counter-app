import { useState } from 'react'
import logo from './assets/logo.png'
import CounterBlock from './CounterBlock'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <div className="logo-div">
        <img src={logo} height="120px" alt="miercochilis logo"/>
      </div>
      <div className="card">
        <CounterBlock title="Primera vez" counterType="first_time" />
        <CounterBlock title="Repeticiones" counterType="seconds" />
        <CounterBlock title="Sin pan" counterType="no_bread_serving"/>
      </div>
    </>
  )
}

export default App
