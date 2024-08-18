import { useState } from 'react'
import './TextInput.css'

function TextInput({dialogue, setDialogue}) {

    const handleInputChange = (event) => {
        setDialogue(event.target.value);
      }

    return (
        <div className='text-input-container'>
            <p className="input-header">Dialogue</p>
            <textarea 
                id="dialogue"
                name="dialogue"
                value={dialogue}
                onChange={handleInputChange}
                placeholder="Dialogue"
                className="dialogue-text"
            />
        </div>
    )
}

export default TextInput;