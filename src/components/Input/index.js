import React from 'react'
import { ContainerInput, InputStyled } from './style'

export default function Input({ Icon, widthContainer, heightContainer, borderRadius, backgroundContainer, placeHolder, type, marginContainer, register, name }) {
    return (
        <ContainerInput 
        widthContainer={widthContainer} 
        heightContainer={heightContainer} 
        borderRadius={borderRadius} 
        backgroundContainer={backgroundContainer}
        marginContainer={marginContainer}>
            <Icon/>
            <InputStyled placeholder={placeHolder} type={type} {...register(name)}/>
        </ContainerInput>
    )
}
