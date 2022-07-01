import React, { useState, useEffect } from "react";

import * as API from '../../services/countries';
import { CountriesItem } from "../countryItem/CountriesItem";
import { FilterRegion } from "../filter/FilterRegion";

export function CountryList() {

    const [country, setCountry] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        API.getAllCountries().then(setCountry).catch(console.log);
    }, []);

    const SearchCountry = (searchBy) => {
        setSearch(searchBy);
    }


    const getCountryByRegion = async (regionName) => {
        try {
            const response = await fetch(`https://restcountries.com/v2/region/${regionName}`);
            const data = await response.json();
            console.log(data);
            setCountry(data)
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

            <FilterRegion onSelect={getCountryByRegion}/>

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
