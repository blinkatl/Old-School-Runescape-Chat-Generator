import "./Textbox.css"

function Textbox({dialogue}) {
    return(
        <div className="textbox-container">
            <p>{dialogue}</p>
        </div>
    )
}

export default Textbox;