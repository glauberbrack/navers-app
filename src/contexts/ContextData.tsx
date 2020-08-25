import React, { useState, createContext } from 'react';
import api, { config } from '../services/api';

interface ContextDataInfo {
    signed: boolean;
    user: object | null;
    signIn(email: string, password: string): Promise<void>;
    signOut(): void;
    loading: boolean;
    errorSignIn: boolean;
    modal: boolean;
}

const ContextData = createContext<ContextDataInfo>({} as ContextDataInfo);

export const ContextProvider: React.FC = ({children}) => {

    const [user, setUser] = useState<object | null>(null);
    const [loading, setLoading] = useState(false);
    const [errorSignIn, setErrorSignIn] = useState(false);

    async function signIn(email: string, password: string) {

        setLoading(true);
        setErrorSignIn(false);

        const params = JSON.stringify({
            'email': email,
            'password': password
        });

        try{
            const response = await api.post('/users/login', params, config());
            const { data } = response;
            setUser(data);
            setLoading(false);

        } catch(err) {
            setErrorSignIn(true);
            setLoading(false);
        }
    }

    async function signOut() {
        setUser(null);
    }

    return(
        <ContextData.Provider value={{signed: !!user, user, signIn, signOut, loading, errorSignIn}}>
            {children}
        </ContextData.Provider>
    );

}

export default ContextData;