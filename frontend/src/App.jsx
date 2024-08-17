import { useEffect, useState } from 'react'
import './App.css'
import Chathead from './Chathead'
import Textbox from './Textbox';
import SearchBar from './SearchBar';
import TextInput from './TextInput';
import ShowContinue from './ShowContinue';
import ChangeName from './ChangeName';
import FlipChatbox from './FlipChatbox';

//npm run dev

function App() {
  const [message, setMessage] = useState('');
  const [dialogue, setDialogue] = useState('');
  const [chathead, setChathead] = useState('Gnome_child');
  const [isContinueChecked, setIsContinueChecked] = useState(true);
  const [isFlipChecked, setIsFlipChecked] = useState(false);
  const [newName, setNewName] = useState('');
  const [isNameChanged, setIsNameChanged] = useState(false);

  useEffect(() => {
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
            <div className={`chatbox-container ${isFlipChecked ? 'flipped': ''}`}>
              <Chathead chathead={chathead} isFlipChecked={isFlipChecked}/>
              <Textbox dialogue={dialogue} chathead={chathead} isContinueChecked={isContinueChecked} newName={newName} isNameChanged={isNameChanged} setIsNameChanged={setIsNameChanged}/>
            </div>
          </div>
          <div className="bottom-container">
            <div className='left-menu-container'>
              <SearchBar setChathead={setChathead} setIsNameChanged={setIsNameChanged}/>
            </div>
            <div className="right-menu-container">
              <TextInput dialogue={dialogue} handleInputChange={handleInputChange}/>
              <ChangeName chathead={chathead} newName={newName} setNewName={setNewName} isNameChanged={isNameChanged} setIsNameChanged={setIsNameChanged}/>
              <ShowContinue isContinueChecked={isContinueChecked} setIsContinueChecked={setIsContinueChecked}/>
              <FlipChatbox isFlipChecked={isFlipChecked} setIsFlipChecked={setIsFlipChecked}/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
