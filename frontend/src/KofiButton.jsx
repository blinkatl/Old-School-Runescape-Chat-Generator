import './KofiButton.css'

function KofiButton() {
    return (
        <a href="https://ko-fi.com/blinkatl" target="_blank" rel="noopener noreferrer">
            <button className="kofi-button">
                <img src="/kofiLogo.svg" alt="Ko-fi Logo" className="kofi-logo" />
                Support me on Kofi
            </button>
        </a>
    );
  }
  
  export default KofiButton;