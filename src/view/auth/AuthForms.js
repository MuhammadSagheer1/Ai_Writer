import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Fonts} from '../../constants';
import MyBottomSheetComponent from '../../components/BottomSheet'; // Import your component
import BottomSheetSignup from '../../components/BottomSheetSignup';

const AuthForms = () => {
  const bottomSheetRef = useRef(null);
  const bottomSheetRef2 = useRef(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isSheetOpen2, setIsSheetOpen2] = useState(false);
  const handleOpenSheet = () => {
    if (bottomSheetRef.current) {
      bottomSheetRef.current.expand(); // Open the bottom sheet
      setIsSheetOpen(true); // Set state to true
    }
  };
  const handleOpenSheet2 = () => {
    if (bottomSheetRef2.current) {
      bottomSheetRef2.current.expand(); // Open the bottom sheet
      setIsSheetOpen2(true); // Set state to true
    }
  };

  const handleSheetClose = () => {
    setIsSheetOpen(false); // Set state to false when sheet is closed
  };

  const handleSheetClose2 = () => {
    setIsSheetOpen2(false); // Set state to false when sheet is closed
  };

  return (
    <ImageBackground
      source={require('../../../src/assets/Property.png')}
      style={styles.backgroundImage}>
      {/* Logo Image */}
      <Image
        source={require('../../../src/assets/logo.png')}
        style={styles.logo}
      />

      {!(isSheetOpen || isSheetOpen2) && (
        <View style={{alignItems: 'center'}}>
          {/* Button to open bottom sheet */}
          <TouchableOpacity
            style={styles.touchableButton}
            onPress={handleOpenSheet}>
            <Image
              source={require('../../../src/assets/Vector.png')}
              style={styles.touchableIcon}
            />
          </TouchableOpacity>
          <Text style={styles.loginText}>Swipe up to Log in</Text>
        </View>
      )}
      {!(isSheetOpen || isSheetOpen2) && (
        <TouchableOpacity onPress={handleOpenSheet2}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      )}
      {/* Bottom Sheet */}
      <MyBottomSheetComponent ref={bottomSheetRef} onClose={handleSheetClose} />

      <BottomSheetSignup ref={bottomSheetRef2} onClose={handleSheetClose2} />
    </ImageBackground>
  );
};

export default AuthForms;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: responsiveHeight(5),
  },
  logo: {
    marginTop: responsiveHeight(5),
  },
  touchableButton: {
    width: responsiveWidth(14),
    height: responsiveHeight(7),
    borderRadius: responsiveWidth(7),
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    justifyContent: 'center',
  },
  touchableIcon: {
    alignSelf: 'center',
  },
  loginText: {
    color: '#fff',
    fontFamily: Fonts.interRegular,
  },
  signUpText: {
    color: '#fff',
    fontFamily: Fonts.interRegular,
    marginBottom: responsiveHeight(5),
  },
});
