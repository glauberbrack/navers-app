import styled from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';
import { colors } from '../../assets/styles/global';

const Button = styled(RectButton)`
    display: flex;
    align-items: center;
    justify-content: center;
    
    height: 40px;
    width: 100%;
    padding: 10px;    
    margin-top: 40px;
    background: ${colors.buttonDarkBackground};
`;

export default Button;