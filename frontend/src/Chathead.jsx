import { useEffect, useState } from 'react'
import './Chathead.css'

function Chathead() {
    // const [chathead, setChathead] = useState();

    // useEffect(() => {
    //     fetch('http://localhost:3000/chathead/Arvel.png')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data); // Check what data you're receiving
    //             setChathead(data);
    //         })
    //         .catch(error => console.error('Error fetching chathead:', error));
    // }, []);

    return (
        <div className="chathead-container">
            <img className="chathead-image" src="http://localhost:3000/chathead/Arvel.png"
                alt="Chathead" />
        </div>
    )
}

export default Chathead;