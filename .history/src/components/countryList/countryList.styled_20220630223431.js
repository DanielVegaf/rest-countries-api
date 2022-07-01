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
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 30px;

    input {
        border: none;
        outline: none;
        width: 90%;
        padding: 20px 10px;
        border-radius: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    }

    select{
        display: flex;

        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 5px;
        margin-top: 20px;
        padding: 10px;
    }
`;