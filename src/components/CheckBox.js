import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';

const CheckBox = (props) => {
  if (!props.completed) {
      return (
      <TouchableOpacity onPress={props.onPress}>
        <Image
          style={{width:24, height:24}}
          source={require('./Rectangle.png')}
        />
      </TouchableOpacity>
    );
  } else {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <Image
          style={{width:24, height:24}}
          source={require('./Done.png')}
        />
      </TouchableOpacity>
    );
  }
};


export default CheckBox;
