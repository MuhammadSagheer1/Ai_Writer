import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Fonts} from '../constants';
import {Image} from 'react-native-elements'; // You can also use `Image` from 'react-native'

const SettingsheetBtns = ({title, imageSource, onPress}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Image source={imageSource} style={styles.imageStyle} />
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SettingsheetBtns;

const styles = StyleSheet.create({
  buttonContainer: {
    width: responsiveWidth(25),
    height: responsiveHeight(12.5),
    borderRadius: 15,
    backgroundColor: '#1F2123',
    justifyContent: 'center',
    alignItems: 'center', // Centers the content
  },
  imageStyle: {
    width: 25,
    height: 25,
    marginBottom: 10, // Adds space between image and text
  },
  textStyle: {
    fontSize: 12,
    fontFamily: Fonts.interRegular,
    color: '#D4DCE5', // Fixed typo ('wgite' -> 'white')
    alignSelf: 'center',
  },
});
