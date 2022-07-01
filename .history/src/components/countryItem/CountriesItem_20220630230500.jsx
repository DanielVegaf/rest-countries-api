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
                        <p> <span>Population:</span>  {countries.population}</p>
                        <p> <span>Region:</span>  {countries.region}</p>
                        <p> <span>Capital:</span>{countries.capital}</p>
                    </Description>
                </Linked>
        </Content>
    );
};
