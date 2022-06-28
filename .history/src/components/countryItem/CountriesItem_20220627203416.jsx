import React from "react";
import { Link } from "react-router-dom";
import { Item, ContainerImg } from './countryItem.styled';

export function CountriesItem({ countries }) {
    return (
        <Item>
                <Link to={`/country/${countries.name}`}>
                    <ContainerImg>
                        <img src={countries.flags.png} alt="" />
                    </ContainerImg>
                    <div>
                        {countries.name}
                        {countries.population}
                        {countries.region}
                        {countries.capital}
                    </div>
                </Link>
        </Item>
    );
};
