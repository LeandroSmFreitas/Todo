import styled from "styled-components";


export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
`

export const SubContainerLeft = styled.div `
    width: 50vw;
    height: 100vh;
    display: flex;
    background: var(--black);
    justify-content: center;
    align-items: center;
`

export const SubContainerRight = styled.div `
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--color-subContainerRight);
    form{
        span{
            color: var(--error)
        }
    }

`

export const ContainerSvg = styled.img`
    width: 90%;
    height: 90%;
`