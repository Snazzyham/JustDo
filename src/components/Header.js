import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';

const StyledText = styled.Text`
  color: palevioletred;
  font-size: 34px;
  fontWeight: 400;
`
const Header = () => {
  return (
    <StyledText>
      DATE GOES HERE!
    </StyledText>
  );
}

export default Header;
