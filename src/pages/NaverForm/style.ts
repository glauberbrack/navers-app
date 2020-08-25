import styled from 'styled-components/native';
import Button from '../../components/Button';
import { colors } from '../../assets/styles/global';

export const Container = styled.View`
    flex: 1;
    padding: 16px;
    background: ${colors.background};
`;

export const HeaderText = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 22px;
    margin-top: 16px;
    margin-bottom: 24px;
    text-align: center;
`;

export const SaveButton = styled(Button)`
    margin-top: 10px;
`;

export const TextButton = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 14px;
    line-height: 24px;
    color: ${colors.textLight};
    display: flex;
    align-items: center;
    text-align: center;
`;