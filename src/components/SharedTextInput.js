import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Fonts} from '../constants';

const SharedTextInput = ({
  value,
  onChangeText,
  placeholder,
  inputStyle,
  bordercolor,
  placeholderTextColor,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, inputStyle, {borderColor: bordercolor}]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        bordercolor={bordercolor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidth(5), // Responsive padding
    alignItems: 'center', // Center horizontally
    marginVertical: responsiveHeight(1), // Responsive margin
  },
  input: {
    width: responsiveWidth(90),
    height: responsiveHeight(6), // Responsive height
    borderWidth: 1,
    borderRadius: responsiveWidth(1.3), // Responsive border radius
    paddingHorizontal: responsiveWidth(3), // Responsive padding
    fontSize: 13, // Responsive font size
    fontFamily: Fonts.interRegular,
  },
});

export default SharedTextInput;
