import { useState } from 'react'

function App() {

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  return (
    <div
      className="min-h-screen px-6 py-6"
      style={{
        backgroundColor: theme === 'dark' ? 'black' : 'white',
        color: theme === 'dark' ? 'white' : 'black'
      }}
    >

      {/* Button */}
      <button
        className="rounded-lg px-5 py-2.5 font-semibold shadow-md transition hover:scale-105"
        style={{
          backgroundColor: theme === 'dark' ? 'white' : 'black',
          color: theme === 'dark' ? 'black' : 'white'
        }}
        onClick={toggleTheme}
      >
        {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
      </button>

      {/* Paragraph */}
      <p className="mx-auto mt-20 max-w-xl text-center text-lg leading-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Assumenda repudiandae quidem ex dolores dolor facere fugiat
        rem consequuntur necessitatibus ad ut, similique quo minus?
        Doloribus enim dolorum nam assumenda beatae.
      </p>
            <p className="mx-auto mt-20 max-w-xl text-center text-lg leading-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Assumenda repudiandae quidem ex dolores dolor facere fugiat
        rem consequuntur necessitatibus ad ut, similique quo minus?
        Doloribus enim dolorum nam assumenda beatae.
      </p>
            <p className="mx-auto mt-20 max-w-xl text-center text-lg leading-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Assumenda repudiandae quidem ex dolores dolor facere fugiat
        rem consequuntur necessitatibus ad ut, similique quo minus?
        Doloribus enim dolorum nam assumenda beatae.
      </p>

    </div>
  )
}

export default App