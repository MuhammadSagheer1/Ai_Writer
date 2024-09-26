import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import {Fonts} from '../constants';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const Settingsbtns = ({title, height, width, borderRadius, onPress, style}) => {
  return (
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

export default Settingsbtns;
