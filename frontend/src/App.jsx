import { useEffect, useState } from 'react'
import './App.css'
import Chathead from './Chathead'
import Textbox from './Textbox';
import SearchBar from './SearchBar';
import TextInput from './TextInput';
import ShowContinue from './ShowContinue';

//npm run dev

function App() {
  const [message, setMessage] = useState('');
  const [dialogue, setDialogue] = useState('');
  const [chathead, setChathead] = useState('Gnome_child');
  const [isChecked, setIsChecked] = useState(true);

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
              <Chathead chathead={chathead}/>
              <Textbox dialogue={dialogue} chathead={chathead} isChecked={isChecked}/>
            </div>
          </div>
          <div className="bottom-container">
            <div className='left-menu-container'>
              <SearchBar setChathead={setChathead}/>
            </div>
            <div className="right-menu-container">
              <TextInput dialogue={dialogue} handleInputChange={handleInputChange}/>
              <ShowContinue isChecked={isChecked} setIsChecked={setIsChecked}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
