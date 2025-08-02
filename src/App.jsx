import { useState } from 'react'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  // All functions grouped together
  function MyButton({ buttonText, count, onClick }) {
    // If count and onClick are provided, use shared state
    if (count !== undefined && onClick) {
      return (
        <button onClick={onClick}>
          {buttonText || "Button"} Clicked {count} times
        </button>
      );
    }
    
    // Otherwise, use independent state
    const [localCount, setLocalCount] = useState(0);
    function handleClick() {
      setLocalCount(localCount + 1);
    }

    return (
      <button onClick={handleClick}>
        {buttonText || "I am the BEST button in the WORLD!"} Clicked {localCount} times
      </button>
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
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
  ];

  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
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
        
        <div className="counters-section">
          <h2>Counters that update separately</h2>
          <MyButton buttonText="First Counter" />
          <MyButton buttonText="Second Counter" />
        </div>
        
        <div className="shared-counters-section">
          <h2>Counters that update together</h2>
          <MyButton buttonText="Shared Counter 1" count={count} onClick={() => setCount(count + 1)} />
          <MyButton buttonText="Shared Counter 2" count={count} onClick={() => setCount(count + 1)} />
        </div>
        
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </header>
    </div>
  )
}




