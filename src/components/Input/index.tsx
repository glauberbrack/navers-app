import React, { InputHTMLAttributes } from 'react';
import { Container, InputComponent, Label } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
    type?: any;
    placeText: string;
}

const Input: React.FC<InputProps> = ({ type, placeText, ...rest }) => {

    return(
        <Container>
            <Label>{ placeText }</Label>
            <InputComponent 
                keyboardType={type}
                placeholder={placeText}
                {...rest} 
            />

        </Container>
    );

}

export default Input;