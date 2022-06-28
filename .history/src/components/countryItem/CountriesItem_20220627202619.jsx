import React from "react";
import { Link } from "react-router-dom";


export function CountriesItem({ countries }) {
    return (
        <>
            <h1>
                <Link to={`/country/${countries.name}`}>
                    <img src={countries.flags.svg} alt="" width={300}/>
                    {countries.name}
                    {countries.population}
                    {countries.region}
                    {countries.capital}
                </Link>

            </h1>
        </>
    );
};
