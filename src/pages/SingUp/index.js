import React from 'react'
import { Container, ContainerSvg, SubContainerLeft, SubContainerRight } from './style'
import todoImgSingUp from '../../images/todo_img_singup.svg'
import Input from '../../components/Input'
import { AiOutlineMail } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import Button from '../../components/Button'
import { BiUserCircle } from "react-icons/bi"
import { useNavigate } from 'react-router-dom'

export default function SingUp() {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <Container>
            <SubContainerLeft>
                <ContainerSvg src={todoImgSingUp} alt='imagem que representa boas-vindas'/>
            </SubContainerLeft>
            <SubContainerRight>
                <h1>
                    Olá, ficamos felizes em saber que você quer fazer parte da nossa família!!!
                </h1>
                <h3>
                    Faça seu cadastro e começe a organizar as suas tarefas
                </h3>
                <Input Icon={BiUserCircle} widthContainer='230px' heightContainer='30px' borderRadius='20px' backgroundContainer='#F7F6F4' placeHolder='nome' marginContainer='0 0 20px 0'/>
                <Input Icon={AiOutlineMail} widthContainer='230px' heightContainer='30px' borderRadius='20px' backgroundContainer='#F7F6F4' placeHolder='Email' marginContainer='0 0 20px 0'/>
                <Input Icon={RiLockPasswordLine} widthContainer='230px' heightContainer='30px' borderRadius='20px' backgroundContainer='#F7F6F4' placeHolder='Senha' type='password' marginContainer='0 0 20px 0'/>
                <Input Icon={RiLockPasswordLine} widthContainer='230px' heightContainer='30px' borderRadius='20px' backgroundContainer='#F7F6F4' placeHolder='repetir senha' type='password' marginContainer='0 0 20px 0'/>
                <p>Já tem uma conta? <Button text='faça login aqui!' background='transparent' click={() => handleClick()}/></p>
                <Button text='Login' width='20%' height='30px' background='var(--button-color)' borderRadius='20px'/>
            </SubContainerRight>
        </Container>
    )
}