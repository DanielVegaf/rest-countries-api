import React from "react";
import { Link } from "react-router-dom";

import {Content, Linked, Img}  from './countryItem.styled';

export function CountriesItem({ countries }) {
    return (
        <Content>
                <Linked to={`/country/${countries.name}`}>
                    <Img>
                        <img src={countries.flags.png} alt=""/>
                    </Img>
                    <div>
                        {countries.name}
                        {countries.population}
                        {countries.region}
                        {countries.capital}
                    </div>
                </Linked>
        </Content>
    );
};
