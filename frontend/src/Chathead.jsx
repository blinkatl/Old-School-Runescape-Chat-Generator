import './Chathead.css'
import { API_BASE_URL } from "./config";

function Chathead({ chathead, isFlipChecked, image, isUploaded }) {
    const modifiedChathead = chathead.replace(/ /g, '_');
    
    return (
        <div className="chathead-container">
            <img
                className={`chathead-image ${isFlipChecked ? 'flipped' : ''}`}
                src={isUploaded ? image : `${API_BASE_URL}/${encodeURIComponent(modifiedChathead)}.png`}
                alt="Chathead"
            />
        </div>
    )
}

export default Chathead;