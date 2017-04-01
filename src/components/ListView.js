import React from 'react';
import {Text, ScrollView, View } from 'react-native';
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
`
const TodoContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
const Task = (props) => {
  return (
    <TodoContainer>
      <StyledText>{props.description} </StyledText>
      <CheckBox completed={props.isCompleted}/>
    </TodoContainer>
  )
};


class ListView extends React.Component {

  componentDidMount() {

  }

  render() {

    const tasks = _.map(this.props.todos, x => <Task key={x.id} description={x.text} isCompleted={x.completed}/>)
    return (
      <StyledView>
        {tasks}
      </StyledView>
    );
  }
};



export default ListView;
