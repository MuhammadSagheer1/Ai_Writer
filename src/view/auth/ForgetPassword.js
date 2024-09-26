import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {Fonts} from '../../constants';
import SharedTextInput from '../../components/SharedTextInput';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import GradientButton from '../../components/GradientButton';

const ForgetPassword = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = [responsiveHeight(75)];

  useEffect(() => {
    bottomSheetRef.current?.snapToIndex(0);
  }, []);

  return (
    <ImageBackground
      source={require('../../../src/assets/Property.png')}
      style={styles.container}>
         <Image source={require('../../../src/assets/logo.png')} style={styles.logo}/>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        enableOverDrag={false}
        backgroundStyle={styles.background}
        index={0}>
        <View style={styles.sheetContent}>
          <Text style={styles.forgetPasswordText}>Forget Password?</Text>
          <Text style={styles.instructionText}>Enter your backup email</Text>
          <Text style={styles.emailtext}>Recovery Email Address</Text>
          <SharedTextInput
            placeholder={'Enter email'}
            placeholderTextColor={'rgba(219, 219, 219, 1)'}
            bordercolor={"#E2E8F0"}
          />
          <View style={styles.buttonContainer}>
            <GradientButton tittle={'Send Password'} />
          </View>
          <Text style={styles.signuptext}>Don't have an account? Sign Up.</Text>
        </View>
      </BottomSheet>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    marginTop:responsiveHeight(7)
 },
  background: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderTopLeftRadius: responsiveWidth(6),
    borderTopRightRadius: responsiveWidth(6),
  },
  sheetContent: {
    paddingHorizontal: responsiveWidth(5),
    paddingTop: responsiveHeight(2),
  },
  forgetPasswordText: {
    fontSize: responsiveHeight(3.5),
    fontFamily: Fonts.semibold,
    color: 'rgba(255, 255, 255, 1)',
    alignSelf: 'center',
    marginTop: responsiveHeight(1.5),
  },
  instructionText: {
    fontSize: responsiveHeight(2),
    fontFamily: Fonts.interRegular,
    color: 'rgba(255, 255, 255, 1)',
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
  emailtext: {
    color: 'rgba(255, 255, 255, 1)',
    // paddingLeft: responsiveWidth(1),
    fontSize: 13,
    marginTop: responsiveHeight(2.5),
    fontFamily: Fonts.interRegular,
  },
  buttonContainer: {
    marginTop: responsiveHeight(6),
  },
  signuptext: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: Fonts.interRegular,
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
  },
});

export default ForgetPassword;
