import { useState } from 'react'
import './TextInput.css'

function TextInput({dialogue, handleInputChange}) {
    return (
        <>
            <input type="text" id="dialogue" name="dialogue" value={dialogue} onChange={handleInputChange}/>
        </>
    )
}

export default TextInput;