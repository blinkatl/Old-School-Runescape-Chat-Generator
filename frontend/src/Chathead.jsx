import './Chathead.css'

function Chathead({ chathead, isFlipChecked, image, isUploaded }) {
    const modifiedChathead = chathead.replace(/ /g, '_');
    
    return (
        <div className="chathead-container">
            <img
                className={`chathead-image ${isFlipChecked ? 'flipped' : ''}`}
                src={isUploaded ? image : `https://osrs-chat-generator.adaptable.app/chathead/${encodeURIComponent(modifiedChathead)}.png`}
                alt="Chathead"
            />
        </div>
    )
}

export default Chathead;