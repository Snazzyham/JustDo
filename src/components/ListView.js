import React from 'react';
import {Text, ScrollView, View } from 'react-native';
import styled from 'styled-components/native';
import _ from 'lodash';

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
const Task = (props) => {
  return (
      <StyledText>{props.description}</StyledText>
  )
};


class ListView extends React.Component {

  render() {

    const tasks = _.map(this.props.tasks, x => <Task key={x.key} description={x.desc} />)
    return (
      <StyledView>
        {tasks}
      </StyledView>
    );
  }
};



export default ListView;
