import styled from 'styled-components';

export const GridContainer = styled.div`
background-color: black;
`;

export const Grid = styled.div`

border: 1px solid black;
margin: 20px 0;

img{
    width: 250px;
}

@media (max-width: 375px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    align-items: start;
    padding: 50px;
    box-sizing: border-box;
    }
    
`;