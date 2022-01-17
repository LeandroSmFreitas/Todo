import React, { useContext, useEffect } from 'react'
import { Container, ContainerSvg, FormStyled, SubContainerLeft, SubContainerRight } from './style'
import todoImgSingUp from '../../images/todo_img_singup.svg'
import Input from '../../components/Input'
import { AiOutlineMail } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import Button from '../../components/Button'
import { BiUserCircle } from "react-icons/bi"
import { useNavigate } from 'react-router-dom'
import { DbContext } from '../../Provider/DbProvider'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify'

export default function SingUp() {
    const navigate = useNavigate()
    const { CreateUser, GetToken, token } = useContext(DbContext)
    
    const handleClick = () => {
        navigate('/')
    }

    const OnSubmitForm = (data) => {
        const user = {
            name: data.name,
            email: data.email,
            password: data.password
        }
        CreateUser(user)
        toast.success('usuario criado com sucesso')
        navigate('/todo')
    }

    const schema = yup.object().shape({
        name: yup.string().required("Campo obrigatorio!"),
        email: yup.string().email('Formato inválido').required("Campo obrigatorio!"),
        password: yup.string().required("Campo obrigatorio!").min(8, "Minimo de caracteres é 8"),
        passwordConfirm: yup.string().oneOf([yup.ref("password")], "Senhas diferentes").required("Campo é obrigatório"),
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
                <ContainerSvg src={todoImgSingUp} alt='imagem que representa boas-vindas'/>
            </SubContainerLeft>
            <SubContainerRight>
                <h1>
                    Olá, ficamos felizes em saber que você quer fazer parte da nossa família!!!
                </h1>
                <h3>
                    Faça seu cadastro e começe a organizar as suas tarefas
                </h3>
                <form onSubmit={handleSubmit(OnSubmitForm)}>
                    <Input Icon={BiUserCircle} widthContainer='100%' heightContainer='30px' borderRadius='20px' backgroundContainer='#F7F6F4' placeHolder='nome' register={register} name='name'/>
                    <span>{errors.name?.message}</span>
                    <Input Icon={AiOutlineMail} widthContainer='100%' heightContainer='30px' borderRadius='20px' backgroundContainer='#F7F6F4' placeHolder='Email' marginContainer='20px 0 0 0' register={register} name='email'/>
                    <span>{errors.email?.message}</span>
                    <Input Icon={RiLockPasswordLine} widthContainer='100%' heightContainer='30px' borderRadius='20px' backgroundContainer='#F7F6F4' placeHolder='Senha' type='password' marginContainer='20px 0 0 0' register={register} name='password'/>
                    <span>{errors.password?.message}</span>
                    <Input Icon={RiLockPasswordLine} widthContainer='100%' heightContainer='30px' borderRadius='20px' backgroundContainer='#F7F6F4' placeHolder='repetir senha' type='password' marginContainer='20px 0 0 0' register={register} name='passwordConfirm'/>
                    <span>{errors.passwordConfirm?.message}</span>
                    <p>Já tem uma conta? <Button text='faça login aqui!' background='transparent' click={() => handleClick()}/></p>
                    <Button text='Login' width='100%' height='30px' background='var(--button-color)' borderRadius='20px' type='submit'/>
                </form>
            </SubContainerRight>
        </Container>
    )
}