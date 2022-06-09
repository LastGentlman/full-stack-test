import styled from "styled-components";

export const BigBox = styled.div`
    display: flex;
    width: 350px;
    margin: auto;

    & > img {
        margin: 15px 0 0 10px;
        border: 9px pink double;
        width: 100px;
        height: 100px;
        border-radius: 40%;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 10px;
    border: lightcoral 1px solid;
    border-radius: 15px;
    width: 200px;
    height: 240px;
    margin: 20px auto 10px auto;

    & > h3 {
        color: lightblue;
    }`;

export const Form = styled.form`
    margin: 0;
    padding: 0;
    display: grid;
    place-content: center;

    & > input {
        border-radius: 8px;
        border: 1px solid lightsteelblue;
        height: 25px;
        padding-left: 5px;
        margin-top: 3px;
    }
    & > input:focus {
        background-color: lightgoldenrodyellow;
    }
    & > input[type="submit"] {
        border-radius: 3px;
        background: brown;
        color: white;
        font-weight: bold;
        font-size: large;
        font-family: 'Times New Roman', Times, serif;
        font-style: italic;
    }
`;

export const PinkBox = styled.div`
    background: pink;
    margin: auto;
    width: 190px;
    height: 60px;
    border-radius: 15px;
    display: ${props => props.isTrue ? "flex" : "none"};
    justify-content: center;
    

    & > ul {
        list-style-type: none;
    }
`;