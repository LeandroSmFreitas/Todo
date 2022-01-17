import React from 'react'
import { ButtonStyled } from './style'

export default function Button({ text, width, height, background, borderRadius, click, type }) {
    return (
        <ButtonStyled 
        width={width} 
        height={height} 
        background={background} 
        borderRadius={borderRadius}
        onClick={click}
        type={type}
        >
            {text}
        </ButtonStyled>
    )
}
