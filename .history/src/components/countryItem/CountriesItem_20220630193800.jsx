import React from "react";
import { Link } from "react-router-dom";

import {Content}  from './countryItem.styled';

export function CountriesItem({ countries }) {
    return (
        <>
                <Link to={`/country/${countries.name}`}>
                    <div>
                        <img src={countries.flags.png} alt="" />
                    </div>
                    <div>
                        {countries.name}
                        {countries.population}
                        {countries.region}
                        {countries.capital}
                    </div>
                </Link>
        </>
    );
};
