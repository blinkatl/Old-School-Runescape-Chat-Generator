import { useState } from 'react'
import './TextInput.css'

function TextInput({dialogue, handleInputChange}) {
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