import React from 'react'
import { Container, ContainerSvg, SubContainerLeft, SubContainerRight } from './style'
import todoImgHome from '../../images/todo_img_home.svg'
import Input from '../../components/Input'
import { AiOutlineMail } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import Button from '../../components/Button'

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
                <Input Icon={AiOutlineMail} widthContainer='230px' heightContainer='30px' borderRadius='20px' backgroundContainer='#F7F6F4' placeHolder='Email' marginContainer='0 0 20px 0'/>
                <Input Icon={RiLockPasswordLine} widthContainer='230px' heightContainer='30px' borderRadius='20px' backgroundContainer='#F7F6F4' placeHolder='Senha' type='password' marginContainer='0 0 20px 0'/>
                <p>Ainda não tem uma conta? <Button text='faça uma aqui!' background='transparent'/></p>
                <Button text='Login' width='20%' height='30px' background='var(--button-color)' borderRadius='20px'/>
            </SubContainerRight>
        </Container>
    )
}
