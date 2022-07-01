import React from "react";
import { Link } from "react-router-dom";

import {Content, Linked, Img, Description}  from './countryItem.styled';

export function CountriesItem({ countries }) {
    return (
        <Content>
                <Linked to={`/country/${countries.name}`}>
                    <Img>
                        <img src={countries.flags.png} alt=""/>
                    </Img>
                    <Description>
                        <h3>{countries.name}</h3>
                        <p>Population: {countries.population}</p>
                        <p>Region: {countries.region}</p>
                        <p>Capital: {countries.capital}</p>
                    </Description>
                </Linked>
        </Content>
    );
};
