import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div`
    display: flex;
    justify-content: center;
`;

export const Linked = styled(Link)`
    text-decoration: none;
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 320px;
    border-radius: 5px;
    background-color: hsl(209, 23%, 22%);
        box-shadow: 0 0 10px #1c252d;
`;

export const Img = styled.div`
    width: 100%;

    img {
        object-fit: cover;
        width: 100%;
        height: 150px;
        border-radius: 5px 5px 0 0;
    }
`;

export const Description = styled.div`
    margin-top: 5px;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    color: #222;

    h3{
        margin-bottom: 10px;
    }

    p{
        margin: 2px;
    }

    span {
        font-weight: bold;
    }
`;