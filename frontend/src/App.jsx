import { useEffect, useState } from 'react'
import './App.css'
import Chathead from './Chathead'
import Textbox from './Textbox';
import SearchBar from './SearchBar';
import TextInput from './TextInput';

//npm run dev

function App() {
  const [message, setMessage] = useState('');
  const [dialogue, setDialogue] = useState('');

  useEffect(() => {
    // Fetch data from the backend
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleInputChange = (event) => {
    setDialogue(event.target.value);
  }

  return (
    <>
      <div className="App">
        <div className="main-container">
          <div className="top-container">
            <div className="chatbox-container">
              <Chathead />
              <Textbox dialogue={dialogue}/>
            </div>
          </div>
          <div className="bottom-container">
            <SearchBar />
            <TextInput dialogue={dialogue} handleInputChange={handleInputChange}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
