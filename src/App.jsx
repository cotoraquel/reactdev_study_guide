import { useState } from 'react'
import './App.css'
import Mybutton from './Lessons/Lesson1.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React Study Guide</h1>
        <p>Follow along with react.dev lessons!</p>
        
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        
        <div className="lesson-section">
          <h2>Lesson 1 Component:</h2>
          <Mybutton />
        </div>
        
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </header>
    </div>
  )
}

export default App 