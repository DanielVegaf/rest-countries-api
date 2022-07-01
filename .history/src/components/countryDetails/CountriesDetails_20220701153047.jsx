import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from '../../services/countries';

import { 
    Container, 
    ReturnHome, 
    Descriptions, 
    Img, 
    Name, 
    NativeName, 
    Population, 
    Region,
    SubRegion,
    Capital,
    Borders
 } from "./CountriesDetails.styled";

export function CountriesDetails() {

    const [country, setCountry] = useState([]);

    const { countryName } = useParams();

    useEffect(() => {
        API.getCountryByName(countryName)
            .then(setCountry)
            .catch(console.log);
    }, [countryName]);

    useEffect(() => {
        document.title = `Country | ${countryName ?? ""}`
    }, [country]);

    return (
        <Container>
            <ReturnHome to="/">
                <p>Back</p>
            </ReturnHome>

            {
                country.map((c, numericCode) => {
                    const {
                        flag,
                        name,
                        nativeName,
                        population,
                        region,
                        subregion,
                        capital,
                        topLevelDomain,
                        currencies,
                        languages,
                        borders,
                    } = c
                    return (
                        <Descriptions key={numericCode}>
                            <Img>
                                <img src={flag} alt={name} />
                            </Img>
                            <Name>
                                <h3>{name}</h3>
                            </Name>
                            <NativeName>
                                <p>Native Name: {nativeName}</p>
                            </NativeName>
                            <Population>
                                <p>Population: {population.toLocaleString()}</p>
                            </Population>
                            <Region>
                                <p>Region: {region}</p>
                            </Region>
                            <SubRegion>
                                <p>SubRegion: {subregion}</p>
                            </SubRegion>
                            <Capital>
                                <p>Capital: {capital}</p>
                            </Capital>

                            <p>Top Level Domain: {topLevelDomain}</p>
                            <p>Currencies: {currencies[0]?.name}</p>
                            <p>Languages: {languages[0]?.name}</p>

                            <Borders>
                                {borders?.map((border) => {
                                    return (
                                        <ul key={border}>
                                            <li>{border}</li>
                                        </ul>
                                    )
                                })}
                            </Borders>
                        </Descriptions>
                    )
                })
            }
        </Container>
    );
};
