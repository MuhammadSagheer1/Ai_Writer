import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Fonts} from '../constants';

const TouchAbleBox = ({ imageSource, titleText, descriptionText, onPress }) => {
  return (

      <TouchableOpacity
      activeOpacity={0.8}
        onPress={onPress}
        style={{
          width: responsiveWidth(47),
          height: responsiveHeight(21),
          backgroundColor: 'rgba(31, 33, 35, 1)',
          borderRadius: 15,
        }}>
        <Image
          source={imageSource}  // Dynamic Image Source
          style={{marginLeft: 20, marginTop: 20}}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 15,
            fontFamily: Fonts.semibold,
            marginLeft: 20,
            marginTop: 20,
          }}>
          {titleText} 
        </Text>
        <Text
          style={{
            color: 'white',
            fontSize: 13,
            fontFamily: Fonts.interRegular,
            marginLeft: 20,
            marginTop: 20,
          }}>
          {descriptionText}  
        </Text>
      </TouchableOpacity>
  
  );
};

export default TouchAbleBox;
