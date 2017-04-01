import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';

const CheckBox = (props) => {
  if (!props.completed) {
      return (
      <TouchableOpacity onPress={props.onPress}>
        <Image
          style={{width:36, height:36}}
          source={require('./Rectangle.png')}
        />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <Image
          style={{width:36, height:36}}
          source={require('./Done.png')}
        />
      </TouchableOpacity>
    );
  }
};


export default CheckBox;
