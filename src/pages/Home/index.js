import React from 'react'
import { Container, ContainerSvg, SubContainerLeft, SubContainerRight } from './style'
import todoImgHome from '../../images/todo_img_home.svg'

export default function HomePage() {
    return (
        <Container>
            <SubContainerLeft>
                <ContainerSvg src={todoImgHome} alt='imagem que representa uma lista de tarefas'/>
            </SubContainerLeft>
            <SubContainerRight>
                <h1>
                    Olá, Seja bem-vindo(a) ao melhor site de Lista de Tarefas!!!
                </h1>
                <h3>
                    Faça seu Login e e começe a organizar as suas tarefas
                </h3>
            </SubContainerRight>
        </Container>
    )
}
