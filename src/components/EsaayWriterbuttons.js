import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import babelConfig from '../../babel.config';
import {Fonts} from '../constants';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const EsaayWriterbuttons = ({title, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: responsiveWidth(90),
        height: responsiveHeight(6), // Responsive height
        borderWidth: 1,
        borderRadius: responsiveWidth(1.3),
        borderColor: '#7D8085',
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Text
        style={{
          fontSize: 12,
          color: '#858585',
          fontFamily: Fonts.interRegular,
          paddingLeft: 10,
        }}>
        {title}
      </Text>
      <Image
        source={require('../../src/assets/dropdownarrow.png')}
        style={{marginRight: 10}}
      />
    </TouchableOpacity>
  );
};

export default EsaayWriterbuttons;

const styles = StyleSheet.create({});
