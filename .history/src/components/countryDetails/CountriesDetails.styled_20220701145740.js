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
    padding: 10px 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background-color: hsl(209, 23%, 22%);

    p{
        color: red;
    }
`;