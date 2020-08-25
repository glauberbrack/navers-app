import React, {useState, useContext} from 'react';
import {Container, Logo, TextButton, ViewError, TextError, Loading } from './style';
import { Keyboard } from 'react-native';

import ContextData from '../../contexts/ContextData';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.png';

const SignIn: React.FC = () => {
    const { signIn, loading, errorSignIn } = useContext(ContextData);

    const [email, setEmail] = useState('glauber@brack.com.br');
    const [password, setPassword] = useState('123456');

    function handleSignIn() {
        signIn(email, password);
    }

    return (
        <Container>
            <Logo source={logo} />
            
             { errorSignIn ? 
                    <ViewError>
                        <TextError>Verifique suas credenciais!</TextError>
                    </ViewError> :
                    null
                }

                <Input type="email" autoCapitalize="none" placeText="E-mail" value={email} onChangeText={(e) => { setEmail(e) }} />

                <Input type="default" autoCapitalize="none" secureTextEntry={true} placeText="Senha" value={password} onChangeText={(e) => { setPassword(e) }} />

                <Button onPress={() => { 
                    Keyboard.dismiss();
                    handleSignIn();
                    
                }}>
                    <TextButton>ENTRAR</TextButton>
                </Button>

                { loading ? <Loading color="#212121" size={30} /> : null }
        </Container>
    );
}

export default SignIn;