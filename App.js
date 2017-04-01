import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import styled from 'styled-components/native';
import Button from './src/components/Button';
//import Prompt from 'react-native-prompt';
import { createStore } from 'redux';
import todoApp from './src/reducers';
import { Provider, connect } from 'react-redux';
import { addTodo } from './src/actions/'
import VisibleTodoList from './src/components/VisibleTodoList';
import AddTodo from './src/components/AddTodo';


const StyledView = styled.View`
  flex: 1;
`;

const StyledText = styled.Text`

`;

class App extends React.Component {


    state = {
      promptVisible: false,
      // tasks: [
      //   {key: 0, desc: "Build app", completed: false},
      //   {key: 1, desc: "Add Redux", completed: false},
      //   {key: 2, desc: "Make it pretty", completed: false}
      // ]
    };


  changePromptState() {
    if(this.state.promptVisible) {
      this.setState({promptVisible:false});
    } else {
      this.setState({promptVisible:true});
    }

  }

  componentDidMount() {
    // console.log(this.state);
  }

  //
  // addNewTask(val) {
  //   const oldTasks = this.state.tasks;
  //   const newTask = {
  //     key: this.state.tasks[this.state.tasks.length - 1].key + 1,
  //     desc: val,
  //     completed: false
  //   };
  //   oldTasks.push(newTask);
  //   this.setState({tasks:oldTasks, promptVisible: false});
  // }

  render() {
    return (
      <Provider store={createStore(todoApp)}>
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
