import React, { useState,useContext } from 'react';
import { ScrollView, FlatList, ActivityIndicator } from 'react-native';
import { Container, Header, LeftHeader, RightHeader, TextButton,  ViewLoading } from './style';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';

import NaverItem, { NaverItemProps } from '../../components/NaverItem';
import ContextData, { getToken } from '../../contexts/ContextData';
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
        try {
            const response = await api.get('/navers');
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
        <NaverItem user_naver={item} />
    );


    return (
        <Container>
            <Header>

                <LeftHeader>Navers</LeftHeader>

                <RightHeader onPress={handleAddNaver}>
                    <TextButton>Adicionar naver</TextButton>
                </RightHeader>

            </Header>

            { loadingList ? <ViewLoading>
                <ActivityIndicator color="#212121" size={35} />
            </ViewLoading> :

                <ScrollView showsVerticalScrollIndicator={false}>
                    <FlatList
                        data={navers}
                        numColumns={2}
                        renderItem={renderItem}
                        keyExtractor={(item: NaverItemProps) => item.id}
                    />
                </ScrollView>
            }

        </Container>
    );
}

export default Dashboard;