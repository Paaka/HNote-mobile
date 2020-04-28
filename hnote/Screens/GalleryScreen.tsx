import React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const Wrapper = styled.View`
    width: 100%;
    height: 100%;
    padding: 10px;
`;

const JustifyToCenter = styled.View`
    align-items: center;
    margin: 10px 0;
`;

const JustifyToRear = styled.View`
    align-items: flex-end;
`;

const StyledImage = styled.Image`
    width: 250px;
    height: 250px;
    border-radius: 500px;
`;

const GalleryScreen = (props) => {
    return (
        <ScrollView>
            <Wrapper>
                <StyledImage
                    source={require('../assets/images/mug.jpg')}
                    resizeMode="cover"
                />
                <JustifyToCenter>
                    <StyledImage
                        source={require('../assets/images/highway.jpg')}
                        resizeMode="cover"
                    />
                </JustifyToCenter>
                <JustifyToRear>
                    <StyledImage
                        source={require('../assets/images/coffee.jpg')}
                        resizeMode="cover"
                    />
                </JustifyToRear>
            </Wrapper>
        </ScrollView>
    );
};

export default GalleryScreen;
