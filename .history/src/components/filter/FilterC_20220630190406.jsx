import React from "react";

export function FilterC({ onSelect }) {
    const selectHandler = (e) => {
        const regionName = e.target.value;
        onSelect(regionName);
    }

    return (
        <select onChange={selectHandler}>
            <p>Filter by Region</p>
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
