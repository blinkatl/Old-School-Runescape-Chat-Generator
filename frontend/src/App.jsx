import { useEffect, useState } from 'react'
import './App.css'
import Chathead from './Chathead'
import Textbox from './Textbox';
import SearchBar from './Searchbar';

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
          <div className="top-container">
            <div className="chatbox-container">
              <Chathead />
              <Textbox />
            </div>
          </div>
          <div className="bottom-container">
            <SearchBar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App
