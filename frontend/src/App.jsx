import { useEffect, useState, useRef } from 'react'
import './App.css'
import Chathead from './Chathead'
import Textbox from './Textbox';
import SearchBar from './SearchBar';
import TextInput from './TextInput';
import ShowContinue from './ShowContinue';
import ChangeName from './ChangeName';
import FlipChatbox from './FlipChatbox';
import KofiButton from './KofiButton';
import GithubButton from './GithubButton'
import DownloadButton from './DownloadButton';
import UploadButton from './UploadButton';
import DiscordButton from './DiscordButton';
import AdjustImage from './AdjustImage';

function App() {
  const [message, setMessage] = useState('');
  const [dialogue, setDialogue] = useState('lvl 99 woodcut pls');
  const [chathead, setChathead] = useState('Gnome_child');
  const [isContinueChecked, setIsContinueChecked] = useState(true);
  const [isFlipChecked, setIsFlipChecked] = useState(false);
  const [newName, setNewName] = useState('');
  const [isNameChanged, setIsNameChanged] = useState(false);
  const [image, setImage] = useState();
  const [isUploaded, setIsUploaded] = useState(false);
  const captureRef = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(data => setMessage(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <div className="App">
        <div className='left-sidebar-container'>
          <div className='top-sidebar-container'>
            <DiscordButton />
            <img id='preview-gif' src='/preview.gif' alt='preview gif'/>
          </div>
          <div className='bottom-sidebar-container'>
            <KofiButton />
            <GithubButton />
            <div className='disclaimer-container'>
              <p>For feature requests, bug reports, or any other inquiries, <a href='https://discord.gg/eFrGshRey3'>contact me on Discord</a></p>
              <p><em>This chat generator is a fan creation and is not affiliated with or endorsed by 
                Jagex Ltd. All artwork is © Jagex Ltd. and is used under fair use for the purpose 
                of parody and commentary.</em></p>
            </div>
          </div>
        </div>
        <div className="main-container">
          <div className="top-container">
          <h1 id="title">Old School Runescape Chat Generator</h1>
            <div className={`chatbox-container ${isFlipChecked ? 'flipped': ''}`} ref={captureRef} >
              <Chathead chathead={chathead} isFlipChecked={isFlipChecked} image={image} isUploaded={isUploaded}/>
              <Textbox dialogue={dialogue} chathead={chathead} isContinueChecked={isContinueChecked} newName={newName} isNameChanged={isNameChanged} setIsNameChanged={setIsNameChanged} />
            </div>
          </div>
          <div className="bottom-container">
            <div className='left-menu-container'>
              <SearchBar setChathead={setChathead} setIsNameChanged={setIsNameChanged} setIsUploaded={setIsUploaded}/>
            </div>
            <div className="right-menu-container">
              <TextInput dialogue={dialogue} setDialogue={setDialogue}/>
              <ChangeName chathead={chathead} newName={newName} setNewName={setNewName} isNameChanged={isNameChanged} setIsNameChanged={setIsNameChanged}/>
              <ShowContinue isContinueChecked={isContinueChecked} setIsContinueChecked={setIsContinueChecked}/>
              <FlipChatbox isFlipChecked={isFlipChecked} setIsFlipChecked={setIsFlipChecked}/>
              <div className='right-menu-button-container'>
                <AdjustImage />
                <UploadButton setImage={setImage} setIsUploaded={setIsUploaded}/>
                <DownloadButton captureRef={captureRef} fileName="chatbox.png"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App