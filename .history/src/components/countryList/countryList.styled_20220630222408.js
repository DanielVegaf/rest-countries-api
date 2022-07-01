import styled from "styled-components";

export const Container = styled.div`
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 26px;
    align-items: start;
    padding: 60px;
    box-sizing: border-box;
`;

export const ContentFilters = styled.div`
    background-color: red;
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
        width: 90%;
        padding: 10px;
    }
`;