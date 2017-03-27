import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';

const StyledButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 16;
  right: 16;
`;

const Button = (props) => {
  return (
    <StyledButton onPress={props.onPress}>
      <Image
        style={{width:86, height:86}}
        source={require('./button.png')}
      />
    </StyledButton>
  );
};


export default Button;

