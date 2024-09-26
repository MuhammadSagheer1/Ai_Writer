import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import {Fonts} from '../../constants';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import GradientButton from '../../components/GradientButton';

const Verify = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = [responsiveHeight(80)];

  useEffect(() => {
    bottomSheetRef.current?.snapToIndex(0);
  }, []);

  return (
    <ImageBackground
      source={require('../../../src/assets/Property.png')}
      style={styles.container}>
      <Image
        source={require('../../../src/assets/logo.png')}
        style={styles.logo}
      />
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        enableOverDrag={false}
        backgroundStyle={styles.background}
        index={0}>
        <View style={styles.sheetContent}>
          <Text style={styles.title}>Verify Your Account</Text>
          <Text style={styles.description}>
            Enter the verification code to confirm the identity
          </Text>

          <Text style={styles.info}>Code sent to aimen@gmail.com</Text>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.inputContainer}>
            <TextInput style={styles.input} defaultValue="-" />
            <TextInput style={styles.input} defaultValue="-" />
            <TextInput style={styles.input} defaultValue="-" />
            <TextInput style={styles.input} defaultValue="-" />
          </ScrollView>

          <Text style={styles.timer}>Send again in 20 seconds</Text>

          <Text style={styles.info}>Code sent to +1 302 385 6990</Text>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.inputContainer}>
            <TextInput style={styles.input} defaultValue="-" />
            <TextInput style={styles.input} defaultValue="-" />
            <TextInput style={styles.input} defaultValue="-" />
            <TextInput style={styles.input} defaultValue="-" />
          </ScrollView>

          <TouchableOpacity style={styles.resendButton}>
            <Text style={styles.buttonText}>Send again</Text>
            <Image
              source={require('../../../src/assets/reload.png')}
              style={styles.icon}
            />
          </TouchableOpacity>

          <View style={styles.verifyButtonContainer}>
            <GradientButton tittle="Verify Account" />
          </View>

          <TouchableOpacity style={styles.updateInfoButton}>
            <Text style={styles.buttonText}>Update info</Text>
            <Image
              source={require('../../../src/assets/pencil.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  logo: {
    marginTop: responsiveHeight(7),
  },
  background: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  sheetContent: {
    padding: responsiveWidth(5),
  },
  title: {
    fontSize: responsiveWidth(6),
    fontFamily: Fonts.semibold,
    color: 'rgba(255, 255, 255, 1)',
    alignSelf: 'center',
    marginTop: responsiveHeight(1),
  },
  description: {
    fontSize: responsiveWidth(3.5),
    fontFamily: Fonts.interRegular,
    color: 'rgba(255, 255, 255, 1)',
    alignSelf: 'center',
  },
  info: {
    fontSize: responsiveWidth(3.5),
    fontFamily: Fonts.interRegular,
    color: 'rgba(255, 255, 255, 1)',
    alignSelf: 'center',
    marginTop: responsiveHeight(3),
  },
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: responsiveHeight(3),
  },
  input: {
    width: responsiveWidth(14),
    height: responsiveHeight(7),
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'rgba(226, 232, 240, 1)',
    color: 'white',
    textAlign: 'center',
    fontSize: responsiveWidth(5),
  },
  timer: {
    fontSize: responsiveWidth(3.5),
    fontFamily: Fonts.interRegular,
    color: 'rgba(255, 255, 255, 1)',
    alignSelf: 'center',
    marginTop: responsiveHeight(3),
  },
  resendButton: {
    width: responsiveWidth(24),
    height: responsiveHeight(4),
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.3)',
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: responsiveWidth(3.3),
    color: 'rgba(255,255,255,1)',
    fontFamily: Fonts.interRegular,
    alignSelf: 'center',
  },
  icon: {
    alignSelf: 'center',
    marginLeft: responsiveWidth(1),
  },
  verifyButtonContainer: {
    marginTop: responsiveHeight(6),
  },
  updateInfoButton: {
    width: responsiveWidth(24),
    height: responsiveHeight(4),
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: 'rgba(255,255,255,0.3)',
    alignSelf: 'center',
    marginTop: responsiveHeight(2),
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

export default Verify;
