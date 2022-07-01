import React from "react";
import { Link } from "react-router-dom";

import {Content, Img}  from './countryItem.styled';

export function CountriesItem({ countries }) {
    return (
        <Content>
                <Link to={`/country/${countries.name}`}>
                    <Img>
                        <img src={countries.flags.png} alt="" width={250} />
                    </Img>
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
