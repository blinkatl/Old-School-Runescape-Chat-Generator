import "./Textbox.css"

function Textbox({dialogue}) {
    return(
        <div className="textbox-container">
            <p id="name">Character name</p>
            <p>{dialogue}</p>
            <p id="continue">Click here to continue</p>
        </div>
    )
}

export default Textbox;