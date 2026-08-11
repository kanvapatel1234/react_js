import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white gap-5">
      <h1 className="text-6xl font-bold bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
        Hello Tailwind
      </h1>

      <p className="text-xl text-gray-400">
        Tailwind CSS is working!
      </p>

      <button className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition duration-200">
        Click Me
      </button>
    </div>
  )
}

export default App


