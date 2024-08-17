import domtoimage from 'dom-to-image';
import './DownloadButton.css'

function DownloadButton({ captureRef, fileName = 'chatbox.png' }) {

    const handleDownload = async () => {
        if (captureRef.current) {
            domtoimage.toPng(captureRef.current)
                .then(function (dataUrl) {
                    const link = document.createElement('a');
                    link.download = fileName;
                    link.href = dataUrl;
                    link.click();
                })
                .catch(function (error) {
                    console.error('Error capturing the chatbox:', error);
                });
        }
    };

    return (
        <button id="download-button" onClick={handleDownload}>
            Download
        </button>
    );
}

export default DownloadButton;
