import React from "react";
import { Link } from "react-router-dom";

import {Content}  from './countryItem.styled';

export function CountriesItem({ countries }) {
    return (
        <Content>
                <Link to={`/country/${countries.name}`}>
                    <div>
                        <img src={countries.flags.png} alt="" width={250} />
                    </div>
                    <div>
                        {countries.name}
                        {countries.population}
                        {countries.region}
                        {countries.capital}
                    </div>
                </Link>
        </Content>
    );
};
