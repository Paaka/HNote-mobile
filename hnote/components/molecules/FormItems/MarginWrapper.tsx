import React, { FC } from 'react';
import styled from 'styled-components';

interface IMarginWrapper {
    mLeft?: Number;
    mRight?: Number;
    mTop?: Number;
    mBottom?: Number;
}

const MW = styled.View`
    margin-left: ${({ mLeft }) => (mLeft ? mLeft + 'px' : '0px')};
    margin-right: ${({ mRight }) => (mRight ? mRight + 'px' : '0px')};
    margin-top: ${({ mTop }) => (mTop ? mTop + 'px' : '0px')};
    margin-bottom: ${({ mBottom }) => (mBottom ? mBottom + 'px' : '0px')};
`;

const MarginWrapper: FC<IMarginWrapper> = ({
    mLeft,
    mRight,
    mTop,
    mBottom,
    ...props
}) => (
    <MW mLeft={mLeft} mRight={mRight} mTop={mTop} mBottom={mBottom}>
        {props.children}
    </MW>
);

export default MarginWrapper;
