import styled from "styled-components";


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