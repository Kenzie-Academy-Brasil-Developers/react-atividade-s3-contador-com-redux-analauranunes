import styled from "styled-components";

export const ButtonComp = styled.button`
    width: 150px;
    height: 80px;
    border-style: none;
    border-radius: 10px;
    background-color: black;
    color: goldenrod;
    font-size: 20px;
    cursor: pointer;
    transition-duration: 1s;

    :hover{
        background-color: white;
        border: 1px solid black;
    }
`