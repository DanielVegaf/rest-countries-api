import React, { useState, useEffect } from "react";

import * as API from '../../services/countries';
import { CountriesItem } from "../countryItem/CountriesItem";
import { FilterC } from "../filter/FilterC";

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

            <FilterC onSelect={getCountryByRegion}/>

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
