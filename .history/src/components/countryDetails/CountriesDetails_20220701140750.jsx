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

    useEffect(()=> {
        document.title = `Country | ${countryName ?? ""}`
    },[country]);

    return (
        <>
            <Link to="/">Volver</Link>

            {
                country.map((countri, numericCode) => {
                    return (
                        <div key={numericCode}>
                        <img src={countri.flags.png} alt={countri.name} />
                            <p>{countri.nativeName}</p>
                            <p>{countri.population}</p>
                            <p>{countri.region}</p>
                            <p>{countri.subregion}</p>
                            <p>{countri.capital}</p>

                            <p>{countri.topLevelDomain[0]}</p>
                            <p>{countri.currencies.code[0]}</p>
                            <p></p>
                        </div>
                    )
                })
            }
        </>
    );
};
