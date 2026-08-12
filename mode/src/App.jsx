import { useState } from 'react'


function App() {

    const [color, setColor] = useState('black')
     return (
        <div className={`flex flex-col items-center justify-center min-h-screen  text-white`} style={{ backgroundColor: color }}>
            <div className="bg-amber-300 h-12 flex justify-center align-center w-full items-center gap-4.5"  >
                <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setColor('red')}>red</button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setColor('blue')}>blue</button>
                <button className="bg-white text-black px-4 py-2 rounded" onClick={() => setColor('white')}>white</button>
                <button className="bg-black text-white px-4 py-2 rounded" onClick={() => setColor('black')}>black</button>
            </div>

        </div>
    
  )

}

export default App
