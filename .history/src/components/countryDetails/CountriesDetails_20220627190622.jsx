import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import * as API from '../../services/countries';

export function CountriesDetails() {

    const [country, setCountry] = useState([]);

    const { countryName } = useParams();

    useEffect(() => {
        API.getCountryByName(countryName)
            .then(setCountry)
            .catch(console.log);
    }, [countryName]);



    return (
        <>
            <Link to="/">Volver</Link>

            {
                country.map((countri, numericCode) => {
                    return (
                        <div key={numericCode}>
                            <p>{countri.name}</p>
                            <p>{countri.population}</p>
                        </div>
                    )
                })
            }
        </>
    );
};
