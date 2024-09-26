import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {forwardRef, useMemo, useState} from 'react';
import {Fonts} from '../constants';
import BottomSheet from '@gorhom/bottom-sheet';
import SharedTextInput from '../components/SharedTextInput';
import GradientButton from '../components/GradientButton';
import CountryPicker from 'react-native-country-picker-modal';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

const BottomSheetSignup = forwardRef((props, ref) => {
  const navigation = useNavigation();
  const [countryCode, setCountryCode] = useState('US'); // Default country code

  const handleSelectCountry = country => {
    setCountryCode(country.cca2); // Set the country code
  };
  const snapPoints = useMemo(() => ['25%', '50%', responsiveHeight(85)], []);

  return (
    <BottomSheet
      ref={ref}
      index={-1} // Start closed
      snapPoints={snapPoints}
      enablePanDownToClose={true} // Allow drag to close
      backgroundStyle={styles.background} // Custom background style for sheet
      containerStyle={styles.container} // Custom container style for sheet
      onClose={() => {
        if (props.onClose) {
          props.onClose(); // Call the parent onClose callback
        }
      }}>
      <View style={styles.contentContainer}>
        <Text style={styles.signinText}>Get Started for Free</Text>

        <Text style={styles.labelText}>Name</Text>
        <SharedTextInput
          placeholder={'Enter full name'}
          placeholderTextColor={'rgba(219, 219, 219, 1)'}
          bordercolor={"#E2E8F0"}
        />

        <Text style={styles.labelText}>Email Address</Text>
        <SharedTextInput
          placeholder={'Enter email'}
          placeholderTextColor={'rgba(219, 219, 219, 1)'}
          bordercolor={"#E2E8F0"}
        />

        <Text style={styles.labelText}>Phone Number</Text>
        <View style={styles.phoneContainer}>
          <CountryPicker
            countryCode={countryCode}
            withFlag
            withCallingCode
            withFilter
            onSelect={handleSelectCountry}
            containerButtonStyle={styles.countryPickerButton}
          />
          <TextInput
            style={styles.phoneInput}
            placeholder="XXX-XXXXXXX"
            placeholderTextColor={'rgba(219, 219, 219, 1)'}
            keyboardType="numeric"
          />
        </View>

        <Text style={styles.labelText}>Password</Text>
        <SharedTextInput
          placeholder={'Set a password'}
          placeholderTextColor={'rgba(219, 219, 219, 1)'}
          bordercolor={"#E2E8F0"}
        />

        <Text style={styles.labelText}>Re-enter Password</Text>
        <SharedTextInput
          placeholder={'Re-enter password'}
          placeholderTextColor={'rgba(219, 219, 219, 1)'}
          bordercolor={"#E2E8F0"}
        />

        <View style={styles.buttonContainer}>
          <GradientButton
            onPress={() => {
              navigation.navigate('Verify');
            }}
            tittle={'Create Account'}
          />

          <Text style={styles.signupText}>
            Already have an account? Sign in here.
          </Text>
        </View>
      </View>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Ensure the background color is set
    borderTopLeftRadius: responsiveWidth(6), // Responsive border radius
    borderTopRightRadius: responsiveWidth(6), // Responsive border radius
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: responsiveWidth(5), // Responsive padding
  },
  signinText: {
    color: 'white',
    fontFamily: Fonts.semibold,
    fontSize: responsiveWidth(7), // Responsive font size
    alignSelf: 'center',
    marginTop: responsiveHeight(2), // Responsive margin top
  },
  labelText: {
    color: 'rgba(255, 255, 255, 1)',
    paddingLeft: responsiveWidth(0.5), // Responsive padding
    marginTop: responsiveHeight(1), // Responsive margin top
    fontFamily: Fonts.interRegular,
    fontSize: 13, // Responsive font size
  },
  phoneContainer: {
    flexDirection: 'row',
    marginTop: responsiveHeight(1), // Responsive margin top
  },
  countryPickerButton: {
    height: responsiveHeight(6), // Responsive height
    borderColor: 'rgba(226, 232, 240, 1)',
    borderWidth: 1,
    borderTopLeftRadius: responsiveWidth(1), // Responsive border radius
    borderBottomLeftRadius: responsiveWidth(1), // Responsive border radius
    paddingHorizontal: responsiveWidth(4), // Responsive padding
    width: responsiveWidth(20), // Responsive width
    marginRight: 0, // Remove margin right
  },
  phoneInput: {
    height: responsiveHeight(6), // Responsive height
    borderColor: 'rgba(226, 232, 240, 1)',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopRightRadius: responsiveWidth(1), // Responsive border radius
    borderBottomRightRadius: responsiveWidth(1), // Responsive border radius
    paddingHorizontal: responsiveWidth(4), // Responsive padding
    fontSize: responsiveWidth(3), // Responsive font size
    fontFamily: Fonts.interRegular,
    width: responsiveWidth(70), // Responsive width
  },
  buttonContainer: {
    marginTop: responsiveHeight(3), // Responsive margin top
  },
  signupText: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: Fonts.interRegular,
    alignSelf: 'center',
    marginTop: responsiveHeight(2), // Responsive margin top
    fontSize: responsiveWidth(3.2), // Responsive font size
  },
});

export default BottomSheetSignup;
