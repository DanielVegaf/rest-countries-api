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
`;

export const Img = styled.div`
    img{
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
`;
export const Name = styled.div`
    h3{
        margin: 30px 0;
    }
`;

export const Borders = styled.div`
    display: flex;
    /* justify-content: space-around; */
    flex-wrap: wrap;

    ul{
        list-style: none;
    }

    li{
        margin-left: 5px;
        padding: 5px 30px;
        border-radius: 3px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        background-color: hsl(209, 23%, 22%);
    }
`;

export const Characteristics = styled.div`
    margin-top: 50px;
`;

export const NativeName = styled.div``;

export const Population = styled.div``;

export const Region = styled.div``;

export const SubRegion = styled.div``;

export const Capital = styled.div``;
