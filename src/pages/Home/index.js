import React, { useContext, useEffect } from 'react'
import { Container, ContainerSvg, SubContainerLeft, SubContainerRight } from './style'
import todoImgHome from '../../images/todo_img_home.svg'
import Input from '../../components/Input'
import { AiOutlineMail } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify'
import { DbContext } from '../../Provider/DbProvider'
import { useState } from 'react/cjs/react.development'

export default function HomePage() {
    const navigate = useNavigate()
    const { LoginUser, GetToken, token } = useContext(DbContext)

    const handleClick = () => {
        navigate('/register')
    }

    const OnSubmitForm = (data) => {
        const user = {
            email: data.email,
            password: data.password
        }
        const token = LoginUser(user)
        if(token){
            localStorage.setItem('@token', JSON.stringify(token))
            toast.success('Logado com sucesso!')
            navigate('/todo')
        }else{
            toast.error('usuario ou senha inválidos')
        }
    }

    const schema = yup.object().shape({
        email: yup.string().email('Formato inválido').required("Campo obrigatorio!"),
        password: yup.string().required("Campo obrigatorio!"),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    GetToken()

    useEffect(() => {
        if(token){
            navigate('/todo')
        }
    }, token)


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
                <form onSubmit={handleSubmit(OnSubmitForm)}>
                    <Input Icon={AiOutlineMail} widthContainer='100%' heightContainer='30px' borderRadius='20px' backgroundContainer='#F7F6F4' placeHolder='Email' register={register} name='email'/>
                    <span>{errors.email?.message}</span>
                    <Input Icon={RiLockPasswordLine} widthContainer='100%' heightContainer='30px' borderRadius='20px' backgroundContainer='#F7F6F4' placeHolder='Senha' type='password' marginContainer='20px 0 0 0' register={register} name='password'/>
                    <span>{errors.password?.message}</span>
                    <p>Não tem uma conta? <Button text='faça uma aqui!' background='transparent' click={() => handleClick()}/></p>
                    <Button text='Login' width='100%' height='30px' background='var(--button-color)' borderRadius='20px' type='submit'/>
                </form>
            </SubContainerRight>
        </Container>
    )
}
