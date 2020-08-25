import styled from 'styled-components/native';
import Button from '../../components/Button';
import { colors } from '../../assets/styles/global';

export const Container = styled.View`
    padding: 16px;
    background: ${colors.background};

    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
`;

export const Logo = styled.Image`
    height: 40px;
    max-width: 156px;
    margin-top: 156px;
    margin-bottom: 56px;
`;

export const TextButton = styled.Text`
    font-family: 'Montserrat_500Medium';
    font-size: 14px;
    line-height: 24px;
    color:  ${colors.textLight};
    display: flex;
    align-items: center;
    text-align: center;
`;

export const ViewError = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40px;
    background: ${colors.errorBackground};
    margin: 20px 0;
`;

export const TextError = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 14px;
    line-height: 24px;
    color:  ${colors.textLight};
`;

export const Loading = styled.ActivityIndicator`
    margin-top: 20px;
`;