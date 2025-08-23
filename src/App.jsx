import { useState } from 'react'
import logo from './assets/logo.png'
import CounterBlock from './CounterBlock'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <div>
        <img src={logo} className="logo" alt="miercochilis logo"/>
      </div>
      <h1>Miercochilis</h1>
      <p>counter-app</p>
      <div className="card">
        <CounterBlock title="Primera vez" type="first_time" />
        <CounterBlock title="Repeticiones" type="seconds" />
        <CounterBlock title="Sin pan" type="no_bread_serving"/>
      </div>
    </>
  )
}

export default App
