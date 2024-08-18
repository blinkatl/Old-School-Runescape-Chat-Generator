import { useState, useEffect } from 'react'
import './AdjustImage.css'
import './Chathead.css'

function AdjustImage() {
    const [height, setHeight] = useState(125);
    const [width, setWidth] = useState(105);
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    
    const myFunction = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    };

    const handleHeightChange = (event) => {
        setHeight(event.target.value);
        document.documentElement.style.setProperty('--img-height', `${event.target.value}px`);
    };

    const handleWidthChange = (event) => {
        setWidth(event.target.value);
        document.documentElement.style.setProperty('--img-width', `${event.target.value}px`);
    };

    const handleXChange = (event) => {
        setX(event.target.value);
        document.documentElement.style.setProperty('--img-x', `${event.target.value}px`);
    };

    const handleYChange = (event) => {
        setY(event.target.value);
        document.documentElement.style.setProperty('--img-y', `${event.target.value}px`);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.matches('.dropbtn') && !event.target.closest('.dropdown-content')) {
                const dropdowns = document.getElementsByClassName("dropdown-content");
                for (let i = 0; i < dropdowns.length; i++) {
                    const openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        };

        window.addEventListener('click', handleClickOutside);

        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="dropdown">
            <button onClick={myFunction} className="dropbtn">Adjust Image</button>
            <div id="myDropdown" className="dropdown-content">
                <div className="adjust-size">
                    <p>Height - {height}px</p>
                    <div className="slidecontainer">
                        <input 
                            type="range" 
                            min="50" 
                            max="200" 
                            value={height} 
                            className="slider" 
                            id="height" 
                            onChange={handleHeightChange} 
                        />
                    </div>
                    <p>Width -{width}px</p>
                    <div className="slidecontainer">
                        <input 
                            type="range" 
                            min="50" 
                            max="200" 
                            value={width} 
                            className="slider" 
                            id="width" 
                            onChange={handleWidthChange} 
                        />
                    </div>
                </div>
                <div className='adjust-position'>
                    <p>X - {x}px</p>
                    <div className="slidecontainer">
                        <input 
                            type="range" 
                            min="-50" 
                            max="50" 
                            value={x} 
                            className="slider" 
                            id="x" 
                            onChange={handleXChange} 
                        />
                    </div>
                    <p>Y - {y}px</p>
                    <div className="slidecontainer">
                        <input 
                            type="range" 
                            min="-50" 
                            max="50" 
                            value={y} 
                            className="slider" 
                            id="y" 
                            onChange={handleYChange} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdjustImage;
