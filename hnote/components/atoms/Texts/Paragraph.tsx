import styled from 'styled-components';
import { Text } from 'react-native';

const Paragraph = styled.Text`
    font-size: 20px;
    font-weight: 300;
    padding: 0;
    margin: 0 10px;
    text-decoration: ${({ isFinished }) =>
        isFinished ? 'line-through' : 'none'};
`;

export default Paragraph;
