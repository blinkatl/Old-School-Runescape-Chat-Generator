import './ShowContinue.css'

function ShowContinue({ isChecked, setIsChecked }) {
    
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <div className="show-continue-container">
            <label>
                <input 
                    type="checkbox" 
                    checked={isChecked} 
                    onChange={handleCheckboxChange} 
                    className="continue-checkbox"
                />
            </label>
            <p>Show "Click here to continue"</p>
        </div>
    )
}

export default ShowContinue;