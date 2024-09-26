import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../constants';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const SaveGradient = ({title, height, width, borderRadius, onPress, style}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['red', 'blue']}
      style={{
        width: responsiveWidth(24),
        height: responsiveHeight(5.5),
        borderRadius: responsiveHeight(5.5),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={[styles.button, {height, width, borderRadius}, style]}
        onPress={onPress}>
        <Text
          style={{
            fontSize: 13,
            color: 'white',
            fontFamily: Fonts.interRegular,
          }}>   
          {title}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black', // Default button color

    borderWidth: 1,
  },
});

export default SaveGradient;
