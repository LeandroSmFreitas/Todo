import styled from "styled-components";


export const ContainerInput = styled.div `
    width: ${({ widthContainer }) => widthContainer};
    height: ${({ heightContainer }) => heightContainer};
    display: flex;
    align-items: center;
    border-radius: ${({ borderRadius }) => borderRadius};
    background: ${({ backgroundContainer }) => backgroundContainer};
    margin: ${({ marginContainer }) => marginContainer};
    svg{
        margin-left: 2%;
    }
    border: ${({border}) => border};
`

export const InputStyled = styled.input `
    width: 87%;
    height: 100%;
    background: transparent;
    border: none;
    outline: none;
`