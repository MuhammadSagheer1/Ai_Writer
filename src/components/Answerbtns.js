import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Answerbtns = ({imageSource}) => {
  return (
    <TouchableOpacity
      style={{
        width: responsiveWidth(12),
        height: responsiveHeight(6),
        backgroundColor: '#2d2e2f',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 3,
      }}>
      <Image source={imageSource} />
    </TouchableOpacity>
  );
};

export default Answerbtns;

const styles = StyleSheet.create({});
