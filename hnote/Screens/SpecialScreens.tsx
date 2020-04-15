import React from 'react';
import styled from 'styled-components';
import Paragraph from '../components/atoms/Texts/Paragraph';

const Wrapper = styled.View`
    flex: 1;
    background-color: royalblue;
`;

const SpecialScreens = (props) => {
    return (
        <Wrapper>
            <Paragraph>Hello</Paragraph>
        </Wrapper>
    );
};

export default SpecialScreens;
