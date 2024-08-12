import { useEffect, useState } from 'react'
import './App.css'

//npm run dev

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div className="App">
        <div className="main-container">
          
        </div>
      </div>
    </>
  );
}

export default App

