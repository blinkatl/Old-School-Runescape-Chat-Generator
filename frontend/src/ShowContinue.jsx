import './ShowContinue.css'

function ShowContinue({ isChecked, setIsChecked }) {
    
<<<<<<< HEAD
=======

>>>>>>> 7051fa81c5c6670f218ac531880e2d3e00044d8a
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