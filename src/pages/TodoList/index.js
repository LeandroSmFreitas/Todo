import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import { DbContext } from '../../Provider/DbProvider'
import { Container, ContainerAddTasks, ContainerAllTitleOfImportance, ContainerTasks, ContainerTitleTask, SelectStyled } from './style'
import { MdControlPoint } from "react-icons/md"
import Button from '../../components/Button'
import * as yup from 'yup';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import CardOfTask from '../../components/cardTask'
import * as uuid from 'uuid'

export default function TodoList() {
    const [valueSelect, setValueSelect] = useState('')
    const {token, GetToken } = useContext(DbContext)
    const [userTasks, setUserTasks] = useState([])
    const [userTasksFinished, setUserTasksFinished] = useState([])
    
    const schema = yup.object().shape({
        task: yup.string().required("Campo obrigatorio!"),
        importance: yup.string().oneOf(['Urgente', 'Prioridade', 'Importante', 'Não importante'])
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    if(!token){
        GetToken()
    }
    
    const onSubmitForm = (data) => {
        const task = {
            id: uuid.v4(),
            name: data.task,
            importance: data.importance,
            user: token,
        }
        setUserTasks([...userTasks, task])
    }

    const FinishedTask = (id) => {
        let task = userTasks.find(task => task.id === id)
        setUserTasks(userTasks.filter(task => task.id !== id))
        setUserTasksFinished([...userTasksFinished, task])
    }

    const RevertFinishedTask = (id) => {
        let task = userTasksFinished.find(task => task.id === id)
        setUserTasksFinished(userTasksFinished.filter(task => task.id !== id))
        setUserTasks([...userTasks, task])
    }

    const DeleteTask = (id) => {
        setUserTasksFinished(userTasksFinished.filter(task => task.id !== id))
        setUserTasks(userTasks.filter(task => task.id !== id))
    }


    
    return (
        <Container>
            <h1>O seu espaço de gerenciamento de tarefas!</h1>
            <ContainerAddTasks onSubmit={handleSubmit(onSubmitForm)}>
                <Input Icon={MdControlPoint} borderRadius='20px 0 0 20px' widthContainer='70%' heightContainer='30px' placeHolder='adicionar tarefa' border='1px solid' register={register} name='task'/>
                <SelectStyled {...register('importance')} onChange={(e) => setValueSelect(e.currentTarget.value)} value={valueSelect}>
                    <option value="">Nivel de Urgência</option>
                    <option value="Urgente">Urgente</option>
                    <option value="Prioridade">Prioridade</option>
                    <option value="Importante">Importante</option>
                    <option value="Não importante">Não importante</option>
                </SelectStyled>
                <Button text='Adicionar' width='15%' height='100%' background='var(--button-color)' borderRadius='0 20px 20px 0' type='submit'/>
            </ContainerAddTasks>
            <ContainerAllTitleOfImportance>
                <ContainerTasks>
                    <ContainerTitleTask>
                        <p>Urgente</p>
                    </ContainerTitleTask>
                    {userTasks.map((element) => {
                        if(element.importance === 'Urgente'){
                            return <CardOfTask key={element.id} title={element.name} click={() => FinishedTask(element.id)} deleteClick={() => DeleteTask(element.id)}/>
                        }
                    })}
                </ContainerTasks>
                <ContainerTasks>
                    <ContainerTitleTask>
                        <p>Prioridade</p>
                    </ContainerTitleTask>
                    {userTasks.map((element) => {
                        if(element.importance === 'Prioridade'){
                            return <CardOfTask key={element.id} title={element.name} click={() => FinishedTask(element.id)} deleteClick={() => DeleteTask(element.id)}/>
                        }
                    })}
                </ContainerTasks>
                <ContainerTasks>
                    <ContainerTitleTask>
                        <p>Importante</p>
                    </ContainerTitleTask>
                    {userTasks.map((element) => {
                        if(element.importance === 'Importante'){
                            return <CardOfTask key={element.id} title={element.name} click={() => FinishedTask(element.id)} deleteClick={() => DeleteTask(element.id)}/>
                        }
                    })}
                </ContainerTasks>
                <ContainerTasks>
                    <ContainerTitleTask>
                        <p>Não importante</p>
                    </ContainerTitleTask>
                    {userTasks.map((element) => {
                        if(element.importance === 'Não importante'){
                            return <CardOfTask key={element.id} title={element.name} click={() => FinishedTask(element.id)} deleteClick={() => DeleteTask(element.id)}/>
                        }
                    })}
                </ContainerTasks>
                <ContainerTasks>
                    <ContainerTitleTask>
                        <p>Finalizadas</p>
                    </ContainerTitleTask>
                    {userTasksFinished.map((element) => {
                        return <CardOfTask key={element.id} title={element.name} click={() => RevertFinishedTask(element.id)} taskFinished={true} deleteClick={() => DeleteTask(element.id)}/>
                    })}
                </ContainerTasks>
            </ContainerAllTitleOfImportance>
        </Container>
    )
}
