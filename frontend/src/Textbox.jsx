import "./Textbox.css"

function Textbox({dialogue, chathead}) {
    const modifiedChathead = chathead.replace(/_/g, ' ');

    return(
        <div className="textbox-container">
            <p id="name">{modifiedChathead}</p>
            <p id="dialogue">{dialogue}</p>
            <p id="continue">Click here to continue</p>
        </div>
    )
}

export default Textbox;