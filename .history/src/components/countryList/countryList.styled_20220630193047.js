import styled from "styled-components";

export const Container = styled.div`
    background-color: red;
`;

export const Grid = styled.main`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
    align-items: start;
    padding: 50px;
    box-sizing: border-box;
`;