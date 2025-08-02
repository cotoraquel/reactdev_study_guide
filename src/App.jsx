import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  // All functions grouped together
  function MyButton() {
    return (
      <button>I am the BEST button in the WORLD</button>
    );
  }

  function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <p>Hello there.<br /> How do you do my friend?</p>
      </>
    );
  }

  function Profile() {
    return (
      <>
        <h1>{user.name}</h1>
        <img
          className="avatar"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          style={{
            width: user.imageSize,
            height: user.imageSize,
          }}
        />
      </>
    );
  }

  // Data and variables
  const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
  };

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );

  // Main return statement
  return (
    <div className="App">
      <header className="App-header">
        <AboutPage />
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
        
        <div className="profile-section">
          <h2>Profile Component:</h2>
          <Profile />
        </div>
        
        <div className="list-section">
          <h2>Products List:</h2>
          <ul>{listItems}</ul>
        </div>
        
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </header>
    </div>
  )
}




