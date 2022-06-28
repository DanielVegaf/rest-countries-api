import React from "react";
import { Link } from "react-router-dom";
import { Item } from './countryItem.styled';

export function CountriesItem({ countries }) {
    return (
        <Item>
                <Link to={`/country/${countries.name}`}>
                    <div className="Img">
                        <img src={countries.flags.svg} alt="" width={300} />
                    </div>
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
