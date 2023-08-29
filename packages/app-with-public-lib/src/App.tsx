import { useState, ChangeEvent } from 'react'
import { greet } from 'https://unpkg.com/@romanenko.pavlo/my-library@0.0.1/dist/my-library.js'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [username, setUsername] = useState<string>('');
  const [greeting, setGreeting] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleGreetClick = () => {
    const message = greet(username || 'user');
    setGreeting(message);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
          <div style={{"paddingBottom": '20px'}}>
            <input
              type="text"
              value={username}
              onChange={handleInputChange}
              placeholder="Enter your username"
            />
          </div>
          <button onClick={handleGreetClick}>Greet</button>
          <p>{greeting}</p>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
