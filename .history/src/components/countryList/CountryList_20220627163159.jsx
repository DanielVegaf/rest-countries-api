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
        </>
    );
};
