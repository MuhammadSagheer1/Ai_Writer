import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Fonts} from '../constants';

const GradientButton = ({onPress, tittle,}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['red', 'blue']}
      style={styles.linearGradient}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.8}
        style={styles.button}>
        <View style={styles.btncontainer}>
          <Text style={styles.logintext}>{tittle}</Text>
          <Image
            source={require('../../src/assets/arrow.png')}
            style={styles.arrow}
          />
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    // marginTop: responsiveHeight(15),
    height: responsiveHeight(6.5),
    width: responsiveWidth(80),
    alignSelf: 'center',
    borderRadius: 25,
    justifyContent: 'center',
  },
  button: {
    width: responsiveWidth(79),
    height: responsiveHeight(6.2),
    backgroundColor: 'black',
    borderRadius: 25,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btncontainer: {
    flexDirection: 'row',
  },
  logintext: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: Fonts.medium,
    fontSize: 14,
  },
  arrow: {
    marginLeft: 5,
    alignSelf: 'center',
    marginTop: 3,
  },
});

export default GradientButton;
