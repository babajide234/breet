import React from 'react'
import { InputContainer,Input } from './InputElements'

const TextInput = (props) => {
  return (
    <InputContainer className='parent'>
        <Input type="text" name={props.name} id={props.id} placeholder={props.placeholder} />
    </InputContainer>
  )
}

export default TextInput