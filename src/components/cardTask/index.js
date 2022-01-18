import React from 'react'
import { ButtonStyled, Container } from './style'

export default function CardOfTask({ title, id, click, taskFinished = false}) {
    return (
        <Container>
            <p>{title}</p>
            <ButtonStyled width='40%' height='30%' background={taskFinished ? '#FFDB58' :'#008000'} borderRadius='0 20px 20px 0' type='submit' onClick={() => click()}>
                {taskFinished ? 'Não finalizada' : 'finalizar'}
            </ButtonStyled>
            <ButtonStyled width='40%' height='30%' background='var(--error)' borderRadius='0 20px 20px 0' type='submit'>
                Excluir
            </ButtonStyled>
        </Container>
    )
}
