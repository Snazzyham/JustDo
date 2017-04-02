import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import Header from './src/components/Header';
import styled from 'styled-components/native';
import Button from './src/components/Button';
//import Prompt from 'react-native-prompt';
import { compose, createStore } from 'redux';
import todoApp from './src/reducers';
import { Provider, connect } from 'react-redux';
import { addTodo } from './src/actions/'
import VisibleTodoList from './src/components/VisibleTodoList';
import AddTodo from './src/components/AddTodo';
import {persistStore, autoRehydrate} from 'redux-persist';


const StyledView = styled.View`
  flex: 1;
`;

const StyledText = styled.Text`

`;

const store = createStore(todoApp, undefined, compose(autoRehydrate()));
const persistor = persistStore(store, {storage: AsyncStorage});

class App extends React.Component {


  state = {
    promptVisible: false,
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
      <Provider store={store} persistor={persistor}>
      <StyledView>
        <Header />
        <VisibleTodoList />
        <AddTodo onEvent={this.changePromptState.bind(this)} isHidden={this.state.promptVisible}/>
        <Button onPress={this.changePromptState.bind(this)}/>
      </StyledView>
      </Provider>
    );
  }
}

export default App;
