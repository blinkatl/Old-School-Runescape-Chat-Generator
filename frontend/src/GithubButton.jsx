import './GithubButton.css'

function GithubButton() {
    return (
        <a href="https://github.com/blinkatl/Old-School-Runescape-Chat-Generator" target="_blank" rel="noopener noreferrer">
            <button className="github-button">
                <img src="/githubLogo.svg" alt="Github Logo" className="github-logo" />
                © 2024 blinkatl
            </button>
        </a>
    );
  }
  
  export default GithubButton;