import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
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
    Capital
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
                                <img src={flag} alt={name} width={300} />
                            </Img>
                            <Name>
                                <h3>{name}</h3>
                            </Name>
                            <NativeName>
                                <p>{nativeName}</p>
                            </NativeName>
                            <Population>
                                <p>{population.toLocaleString()}</p>
                            </Population>
                            <Region>
                                <p>{region}</p>
                            </Region>
                            <SubRegion>
                                <p>{subregion}</p>
                            </SubRegion>
                            <Capital>
                                <p>{capital}</p>
                            </Capital>

                            <p>{topLevelDomain}</p>
                            <p>{currencies[0]?.name}</p>
                            <p>{languages[0]?.name}</p>

                            <p>Border Countries: </p>
                            {borders?.map((border) => {
                                return (
                                    <ul key={border}>
                                        <li>{border}</li>
                                    </ul>
                                )
                            })}
                        </Descriptions>
                    )
                })
            }
        </Container>
    );
};
