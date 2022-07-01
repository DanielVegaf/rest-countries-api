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
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 20px;

    input {
        border: none;
        outline: none;
        width: 100%;
        padding: 20px 10px;
        border-radius: 5px;
        background-color: hsl(209, 23%, 22%);
        box-shadow: 0 0 10px #1c252d;
        font-weight: 500;
    }

    select{
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 5px;
        margin-top: 20px;
        padding: 20px 35px 20px 20px;
        background-color: hsl(209, 23%, 22%);
        box-shadow: 0 0 10px #1c252d;
    }

    @media (min-width: 1000px) {
        width: 800px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
        background-color: red;

        input{
            width: 50%;
        }

        select{
            margin-top: 0;
        }
    }
`;