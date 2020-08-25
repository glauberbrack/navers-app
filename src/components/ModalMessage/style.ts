 import styled from 'styled-components/native';
 import { colors } from '../../assets/styles/global';

export const ModalView = styled.View`
    height: 112px;
    background: ${colors.background};
    padding: 16px;
`;

export const ViewTitle = styled.View`
    flex-direction: row;
    justify-content: space-between;

`;

export const TitleModal = styled.Text`
    color: ${colors.textTitle};
    font-family: 'Montserrat_600SemiBold';
    font-size: 22px;
    line-height: 32px;
`;

export const MessageModal = styled.Text`
    color: ${colors.textBase};
    font-family: 'Montserrat_400Regular';
    font-size: 16px;
    line-height: 24px;
`;