import React from 'react'
import { ContainerInput, InputStyled } from './style'

export default function Input({ Icon, widthContainer, heightContainer, borderRadius, backgroundContainer='transparent', placeHolder, type, marginContainer, border, register, name }) {
    return (
        <ContainerInput 
        widthContainer={widthContainer} 
        heightContainer={heightContainer} 
        borderRadius={borderRadius} 
        backgroundContainer={backgroundContainer}
        marginContainer={marginContainer}
        border={border}>
            <Icon/>
            <InputStyled placeholder={placeHolder} type={type} />
        </ContainerInput>
    )
}
