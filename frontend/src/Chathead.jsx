import './Chathead.css'

function Chathead({ chathead, isFlipChecked, image, isUploaded }) {
    const modifiedChathead = chathead.replace(/ /g, '_');
    
    return (
        <div className="chathead-container">
            <img
                className={`chathead-image ${isFlipChecked ? 'flipped' : ''}`}
                src={isUploaded ? image : `http://osrs-chat-generator.adaptable.app/chathead/${encodeURIComponentmodifiedChathead}.png`}
                alt="Chathead"
            />
        </div>
    )
}

export default Chathead;