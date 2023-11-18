import { useState } from 'react'
import './App.css'
import DrumMachine from './components/DrumMachine'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>      
      <div className="container">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <DrumMachine />
    </>
  )
}

export default App
