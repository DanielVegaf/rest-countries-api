import React from "react";

export function FilterC({ onSelect }) {
    const selectHandler = (e) => {
        const regionName = e.target.value;
        onSelect(regionName);
    }

    return (
        <select onChange={selectHandler}>
            <option value="/">Filter by Region</option>
            <option value="Africa">
                Africa
            </option>
            <option value="Americas">
                Americas
            </option>
            <option value="Asia">
                Asia
            </option>
            <option value="Europe">
                Europe
            </option>
            <option value="Oceania">
                Oceania
            </option>
        </select>
    );
};
