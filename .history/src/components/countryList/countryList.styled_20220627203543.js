import styled from 'styled-components';

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30px, 1fr));
    grid-gap: 20px;
    align-items: start;
    padding: 50px;
    box-sizing: border-box;
`;