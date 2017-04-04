import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {connect} from 'react-redux';
import * as myActions from '../actions';
import styled from 'styled-components/native';

const mapStateToProps = (state) => {
  return {visibilityFilter: state.visibilityFilter}
}

const Link = styled.Text`
  color: ${props => props.isActive ? '#7B16FF' : '#000'};
  font-size: 21;
  padding: 12;
`

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8;
`
class LinkView extends React.Component {
  render() {

    const active = "SHOW_ACTIVE";
    const all = "SHOW_ALL";
    const completed = "SHOW_COMPLETED";

    return (
      <Row>
        <TouchableOpacity onPress={() => this.props.setVisibilityFilter(active)}>
          <Link isActive={this.props.visibilityFilter == active ? true : false}>
            ACTIVE
          </Link>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.setVisibilityFilter(all)}>
        <Link isActive={this.props.visibilityFilter == all ? true : false}>
        ALL
        </Link>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.setVisibilityFilter(completed)}>
          <Link isActive={this.props.visibilityFilter == completed ? true : false}>
            COMPLETED
          </Link>
        </TouchableOpacity>
      </Row>
    )
  }
}


export default connect(mapStateToProps, myActions)(LinkView);
