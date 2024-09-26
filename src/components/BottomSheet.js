import React, {forwardRef, useMemo, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import SharedTextInput from '../components/SharedTextInput';
import {Fonts} from '../constants';
import {CheckBox} from 'react-native-elements';
import GradientButton from '../components/GradientButton';
import {useNavigation} from '@react-navigation/native';
import {responsiveHeight} from 'react-native-responsive-dimensions';

const {width, height} = Dimensions.get('window'); // Get device dimensions

const MyBottomSheetComponent = forwardRef((props, ref) => {
  const navigation = useNavigation();
  const snapPoints = useMemo(() => ['25%', '50%', responsiveHeight(78)], []);
  const [checked, setChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginPress = () => {
    navigation.replace('BottomTabs');
  };
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
        <Text style={styles.signinText}>Sign In</Text>

        <Text style={styles.emailText}>Email Address</Text>
        <SharedTextInput
          placeholder={'Enter email'}
          placeholderTextColor={'rgba(219, 219, 219, 1)'}
          bordercolor={"#E2E8F0"}
        />

        <Text style={styles.passwordText}>Password</Text>
        <SharedTextInput
          placeholder={'Set a Password'}
          placeholderTextColor={'rgba(219, 219, 219, 1)'}
          bordercolor={"#E2E8F0"}
        />

        <View style={styles.checkboxContainer}>
          <View style={styles.checkboxWithText}>
            <CheckBox
              checked={checked}
              onPress={() => setChecked(!checked)}
              checkedColor="blue" // Blue tick for checkbox
              containerStyle={styles.checkbox}
            />
            <Text style={styles.checkboxText}>Show Password</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassword')}>
            <Text style={styles.linkText}>Forget Password?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <GradientButton
            tittle={'Log In'}
            onPress={() => {
              handleLoginPress();
            }}
          />
        </View>
        <Text style={styles.signupText}>Don't have an account? Sign Up.</Text>
      </View>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)', // Ensure the background color is set
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: width * 0.05, // Responsive padding
  },
  signinText: {
    color: 'white',
    fontFamily: Fonts.semibold,
    fontSize: width * 0.07, // Responsive font size
    alignSelf: 'center',
    marginTop: height * 0.005, // Responsive margin top
  },
  emailText: {
    color: 'rgba(255, 255, 255, 1)',
    marginTop: height * 0.02, // Responsive margin top
    fontFamily: Fonts.interRegular,
    fontSize: 13, // Responsive font size
  },
  passwordText: {
    color: 'rgba(255, 255, 255, 1)',
    marginTop: height * 0.01, // Responsive margin top
    fontFamily: Fonts.interRegular,
    fontSize: 13, // Responsive font size
  },
  checkboxContainer: {
    marginTop: height * 0.02, // Responsive margin top
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  checkboxWithText: {
    flexDirection: 'row',
  },
  checkbox: {
    margin: 0, // No extra margin between checkbox and text
    padding: 0,
    right: 9,
  },
  checkboxText: {
    fontSize: 14, // Responsive font size
    fontFamily: Fonts.interRegular,
    color: 'rgba(255, 255, 255, 1)',
    right: 14,
  },
  linkText: {
    fontSize: 14, // Responsive font size
    fontFamily: Fonts.interRegular,
    color: 'rgba(255, 255, 255, 1)',
  },
  buttonContainer: {
    marginTop: responsiveHeight(15),
  },
  signupText: {
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: Fonts.interRegular,
    alignSelf: 'center',
    marginTop: height * 0.01, // Responsive margin top
    fontSize: width * 0.035, // Responsive font size
  },
});

export default MyBottomSheetComponent;
