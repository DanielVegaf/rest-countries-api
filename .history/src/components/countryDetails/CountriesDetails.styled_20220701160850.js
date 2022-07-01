import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px;
`;

export const ReturnHome = styled(Link)`
    text-align: center;
    text-decoration: none;
    width: 100px;

    p{
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        background-color: hsl(209, 23%, 22%);
        padding: 10px 15px;
        border-radius: 3px;
        margin-bottom: 70px;
    }
`;

export const Descriptions = styled.div`

    p{
        margin-top: 10px;
    }

    ul{
        margin-top: 20px;
    }

    .mg{
        margin-top: 50px;
    }

    @media (min-width: 750px) {
        display: flex;
        flex-direction: row;
    }
`;

export const Row = styled.div`
    @media (min-width: 750px) {            
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 10px;
    }
`;

export const Img = styled.div`
    img{
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

    @media (min-width: 750px) {
        width: 300px;
    }
    
`;

export const Name = styled.div`
    h3{
        margin: 30px 0;
    }
`;

export const Borders = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    ul{
        list-style: none;
    }

    li{
        padding: 5px 30px;
        border-radius: 3px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        background-color: hsl(209, 23%, 22%);
    }
`;

export const Characteristics = styled.div`
    margin-top: 50px;

    @media (min-width: 750px) {
        
        display: flex;
        flex-direction: column;
    }
`;

export const Country = styled.div`
margin: 0 20px;
    background-color: red;
`;

export const NativeName = styled.div``;

export const Population = styled.div``;

export const Region = styled.div``;

export const SubRegion = styled.div``;

export const Capital = styled.div``;
