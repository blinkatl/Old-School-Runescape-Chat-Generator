import './FlipChatbox.css'

function FlipChatbox({ isFlipChecked, setIsFlipChecked }) {

    const handleCheckboxChange = (event) => {
        setIsFlipChecked(event.target.checked);
    };

    return (
        <div className="flip-chatbox-container">
            <label>
                <input 
                    type="checkbox" 
                    checked={isFlipChecked}
                    onChange={handleCheckboxChange} 
                    className="checkbox"
                />
            </label>
            <p>Flip Interface</p>
        </div>
    )
}

export default FlipChatbox;