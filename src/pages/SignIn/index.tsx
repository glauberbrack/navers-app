import React, {useState, useContext} from 'react';
import {Container, Logo, TextButton, ViewError, TextError, Loading } from './style';
import { Keyboard } from 'react-native';

import ContextData from '../../contexts/ContextData';
import Input from '../../components/Input';
import Button from '../../components/Button';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {

    const { signIn, loading, errorSignIn } = useContext(ContextData);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignIn() {
        signIn(email, password);
    }

    return (
        <Container>
            <Logo source={logoImg} />
            
             { errorSignIn ? 
                    <ViewError>
                        <TextError>Verifique suas credenciais!</TextError>
                    </ViewError> :
                    null
                }

                <Input type="default" autoCapitalize="none" placeText="E-mail" value={email} onChangeText={(e) => { setEmail(e) }} />

                <Input type="default" placeText="Senha" security={true} value={password} onChangeText={(e) => { setPassword(e) }} />

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