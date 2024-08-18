import './DiscordButton.css'

function DiscordButton() {
    return (
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
            <button className="discord-button">
                <img src="/discordLogo.svg" alt="Discord Logo" className="discord-logo" />
                Add me as a bot on Discord
            </button>
        </a>
    )
}

export default DiscordButton;