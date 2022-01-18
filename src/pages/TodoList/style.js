import styled from "styled-components";

export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
        color: var(--black);
    }
`

export const ContainerAddTasks = styled.form `
    width: 50%;
    min-width: 758px;
    display: flex;
`

export const SelectStyled = styled.select `
    width: 15%;
    height: 100%;
`

export const ContainerAllTitleOfImportance = styled.main `
    width: 100vw;
    display: flex;
    margin-top: 100px;
    justify-content: space-around;
    flex-wrap: wrap;
`

export const ContainerTasks = styled.div `
    width: 15%;
    min-width: 156px;
`

export const ContainerTitleTask = styled.div `
    width: 100%;
    height: 50px;
    background: #fff;
    border: 1px solid;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    p{
        color: var(--black)
    }
`