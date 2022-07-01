import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    background-color: red;
    display: flex;
    flex-direction: column;
    padding: 25px;
`;

export const ReturnHome = styled(Link)`
    text-align: center;
    text-decoration: none;
    width: 0;


    p{
        
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background-color: hsl(209, 23%, 22%);
        padding: 10px 50px;
        /* width: 10px; */
    }
`;