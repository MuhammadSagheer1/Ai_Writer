import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Fonts} from '../constants';

const ChatCommunication = ({tittleText}) => {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        style={{
          width: responsiveWidth(76),
          height: responsiveHeight(6),
          backgroundColor: '#231326',
          borderRadius: responsiveWidth(20),
          borderWidth: 1,
          borderColor: '#5a126b',
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: '#DACADE',
            fontSize: 13,
            fontFamily: Fonts.interRegular,
            alignSelf: 'center',
          }}>
          {tittleText}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChatCommunication;

const styles = StyleSheet.create({
  buttonStyle: {},
  textStyle: {},
});
