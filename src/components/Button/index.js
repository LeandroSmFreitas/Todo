import React from 'react'
import { ButtonStyled } from './style'

export default function Button({ text, width, height, background, borderRadius }) {
    return (
        <ButtonStyled 
        width={width} 
        height={height} 
        background={background} 
        borderRadius={borderRadius}
        >
            {text}
        </ButtonStyled>
    )
}
