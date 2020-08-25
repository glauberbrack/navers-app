 import styled from 'styled-components/native';
 import Button from '../../components/Button';
import { colors } from '../../assets/styles/global';

export const Container = styled.View`
    background: ${colors.background};
    flex: 1;
`;

export const NaverImage = styled.Image`
    width: 100%;
    height: 288px;
`;

export const InfoContainer = styled.View`
    margin-top: 10px;
    padding: 16px;
`;

export const NaverName = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 22px;
    line-height: 32px;
    color: ${colors.textTitle};
`;

export const NaverDetails = styled.Text`
    font-family: 'Montserrat_400Regular';
    font-size: 16px;
    line-height: 24px;
    color: ${colors.textBase};
`;

export const NaverTextTitle = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 16px;
    color: ${colors.textTitle};
   
    margin-top: 12px;
`;


export const ActionButtons = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 32px;
    width: 100%;
`;


export const DeleteButton = styled(Button)`
    width: 48%;
    margin: 0;
    border: 1px solid ${colors.buttonBorder};
    background: ${colors.background};
`;

export const EditButton = styled(Button)`
    width: 48%;
    margin: 0;
`;


export const TextButtonDelete = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 14px;
    color: ${colors.textBase};
    line-height: 24px;
    margin-left: 8px;
`;

export const TextButtonEdit = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 14px;
    color: ${colors.textLight};
    line-height: 24px;
    margin-left: 8px;
`;
