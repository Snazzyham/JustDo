import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';
import _ from 'lodash';

const Task = (props) => {
  return (
    <Text>{props.description}</Text>
  )
};


class ListView extends React.Component {

  state = {
    tasks: [
      {key: "something"},
      {key: "something else"}
    ]
  };



  render() {

    const tasks = _.map(this.state.tasks, x => <Task description={x.key} />)
    return (
      <View>
        {tasks}
      </View>
    );
  }
};



export default ListView;
