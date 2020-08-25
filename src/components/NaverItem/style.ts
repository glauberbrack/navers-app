import styled from 'styled-components/native';
import { colors } from '../../assets/styles/global';

export const Container = styled.TouchableOpacity`
    width: 156px;
    height: 236px;
    margin: 24px 16px 24px 0;
`;

export const NaverAvatar = styled.Image`
    width: 156px;
    height: 156px;
`;

export const NaverInfo = styled.View`
    padding: 5px;
`;

export const NaverName = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 14px;
    line-height: 20px;
    color: ${colors.textTitle};
`;

export const NaverRole = styled.Text`
    font-family: 'Montserrat_400Regular';
    font-size: 14px;
    line-height: 16px;
    color: ${colors.textBase};

    margin-top: 4px;
`;

export const ActionButtons = styled.View`
    flex-direction: row;
    margin-top: 8px;
`;

export const ActionIcon = styled.TouchableOpacity`
    margin-right: 16px;
`;
