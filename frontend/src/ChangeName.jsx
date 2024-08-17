import { useState } from "react";

function ChangeName({chathead, newName, setNewName, isNameChanged, setIsNameChanged}) {
    const modifiedChathead = chathead.replace(/_/g, ' ');

    const handleInputChange = (event) => {
        setNewName(event.target.value);
        if (!isNameChanged) {
            setIsNameChanged(true);
        }
    };

    return (
        <div className="change-name-container">
            <input
                type="text"
                value={isNameChanged ? newName : modifiedChathead}
                onChange={handleInputChange}
                id="change-name-input"
            />
        </div>
    )
}

export default ChangeName