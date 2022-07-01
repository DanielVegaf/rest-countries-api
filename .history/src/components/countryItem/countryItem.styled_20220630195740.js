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
    width: 300px;
    height: 320px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

export const Img = styled.div`
    width: 100%;

    img {
        object-fit: cover;
        width: 100%;
        height: 150px;
        border-radius: 10px 10px 0 0;
    }
`;