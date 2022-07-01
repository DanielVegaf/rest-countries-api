import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Content = styled.div`
    display: flex;
    justify-content: center;
`;

export const Linked = styled(Link)`
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    height: 320px;
`;

export const Img = styled.div`
    width: 200px;

    img {
        object-fit: cover;
        width: 100%;
        height: 150px;
    }
`;