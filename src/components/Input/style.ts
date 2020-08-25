import styled from 'styled-components/native';
import { colors } from '../../assets/styles/global';

export const Container = styled.View`
    display: flex;
    margin-bottom: 30px;
    height: 62px;
    width: 100%;
`;

export const Label = styled.Text`
    font-family: 'Montserrat_600SemiBold';
    font-size: 16px;
    line-height: 18px;
    text-align: left;
    color: ${colors.textTitle};
    margin-bottom: 4px;
`;

export const InputComponent = styled.TextInput`
    font-size: 16px;
    background: ${colors.inputBackground};
    border: 1px solid ${colors.inputBorder};

    width: 100%;
    padding: 8px;
    height: 40px;
`;