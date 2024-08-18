import { useRef } from 'react'
import './UploadButton.css'

function UploadButton({ setImage, setIsUploaded }) {
    const fileInputRef = useRef(null);

    const handleUpload = (event) => {
        const image = event.target.files[0];
        const imageUrl = URL.createObjectURL(image);
        setImage(imageUrl);
        setIsUploaded(true);
    }

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <>
            <input
                type="file"
                accept="image/*"
                onChange={handleUpload}
                ref={fileInputRef}
                style={{ display: 'none' }}
            />
            <button id="upload-button" type="button" onClick={handleButtonClick}>
                Upload
            </button>
        </>
    )
}

export default UploadButton;