import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import * as API from '../../services/countries';

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
            <ReturnHome>
                <Link to="/">Back</Link>
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
                        <div key={numericCode}>
                            <img src={flag} alt={name} />
                            <p>{nativeName}</p>
                            <p>{population.toLocaleString()}</p>
                            <p>{region}</p>
                            <p>{subregion}</p>
                            <p>{capital}</p>

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
                        </div>
                    )
                })
            }
        </Container>
    );
};