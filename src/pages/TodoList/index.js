import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input'
import { DbContext } from '../../Provider/DbProvider'
import { Container, ContainerAddTasks, ContainerAllTitleOfImportance, ContainerTasks, ContainerTitleTask, SelectStyled } from './style'
import { MdControlPoint } from "react-icons/md"
import Button from '../../components/Button'

export default function TodoList() {
    const [valueSelect, setValueSelect] = useState('')
    
    const onSubmitForm = (data) => {

    }
    
    return (
        <Container>
            <h1>O seu espaço de gerenciamento de tarefas!</h1>
            <ContainerAddTasks>
                <Input Icon={MdControlPoint} borderRadius='20px 0 0 20px' widthContainer='70%' heightContainer='30px' placeHolder='adicionar tarefa' border='1px solid'/>
                <SelectStyled onChange={(e) => setValueSelect(e.currentTarget.value)} value={valueSelect}>
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
                </ContainerTasks>
                <ContainerTasks>
                    <ContainerTitleTask>
                        <p>Prioridade</p>
                    </ContainerTitleTask>
                </ContainerTasks>
                <ContainerTasks>
                    <ContainerTitleTask>
                        <p>Importante</p>
                    </ContainerTitleTask>
                </ContainerTasks>
                <ContainerTasks>
                    <ContainerTitleTask>
                        <p>Não importante</p>
                    </ContainerTitleTask>
                </ContainerTasks>
            </ContainerAllTitleOfImportance>
        </Container>
    )
}
