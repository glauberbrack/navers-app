import React, { InputHTMLAttributes } from 'react';
import { Container, InputComponent, Label } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
    type?: any;
    placeText: string;
    security?: boolean;
}

const Input: React.FC<InputProps> = ({ type, placeText, security, ...rest }) => {

    return(
        <Container>
            <Label>{ placeText }</Label>
            <InputComponent 
                keyboardType={type}
                secureTextEntry={security} 
                placeholder={placeText}
                {...rest} 
            />

        </Container>
    );

}

export default Input;