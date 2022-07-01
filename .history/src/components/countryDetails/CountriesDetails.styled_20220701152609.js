import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    padding: 25px;
`;

export const ReturnHome = styled(Link)`
    text-align: center;
    text-decoration: none;

    p{
        width: 100px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        background-color: hsl(209, 23%, 22%);
        padding: 10px 15px;
        border-radius: 5px;
        margin-bottom: 70px;
    }
`;

export const Descriptions = styled.div`
    background-color: red;

    p{
        margin-top: 10px;
    }

    ul{
        margin-top: 20px;
    }

    .dd{
        margin-top: 100px;
    }
`;

export const Img = styled.div`
    img{
        width: 100%;
        object-fit: cover;
    }
`;
export const Name = styled.div`
    margin-top: 25px;
`;

export const NativeName = styled.div`
    margin-top: 10px;
`;

export const Population = styled.div`
    margin-top: 10px;
`;

export const Region = styled.div`
    margin-top: 10px;
`;

export const SubRegion = styled.div`
    margin-top: 10px;
`;

export const Capital = styled.div`
    margin-top: 10px;
`;
