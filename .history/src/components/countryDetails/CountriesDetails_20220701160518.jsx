import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from '../../services/countries';

import {
    Container,
    ReturnHome,
    Descriptions,
    Row,
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
                            <Row>
                            <Characteristics>

                                <Name>
                                    <h3>{name}</h3>
                                </Name>
                                <NativeName>
                                    <p><strong>Native Name: </strong>{nativeName}</p>
                                </NativeName>
                                <Population>
                                    <p><strong>Population: </strong>{population.toLocaleString()}</p>
                                </Population>
                                <Region>
                                    <p><strong>Region: </strong>{region}</p>
                                </Region>
                                <SubRegion>
                                    <p><strong>SubRegion: </strong>{subregion}</p>
                                </SubRegion>
                                <Capital>
                                    <p><strong>Capital: </strong>{capital}</p>
                                </Capital>
                            </Characteristics>

                            <Characteristics>
                                <p> <strong>Top Level Domain: </strong>{topLevelDomain}</p>
                                <p> <strong>Currencies: </strong>{currencies[0]?.name}</p>
                                <p> <strong>Languages: </strong>{languages[0]?.name}</p>
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
                            </Row>
                        </Descriptions>
                    )
                })
            }
        </Container>
    );
};
