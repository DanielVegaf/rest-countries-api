import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div`
    background-color: blue;
    display: flex;
    justify-content: center;
`;

export const Linked = styled(Link)`
    border: 1px solid black;
`;

export const Img = styled.div`
    width: 100%;

    img {
        object-fit: cover;
        width: 200px;
        height: 150px;
    }
`;