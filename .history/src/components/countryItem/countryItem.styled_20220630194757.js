import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div`
    background-color: blue;
    display: flex;
    justify-content: center;
`;

export const Linked = styled(Link)`
display: flex;
    justify-content: center;
    border: 1px solid black;
`;

export const Img = styled.div`
    width: 200px;

    img {
        object-fit: cover;
        width: 100%;
        height: 150px;
    }
`;