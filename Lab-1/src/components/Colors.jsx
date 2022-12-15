import { useState } from 'react';


const ColorPicker = () => {
    const [selectedColor, setSelectedColor] = useState('black')

    function handleColorChange(event) {
        setSelectedColor(event.target.value);
    }

    return (
        <>
            <h1 style={{ color: selectedColor }}>{`Color is`}</h1>
            <select onChange={handleColorChange}>
                <option value="Black">Black</option>
                <option value="Red">Red</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
            </select>
        </>
    );
}

export default ColorPicker;