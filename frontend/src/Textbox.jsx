import "./Textbox.css"

function Textbox({ dialogue, chathead, isChecked, newName, isNameChanged }) {
    const modifiedChathead = chathead.replace(/_/g, ' ');

    return(
        <div className="textbox-container">
            <p id="name">{isNameChanged ? newName : modifiedChathead}</p>
            <p id="dialogue">{dialogue}</p>
            {isChecked ? (
                <p id="continue">Click here to continue</p>
            ): (
                <></>
            )}
            
        </div>
    )
}

export default Textbox;