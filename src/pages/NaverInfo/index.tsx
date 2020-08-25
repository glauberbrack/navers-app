import React, { useContext, useState, useEffect } from 'react';
import { 
    Container, 
    NaverImage, 
    InfoContainer, 
    NaverName, 
    NaverDetails, 
    NaverTextTitle, 
    ActionButtons,
    DeleteButton,
    EditButton,
    TextButtonDelete,
    TextButtonEdit,
} from './style';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';

import api from '../../services/api';
import ContextData from '../../contexts/ContextData';
import converterDateInYear from '../../utils/converterDateInYear';
import ModalDelete from '../../components/ModalDelete';

interface Naver {
    id: string;
    name: string;
    job_role: string;
    admission_date: string;
    birthdate: string;
    project: string;
    url: string;
}

const NaverInfo: React.FC<Naver> = ({route}) => {

    const { id } = route.params;
    const { user } = useContext(ContextData);
    const [naver, setNaver] = useState<Naver>({} as Naver);
    const { navigate } = useNavigation();
    const [modal, setModal] = useState(false);

    const loadNaver = async () => {
        try {
            const response = await api.get('/navers/' + id);
            setNaver(response.data);
        } catch(err) {
            console.log(err);
        } 
    }

    useEffect(() => {
        loadNaver();
    },[]);

    function handleEditNaver(id: string) {
        navigate('EditNaver', { id });
    }

    return(
    <>
        <ModalDelete title="Excluir naver" message="Tem certeza que deseja excluir este naver?" show={modal} close={() => { setModal(false);}} id={naver.id} />

        <Container >
            <NaverImage source={{ uri: naver.url}} />
            
            <InfoContainer>                
                <NaverName>{ naver.name}</NaverName>
                <NaverDetails>{ naver.job_role}</NaverDetails>

                <NaverTextTitle>Idade</NaverTextTitle>
                <NaverDetails>{converterDateInYear(naver.birthdate) + ' anos'}</NaverDetails>

                <NaverTextTitle>Tempo de Empresa</NaverTextTitle>
                <NaverDetails>{converterDateInYear(naver.admission_date) > 1 ? converterDateInYear(naver.admission_date) + ' anos' : converterDateInYear(naver.admission_date) + ' ano' }</NaverDetails>

                <NaverTextTitle>Projetos que participou</NaverTextTitle>
                <NaverDetails>{naver.project}</NaverDetails>

                <ActionButtons>
                    <DeleteButton onPress={() => { setModal(!modal); }}>
                        <Ionicons name="md-trash" color="#212121" size={24} />
                        <TextButtonDelete>Excluir</TextButtonDelete>
                    </DeleteButton>

                    <EditButton onPress={() => {handleEditNaver(naver.id)}}>
                        <Ionicons name="md-create" color="#FFF" size={24} />
                        <TextButtonEdit>Editar</TextButtonEdit>
                    </EditButton>
                </ActionButtons>
            </InfoContainer>
        </Container>
    </>
    )
}

export default NaverInfo;