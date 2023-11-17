import { useState } from 'react'
import './App.css'
import DrumMachine from './components/DrumMachine'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>      
      <h1>fepec&apos;s drum machine</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <DrumMachine />
    </>
  )
}

export default App
