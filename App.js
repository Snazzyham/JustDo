import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import ListView from './src/components/ListView';
import styled from 'styled-components/native';
import Button from './src/components/Button';
import Prompt from 'react-native-prompt';


const StyledView = styled.View`
  flex: 1;
`;

const StyledText = styled.Text`

`;

export default class App extends React.Component {
  

    state = {
      promptVisible: false
    };

  changePromptState() {
    if(this.state.promptVisible) {
      this.setState({promptVisible:false});
    } else {
      this.setState({promptVisible:true});
    }
  
  }
  
  render() {
    return (
      <StyledView>
        <Header />
        <ListView />
        <Button onPress={this.changePromptState.bind(this)}/>

        <Prompt
          title="Add New Task"
          placeholder="Start typing"
          visible={ this.state.promptVisible }
          onCancel={ () => this.setState({
            promptVisible: false
          }) }
          onSubmit={ (value) => this.setState({
            promptVisible: false
          }) }/>
      </StyledView>
    );
  }
}
