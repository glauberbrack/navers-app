import React, { useContext, useState, useEffect } from 'react';
import { 
    Container, 
    ImageNaverInfo, 
    ViewImage, 
    ViewInfoNaverInfo, 
    NaverInfoName, 
    OfficeNaverInfo, 
    TextInfo, 
    TextDetail, 
    ViewButtons, 
    ButtonDeleteNaverInfo, 
    ButtonEditNaverInfo,
    TextButtonEdit,
    TextButtonDelete
} from './style';
import { ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation} from '@react-navigation/native';

import api, { config } from '../../services/api';
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
    const [ naver, setNaver ] = useState<Naver>({} as Naver);
    const { navigate } = useNavigation();
    const [modal, setModal] = useState(false);

    const loadNaver = async () => {
        try {
            const response = await api.get('/navers/' + id, config(user.token));
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
            <ViewImage>
                <ImageNaverInfo source={{ uri: naver.url}} />
            </ViewImage>

            <ScrollView>
                <ViewInfoNaverInfo>
                    <NaverInfoName>{ naver.name}</NaverInfoName>
                    <OfficeNaverInfo>{ naver.job_role}</OfficeNaverInfo>

                    <TextInfo>Idade</TextInfo>
                    <TextDetail>{converterDateInYear(naver.birthdate) + ' anos'}</TextDetail>

                    <TextInfo>Tempo de Empresa</TextInfo>
                    <TextDetail>{converterDateInYear(naver.admission_date) > 1 ? converterDateInYear(naver.admission_date) + ' anos' : converterDateInYear(naver.admission_date) + ' ano' }</TextDetail>

                    <TextInfo>Projetos que participou</TextInfo>
                    <TextDetail>{naver.project}</TextDetail>

                    <ViewButtons>
                        <ButtonDeleteNaverInfo onPress={() => { setModal(!modal); }}>
                            <Ionicons name="md-trash" color="#212121" size={30} />
                            <TextButtonDelete>Excluir</TextButtonDelete>
                        </ButtonDeleteNaverInfo>

                        <ButtonEditNaverInfo onPress={() => {handleEditNaver(naver.id)}}>
                            <Ionicons name="md-create" color="#FFF" size={30} />
                            <TextButtonEdit>Editar</TextButtonEdit>
                        </ButtonEditNaverInfo>
                    </ViewButtons>
                </ViewInfoNaverInfo>
            </ScrollView>
        </Container>
    </>
    )
}

export default NaverInfo;