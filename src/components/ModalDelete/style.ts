import styled from 'styled-components/native';
import Button from '../../components/Button';
import { colors } from '../../assets/styles/global';

export const ModalDeleteView = styled.View`
    height: 208px;
    max-width: 328px;
    background: ${colors.background};
    padding: 20px;
`;

export const ViewDeleteTitle = styled.View`
    flex-direction: row;
    justify-content: space-between;

`;

export const TitleModalDelete = styled.Text`
    color: ${colors.textTitle};
    font-family: 'Montserrat_600SemiBold';
    font-size: 22px;
    line-height: 32px;
    margin-bottom: 16px;
`;

export const MessageModalDelete = styled.Text`
    color: ${colors.textTitle};
    font-family: 'Montserrat_400Regular';
    font-size: 16px;
    line-height: 24px;
`;

export const ViewButtonsDelete = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 32px;
`;

export const ButtonDeleteModal = styled(Button)`
    width: 48%;
    margin: 0;
`;

export const ButtonCancel = styled(Button)`
    width: 48%;
    margin: 0;
    border: 1px solid ${colors.buttonBorder};
    background: #FFF;
`;

export const TextButtonDeleteModal = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 14px;
    color: ${colors.textLight};
`;

export const TextButtonCancel = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 14px;
    color: ${colors.textBase};
`;
