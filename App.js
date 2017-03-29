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
      promptVisible: false,
      tasks: [
        {key: 0, desc: "Build app", completed: false},
        {key: 1, desc: "Add Redux", completed: false},
        {key: 2, desc: "Make it pretty", completed: false}
      ]
    };


  changePromptState() {
    if(this.state.promptVisible) {
      this.setState({promptVisible:false});
    } else {
      this.setState({promptVisible:true});
    }

  }

  addNewTask(val) {
    const oldTasks = this.state.tasks;
    const newTask = {
      key: this.state.tasks[this.state.tasks.length - 1].key + 1,
      desc: val,
      completed: false
    };
    oldTasks.push(newTask);
    this.setState({tasks:oldTasks, promptVisible: false});
  }

  render() {

    return (
      <StyledView>
        <Header />
        <ListView tasks={this.state.tasks} />
        <Button onPress={this.changePromptState.bind(this)}/>

        <Prompt
          title="Add New Task"
          placeholder="Start typing"
          visible={ this.state.promptVisible }
          onCancel={ () => this.setState({
            promptVisible: false
          }) }
          onSubmit={ (value) => this.addNewTask(value) }/>
      </StyledView>
    );
  }
}
