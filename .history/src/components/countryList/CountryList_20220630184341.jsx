import React, { useState, useEffect } from "react";

import * as API from '../../services/countries';
import { CountriesItem } from "../countryItem/CountriesItem";

export function CountryList() {

    const [country, setCountry] = useState([]);
    const [search, setSearch] = useState('');
    const [filterRegion, setfilterRegion] = useState("");

    useEffect(() => {
        API.getAllCountries().then(setCountry).catch(console.log);
    }, []);

    const SearchCountry = (searchBy) => {
        setSearch(searchBy);
    }

    
        const getCountryByRegion = async (regionName) => {
            try {
                const response = await fetch(`${API_URL}/region/${regionName}`);
                const data = await response.json();
                console.log(data);
                return data;
            } catch (error) {
                console.log(error);
            }
        }
    

    return (
        <>
            <input type="text"
                placeholder="buscar"
                onChange={(e) => SearchCountry(e.target.value)}
            />

            <select onChange={selectHandler}>
                <option>Filter by Region</option>
                <option value="Africa">
                    Africa
                </option>
                <option value="America">
                    America
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



            <div>
                {
                    country.map((countries, numericCode) => {
                        if (countries.name.toLowerCase().includes(search.toLowerCase()) | (countries.region.includes(selectHandler))) {
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
