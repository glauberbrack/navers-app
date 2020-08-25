import styled from 'styled-components/native';
import { StyleSheet, FlatList } from 'react-native';
import Button from '../../components/Button';

import { colors } from '../../assets/styles/global';

export const Container = styled.View`
    flex: 1;
    background: ${colors.background};
    padding: 20px;
`;

export const Header = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin: 28px 0;
`;

export const LeftHeader = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 22px;
    line-height: 32px;
    color: ${colors.textBase};
`;

export const RightHeader = styled(Button)`
    background: ${colors.buttonDarkBackground};;
    margin: 0;
    max-width: 155px;
`;

export const TextButton = styled.Text`
    color: ${colors.textLight};
    font-style: normal;
    font-family: 'Montserrat_600SemiBold';
    font-size: 14px;
    align-items: center;
    text-align: center;
`;

export const ViewLoading = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
