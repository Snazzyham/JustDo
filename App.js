import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import ListView from './src/components/ListView';
import styled from 'styled-components/native';


const StyledView = styled.View`
`;

const StyledText = styled.Text`

`;

export default class App extends React.Component {
  render() {
    return (
      <StyledView>
        <Header />
        <ListView />
      </StyledView>
    );
  }
}
