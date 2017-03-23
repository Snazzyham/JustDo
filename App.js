import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import styled from 'styled-components/native';


const StyledView = styled.View`
  background-color: papayawhip;
  padding-top: 40px;
  padding-left: 16px;
  padding-right: 16px;
`;

const StyledText = styled.Text`
  color: tomato;
  font-size: 24px;
`;

export default class App extends React.Component {
  render() {
    return (
      <StyledView>
        <Header />
        <StyledText>Changes you make will automatically reload.</StyledText>
      </StyledView>
    );
  }
}
