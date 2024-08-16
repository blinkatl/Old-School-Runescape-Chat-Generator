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
                Show "Click here to coninue"
            </label>
        </div>
    )
}

export default ShowContinue;