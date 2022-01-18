import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100px;
    background: #fff;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p{
        color: var(--black)
    }
    p + button{
        margin: 0 0 5px 0;
    }
    margin: 30px 0 0 0;
`

export const ButtonStyled = styled.button `
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    background: ${({ background }) => background};
    outline: none;
    border-radius: ${({ borderRadius }) => borderRadius};
    border: none;
    font-family: var(--subTitle);
    cursor: pointer;
`