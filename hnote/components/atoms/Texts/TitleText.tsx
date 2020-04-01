import styled from 'styled-components';

const TitleText = styled.Text`
    font-size: 30px;
    font-weight: 700;
    color: ${({ color }) => (color ? color : 'royalblue')};
`;

export default TitleText;
