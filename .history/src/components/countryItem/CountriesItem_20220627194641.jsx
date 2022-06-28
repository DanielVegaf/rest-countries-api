import React from "react";
import { Link } from "react-router-dom";

import {GridContainer, Grid} from './countryItem.styled';

export function CountriesItem({ countries }) {
    return (
        <GridContainer>
            <Grid>
                <Link to={`/country/${countries.name}`}>
                    <img src={countries.flags.svg} alt=""/>
                    {countries.name}
                    {countries.population}
                    {countries.region}
                    {countries.capital}
                </Link>

            </Grid>
        </GridContainer>
    );
};
