import { useState } from "react"

function CounterBlock({title, counterType}){

  const [count, setCount] = useState(0);
  const [lastUpdate, setLastUpdate] = useState("");

  const getFormattedDate = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");
    const seconds = String(currentDate.getSeconds()).padStart(2, "0");
    return `${year}-${month}-${day}D${hours}:${minutes}:${seconds}`;
  }

  const updateCounter = (updateType, newCount) => {
    const date = getFormattedDate();
    setCount(newCount);
    setLastUpdate(date);
    console.log(`${updateType} ${counterType} ${date}`);
  }

  const handleIncrement = () => {
    updateCounter("ADD", count + 1);
  }

  const handleDecrement = () => {
    if(count > 0){
      updateCounter("REM", count - 1);
    }
    else{
      console.log("ERR [Count is already 0. Cannot decrement.]");
    }
  }

  const handleManualSet = () => {
    const userInput = prompt("Ingresa un nuevo valor para el contador:")
    if(userInput !== null){
      const valueToSet = parseInt(userInput);
      if(!isNaN(valueToSet) && valueToSet >= 0){
        console.log("[SET] " + valueToSet.toString() + " " + getFormattedDate());
        setCount(valueToSet);
      }
      else{
        alert("Valor inválido.")
      }
    }
  }

  return (
    <div className="counter-block">
        <h3>{title}</h3>
        <h2> {count} </h2>
        <div className="button-group">
          <button onClick={handleDecrement} className = "btn decrement" disabled={count <= 0}>-</button>
          <button onClick={handleIncrement} className = "btn increment">+</button>
          <button onClick={handleManualSet} className = "btn manualset">?</button>
        </div>
    </div>
  )
}

export default CounterBlock