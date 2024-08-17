import './KofiButton.css'

function KofiButton() {
    return (
        <a href="https://ko-fi.com/yourusername" target="_blank" rel="noopener noreferrer">
            <button className="kofi-button">
                <img src="./public/kofiLogo.svg" alt="Ko-fi Logo" className="kofi-logo" />
                Support me on Kofi with spare gp
            </button>
        </a>
    );
  }
  
  export default KofiButton;