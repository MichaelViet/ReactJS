import React from 'react';

const cityList = [
    "Chicago",
    "New York",
    "Los-Angeles",
];

function CitySelector() {
    return (
        <select>
            {cityList.map(city => (
                <option value={city}>{city}</option>
            ))}
        </select>
    );
}

export default CitySelector;