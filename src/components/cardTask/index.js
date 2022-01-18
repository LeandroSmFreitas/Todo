import React, { useState } from 'react'
import { ButtonStyled, Container } from './style'

export default function CardOfTask({ title, id, click, taskFinished = false, deleteClick}) {
    const [display,setDisplay] = useState('none')
    
    const HandleDelete = () => {
        deleteClick()
        setDisplay('none')
    }

    return (
        <Container>
            <p>{title}</p>
            <ButtonStyled width='40%' height='30%' background={taskFinished ? '#FFDB58' :'#008000'} borderRadius='0 20px 20px 0' type='submit' onClick={() => click()}>
                {taskFinished ? 'Não finalizada' : 'finalizar'}
            </ButtonStyled>
            <ButtonStyled width='40%' height='30%' display={display === 'none' ? 'block' : 'none'} background='var(--error)' borderRadius='0 20px 20px 0' type='submit' onClick={() => setDisplay('block')}>
                Excluir
            </ButtonStyled>
            <ButtonStyled width='90%' height='30%' display={display === 'block' ? 'block' : 'none'} background='var(--error)' borderRadius='0 20px 20px 0' type='submit' onClick={() => HandleDelete()}>
                Você tem certeza?
            </ButtonStyled>
        </Container>
    )
}
