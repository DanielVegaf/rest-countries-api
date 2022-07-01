import React, { useState, useEffect } from "react";

import * as API from '../../services/countries';
import { CountriesItem } from "../countryItem/CountriesItem";

export function CountryList() {

    const [country, setCountry] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        API.getAllCountries().then(setCountry).catch(console.log);
    }, []);

    const SearchCountry = (searchBy) => {
        setSearch(searchBy);
    }

    return (
        <>
            <input type="text"
                placeholder="buscar"
                onChange={(e) => SearchCountry(e.target.value)}
            />

            <select onChange={selectHandler}>
                <option className="option">Filter by Region</option>
                <option className="option" value="Africa">
                    Africa
                </option>
                <option className="option" value="America">
                    America
                </option>
                <option className="option" value="Asia">
                    Asia
                </option>
                <option className="option" value="Europe">
                    Europe
                </option>
                <option className="option" value="Oceania">
                    Oceania
                </option>
            </select>



            <div>
                {
                    country.map((countries, numericCode) => {
                        if (countries.name.toLowerCase().includes(search.toLowerCase())) {
                            return (
                                <div key={numericCode}>
                                    <CountriesItem countries={countries} />
                                </div>
                            )
                        }
                    })
                }
            </div>
        </>
    );
};
