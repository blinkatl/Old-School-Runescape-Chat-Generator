import './Chathead.css'

function Chathead({ chathead, isFlipChecked }) {
    // useEffect(() => {
    //     fetch('http://localhost:3000/chathead/Arvel.png')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data); // Check what data you're receiving
    //             setChathead(data);
    //         })
    //         .catch(error => console.error('Error fetching chathead:', error));
    // }, []);
    const modifiedChathead = chathead.replace(/ /g, '_');
    
    return (
        <div className="chathead-container">
            <img
                className={`chathead-image ${isFlipChecked ? 'flipped' : ''}`}
                src={`http://localhost:3000/chathead/${modifiedChathead}.png`}
                alt="Chathead"
            />
        </div>
    )
}

export default Chathead;