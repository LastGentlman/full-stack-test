import styled from "styled-components";

export const BigBox = styled.div`
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    /* margin: auto; */
    width: 310px;
    background: pink;
    align-items: center;
    justify-content: center;
    border-radius: 12px;

    & > img {
        margin: 0;
        margin-right: -20px;
        margin-left: -5px;
        padding: 0;
        width: 130px;
        height: 100px;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 160px;
    justify-content: space-around;

    & > h5 > img {
        position: relative;
        top: 5px;
    }
`;