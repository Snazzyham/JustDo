import React from 'react';
import Prompt from 'react-native-prompt';
import {connect} from 'react-redux';
import * as myActions from '../actions';

const mapStateToProps = (state) => {
  return { todos: state.todos }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onEventClick: (val) => {
//       dispatch(addTodo(val))
//     }
//   }
// }

class AddTodo extends React.Component {

  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <Prompt
        title="Add New Task"
        placeholder="Start typing"
        visible={this.props.isHidden}
        onCancel={this.props.onEvent }
        onSubmit={(value) => this.props.addTodo(value)}/>
    );
  }
}

export default connect(mapStateToProps, myActions)(AddTodo);