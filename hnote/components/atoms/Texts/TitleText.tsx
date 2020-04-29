import styled from 'styled-components';

interface ITitleText {
    color?: string;
}

const TitleText = styled.Text<ITitleText>`
    font-size: 30px;
    font-weight: 700;
    color: ${({ color }) => (color ? color : 'royalblue')};
`;

export default TitleText;
