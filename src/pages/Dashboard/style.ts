import styled from 'styled-components/native';
import { StyleSheet, FlatList } from 'react-native';
import Button from '../../components/Button';

import { colors } from '../../assets/styles/global';

export const Container = styled.View`
    flex: 1;
    background: ${colors.background};
    padding: 20px;
`;

export const ViewButtons = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 28px 0;
`;

export const LefText = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 22px;
    line-height: 32px;
    color: ${colors.textBase};
`;

export const AddButton = styled(Button)`
    background: ${colors.buttonDarkBackground};;
    margin: 0;
    max-width: 155px;
`;

export const TextButton = styled.Text`
    color: #FFF;
    font-style: normal;
    font-family: 'Montserrat_600SemiBold';
    font-size: 14px;
    align-items: center;
    text-align: center;
`;

export const List = styled.View`
    margin-bottom: 70px;
`;


export const ViewLoading = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const styles = StyleSheet.create({
    flatList: {
        width: 156,
        height: 156
    },
})