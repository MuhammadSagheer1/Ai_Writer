import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Image} from 'react-native';
import {Fonts} from '../constants';
import ChatCommunication from './ChatCommunication';

const EasyWriterChat = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 15,
      }}>
      <View
        style={{
          width: responsiveWidth(14),
          height: responsiveHeight(7),
          borderRadius: responsiveHeight(7),
          backgroundColor: 'rgba(218, 193, 224, 1)',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../src/assets/Logo1.png')}
          style={{alignSelf: 'center', width: 30, height: 30, marginTop: 10}}
        />
        <View
          style={{
            width: responsiveWidth(3),
            height: responsiveHeight(1.5),
            borderRadius: responsiveHeight(1.5),
            backgroundColor: 'green',
            marginLeft: responsiveWidth(10),
            borderWidth: 2,
          }}></View>
      </View>

      <Text
        style={{
          fontSize: 20,
          fontFamily: Fonts.semibold,
          color: 'white',
          alignSelf: 'center',
          marginLeft: 15,
        }}>
        PerfectEssayWriter.ai SChat
      </Text>
    </View>
    // </View>
  );
};

export default EasyWriterChat;

const styles = StyleSheet.create({});
