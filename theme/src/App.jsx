import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'


function App() {

  const [color, setColor] = useState('black')

  const [theme, setTheme] = useState("dark")

  const lightTheme = () => {
    setColor('white')
    setTheme("light")
  }

  const darkTheme = () => {
    setColor('black')
    setTheme("dark")
  }
  

  return (
    <div className=' text-white h-screen flex flex-col items-center' style={{backgroundColor: color,color: theme === 'dark' ? 'white' : 'black'}}>
            <button className="absolute right-5 top-5 px-4 py-2 rounded-md " style={{color: theme === 'dark' ? 'black' : 'white',backgroundColor:theme==='dark'?'white':'black'}}onClick={()=>{theme==="light" ? darkTheme() : lightTheme()}}>{theme}</button>
<br></br> 
<div className='w-100 h-screen'>      <p className='mt-18'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempora praesentium, magni cupiditate unde fugiat quia facilis laudantium sapiente, sint saepe, eum dolorem tempore ex eos nisi. Illo, repellat ex?</p>
<p className='mt-18'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempora praesentium, magni cupiditate unde fugiat quia facilis laudantium sapiente, sint saepe, eum dolorem tempore ex eos nisi. Illo, repellat ex?</p>
<p className='mt-18'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempora praesentium, magni cupiditate unde fugiat quia facilis laudantium sapiente, sint saepe, eum dolorem tempore ex eos nisi. Illo, repellat ex?</p>

  </div>
      
    </div>
  )
}

export default App
