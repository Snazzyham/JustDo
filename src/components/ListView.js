import React from 'react';
import {Text, ScrollView, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import _ from 'lodash';
import CheckBox from './CheckBox';

const StyledView = styled.ScrollView`
  padding-left: 16;
  padding-right: 16;
  margin-bottom: 110;
`

const StyledText = styled.Text`
  font-size: 21;
  flexWrap: wrap;
  padding-bottom: 10;
  max-width: 273;
  font-family: monospace;
  textDecorationLine: ${props => props.completed ? 'line-through' : 'none'};
`
const TodoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
const Task = (props) => {
  return (
    <TodoContainer>
      <StyledText completed={props.isCompleted} onLongPress={props.deleteTodo}>{props.description} </StyledText>
      <CheckBox completed={props.isCompleted} onPress={props.onTodoClick}/>
    </TodoContainer>
  )
};


class ListView extends React.Component {

  componentDidMount() {

  }

  render() {

    const tasks = _.map(this.props.todos, x => <Task key={x.id} description={x.text} isCompleted={x.completed} onTodoClick={() => this.props.toggleTodo(x.id)} deleteTodo={() => this.props.deleteTodo(x.id)}/>)


    return (


        <StyledView>
          {tasks}
        </StyledView>
    );
  }
};



export default ListView;
