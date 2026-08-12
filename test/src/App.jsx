import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


function App() {
  const [count, setCount] = useState(15)
  

  return (
    <div className="flex flex-col items-center  min-h-screen bg-black text-white">

      <p className="text-3xl font-bold mb-4">Welcome to Vite + React + Tailwind CSS</p>
      <button onClick={()=>{
        if(count<30){
          setCount(count+1)
        }
      }} className="bg-blue-500 text-white px-4 py-2 rounded">
        add
      </button>
      <button onClick={()=>{
        if(count>0){
          setCount(count-1)
        }
      }} className="bg-blue-500 text-white px-4 py-2 rounded">
        sub
      </button>

      <p className="text-2xl font-semibold mt-4">Count: {count} {count===30 && " (Maximum reached!)" } {count===0 && " (Minimum reached!)" }</p>

      
    </div>

  )
}

export default App
