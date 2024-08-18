import './Chathead.css'

function Chathead({ chathead, isFlipChecked, image, isUploaded }) {
    const modifiedChathead = chathead.replace(/ /g, '_');
    
    return (
        <div className="chathead-container">
            <img
                className={`chathead-image ${isFlipChecked ? 'flipped' : ''}`}
                // src={`http://localhost:3000/chathead/${modifiedChathead}.png`}
                src={isUploaded ? image : `http://localhost:3000/chathead/${modifiedChathead}.png`}
                alt="Chathead"
            />
        </div>
    )
}

export default Chathead;