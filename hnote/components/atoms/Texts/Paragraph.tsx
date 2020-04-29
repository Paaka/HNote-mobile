import styled from 'styled-components';
import { Text } from 'react-native';

interface IParagraph {
    isFinished?: boolean;
    color?: string;
}

const Paragraph = styled.Text<IParagraph>`
    font-size: 20px;
    font-weight: 300;
    padding: 0;
    margin: 0 10px;
    text-decoration: ${({ isFinished }) =>
        isFinished ? 'line-through' : 'none'};
    color: ${({ color }) => (color ? color : 'black')};
`;

export default Paragraph;
