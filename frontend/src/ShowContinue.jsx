import './ShowContinue.css'

function ShowContinue({ isContinueChecked, setIsContinueChecked }) {
    
    const handleCheckboxChange = (event) => {
        setIsContinueChecked(event.target.checked);
    };

    return (
        <div className="show-continue-container">
            <label>
                <input 
                    type="checkbox" 
                    checked={isContinueChecked} 
                    onChange={handleCheckboxChange} 
                    className="checkbox"
                />
            </label>
            <p>Show "Click here to continue"</p>
        </div>
    )
}

export default ShowContinue;