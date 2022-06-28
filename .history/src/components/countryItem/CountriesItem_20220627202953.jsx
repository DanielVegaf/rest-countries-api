import React from "react";
import { Link } from "react-router-dom";
import {Item } from './countryItem.styled';

export function CountriesItem({ countries }) {
    return (
        <Item>
            <div>
                <Link to={`/country/${countries.name}`}>
                    <img src={countries.flags.svg} alt="" width={300}/>
                    {countries.name}
                    {countries.population}
                    {countries.region}
                    {countries.capital}
                </Link>

            </div>
        </Item>
    );
};
