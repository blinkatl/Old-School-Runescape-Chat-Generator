import "./Textbox.css"

<<<<<<< HEAD
function Textbox({ dialogue, chathead, isChecked, newName, isNameChanged }) {
=======
function Textbox({ dialogue, chathead, isChecked }) {
>>>>>>> 7051fa81c5c6670f218ac531880e2d3e00044d8a
    const modifiedChathead = chathead.replace(/_/g, ' ');

    return(
        <div className="textbox-container">
<<<<<<< HEAD
            <p id="name">{isNameChanged ? newName : modifiedChathead}</p>
=======
            <p id="name">{modifiedChathead}</p>
>>>>>>> 7051fa81c5c6670f218ac531880e2d3e00044d8a
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