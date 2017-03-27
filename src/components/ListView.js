import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import _ from 'lodash';

const StyledView = styled.View`
  padding-left: 16;
  padding-right: 16;
`

const StyledText = styled.Text`
  font-size: 26;
`
const Task = (props) => {
  return (
    <View>
      <StyledText>{props.description}</StyledText>
    </View>
  )
};


class ListView extends React.Component {

  state = {
    tasks: [
      {desc: "something", key: 1},
      {desc: "something else", key: 2}
    ]
  };



  render() {

    const tasks = _.map(this.state.tasks, x => <Task key={x.key} description={x.desc} />)
    return (
      <StyledView>
        {tasks}
      </StyledView>
    );
  }
};



export default ListView;
