
import {  Value } from './Value.jsx'



function App() {


  const { counter, add, minus } = Value()

  return (
    <>
    <h1>counter</h1>
    <button onClick={add}>+:{counter}</button>
    <button onClick={minus}>-{counter}</button>
    <p>{counter}</p>
    

    </>
  )
}

export default App
