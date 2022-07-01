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
    Characteristics,
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

                            <Characteristics>
                                <p> <strong>Top Level Domain: </strong>{topLevelDomain}</p>
                                <p> <strong></strong> Currencies: {currencies[0]?.name}</p>
                                <p> <strong></strong> Languages: {languages[0]?.name}</p>
                            </Characteristics>

                            <div className="mg"> <strong>Borders Countries:</strong> </div>
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
