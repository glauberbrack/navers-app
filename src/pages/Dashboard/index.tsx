import React, { useState,useContext } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import { Container, ViewButtons, LefText, AddButton, TextButton, List, ViewLoading, styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

import UserItem, {UserItemProps} from '../../components/UserItem';
import ContextData from '../../contexts/ContextData';
import api, {config} from '../../services/api';


const Dashboard: React.FC = () => {

    const { navigate } = useNavigation();
    const { user } = useContext(ContextData);
    const [navers, setNavers] = useState([]);
    const [loadingList, setLoadingList] = useState(true);

    function handleAddNaver() {
        navigate('AddNaver', { id: '' });
    }

    const loadNavers = async () => {
        try{
            const response = await api.get('/navers',config(user.token));
            setNavers(response.data);
            setLoadingList(false);
        } catch(err) {
            console.log(err);
        }
    }

    useFocusEffect(() => {
        loadNavers();
    });

    const renderItem = ({ item }) => (
        <UserItem user_naver={item} />
    );


    return (
        <Container>


            <ViewButtons>

                <LefText>Navers</LefText>

                <AddButton onPress={handleAddNaver}>
                    <TextButton>Adicionar naver</TextButton>
                </AddButton>

            </ViewButtons>

            { loadingList ? <ViewLoading>
                <ActivityIndicator color="#212121" size={35} />
            </ViewLoading> :

                <List>
                    <FlatList
                        data={navers}
                        numColumns={2}
                        renderItem={renderItem}
                        keyExtractor={(item: UserItemProps) => item.id}
                    />
                </List>
            }

        </Container>
    );
}

export default Dashboard;