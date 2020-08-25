import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Container, NaverAvatar, NaverName, NaverRole, ActionButtons, NaverInfo, ActionIcon } from './style';
import { useNavigation } from '@react-navigation/native';

import ModalDelete from '../ModalDelete';

export interface NaverItemProps {
    id: string;
    user_id: string;
    name: string;
    job_role: string;
    url: string;
}

interface UserProps {
    user_naver: NaverItemProps; 
}

const NaverItem: React.FC<UserProps> = ({user_naver}) => {
    const [ modal, setModal] = useState(false);
    
    const { navigate } = useNavigation();
    
    function handleNaverNaverInfo(id: string) {
        navigate('NaverInfo', { id });
    }
    
    function handleEditNaver(id: string) {
        navigate('EditNaver', { id });
    }

    return( 
        <>
        <ModalDelete title="Excluir naver" message="Tem certeza que deseja excluir este naver?" show={modal} close={() => setModal(false)} id={user_naver.id} />

        <Container key={user_naver.id} onPress={() => { handleNaverNaverInfo(user_naver.id) }}>
            
                <NaverAvatar source={{ uri: user_naver.url}} />

                <NaverInfo>
                    <NaverName>{user_naver.name}</NaverName>

                    <NaverRole>{user_naver.job_role}</NaverRole>

                </NaverInfo>

            <ActionButtons>

                <ActionIcon onPress={() => { 
                    setModal(true);
                }}>
                    <Ionicons name="md-trash" size={24} />
                </ActionIcon>

                <ActionIcon onPress={() => {handleEditNaver(user_naver.id)}}>
                    <Ionicons name="md-create" size={24} />
                </ActionIcon>

            </ActionButtons>

        </Container>
        </>
    );
}

export default NaverItem;