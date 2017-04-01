import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';

const CheckBox = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Image
        style={{width:36, height:36}}
        source={require('./Rectangle.png')}
      />
    </TouchableOpacity>
  );
};


export default CheckBox;
