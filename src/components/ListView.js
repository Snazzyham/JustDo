import React from 'react';
import {Text, ScrollView, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import _ from 'lodash';
import CheckBox from './CheckBox';

const StyledView = styled.ScrollView`
  padding-left: 16;
  padding-right: 16;
  margin-bottom: 57;
`

const StyledText = styled.Text`
  font-size: 26;
  padding-bottom: 10;
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
      <StyledText completed={props.isCompleted}>{props.description} </StyledText>
      <CheckBox completed={props.isCompleted} onPress={props.onTodoClick}/>
    </TodoContainer>
  )
};


class ListView extends React.Component {

  componentDidMount() {

  }

  // changeVisible(status){
  //   switch (status) {
  //     case "completed":
  //       this.props.setVisibilityFilter('SHOW_COMPLETED');
  //       break;
  //     case "all":
  //       this.props.setVisibilityFilter('SHOW_ALL');
  //       break;
  //     case "active":
  //       this.props.setVisibilityFilter('SHOW_ACTIVE');
  //       break;
  //   }
  // }

  render() {

    const tasks = _.map(this.props.todos, x => <Task key={x.id} description={x.text} isCompleted={x.completed} onTodoClick={() => this.props.toggleTodo(x.id)}/>)


    return (
      <View>
        <StyledView>
          {tasks}
        </StyledView>
      </View>
    );
  }
};



export default ListView;
