import React from 'react';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

const DayText = styled.Text`
  padding-top: 25;
  font-size: 41;
  font-weight: 600;
`
const DateText = styled.Text`
  font-size: 41;
  font-weight: 600;
  padding-bottom: 45;
`

const StyledView = styled.View`
  padding-top: 40;
  justify-content: center;
  padding-left: 16;
`


class Header extends React.Component {

  state = {};

  componentDidMount() {
    let d = new Date();

    let date = d.getDate();
    let month = d.getMonth();
    let day = d.getDay();
    let stringDay = '';
    let stringMonth = '';


    switch(day) {
      case 0:
        stringDay = 'Sunday';
        break;
      case 1:
        stringDay = 'Monday';
        break;
      case 2:
        stringDay = 'Tuesday';
        break;
      case 3:
        stringDay = 'Wednesday';
        break;
      case 4:
        stringDay = 'Thursday';
        break;
      case 5:
        stringDay = 'Friday';
        break;
      case 6:
        stringDay = 'Saturday';
        break;
    }

    switch(month) {
      case 0:
        stringMonth = 'January';
        break;
      case 1:
        stringMonth = 'February';
        break;
      case 2:
        stringMonth = 'March';
        break;
      case 3:
        stringMonth = 'April';
        break;
      case 4:
        stringMonth = 'May';
        break;
      case 5:
        stringMonth = 'June';
        break;
      case 6:
        stringMonth = 'July';
        break;
      case 7:
        stringMonth = 'August';
        break;
      case 8:
        stringMonth = 'September';
        break;
      case 9:
        stringMonth = 'October';
        break;
      case 10:
        stringMonth = 'November';
        break;
      case 11:
        stringMonth = 'December';
        break;
    }

    this.setState({
      date: date,
      month: stringMonth.toUpperCase(),
      day: stringDay.toUpperCase()
    });

  }


  render() {
    return (
      <StyledView>
        <DayText>
          {this.state.day}
        </DayText>
        <DateText>
          {this.state.date} {this.state.month}
        </DateText>
      </StyledView>

    );
  }
}

export default Header;
