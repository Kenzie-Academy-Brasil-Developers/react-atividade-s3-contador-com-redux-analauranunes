import styled from "styled-components";

export const ContainerDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: goldenrod;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;

    div{
        width: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 15px;
    }

    h1{
        margin: 0;

        span{
            color: white;
        }
    }
`