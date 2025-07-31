import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  
function MyButton() {
  return (
    <button>I am the BEST button in the WORLD</button>
  );
}

function AboutPage() {
  return (
    <div>
      <h1>About</h1>
      <p>Hello there.<br /> How do you do my friend?</p>
    </div>
  );
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React Study Guide</h1>
        <p>Follow along with react.dev lessons!</p>
        
        {/* <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div> */}
        
        <div className="lesson-section">
          <h2>Lesson 1 Component:</h2>
          <MyButton />
        </div>
        
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </header>
    </div>
  )
}


export default App 