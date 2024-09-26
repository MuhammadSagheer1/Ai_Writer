import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useMemo, useRef} from 'react';
import {Fonts} from '../../constants';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import SharedTextInput from '../../components/SharedTextInput';
import Settingsbtns from '../../components/Settingsbtns';
import SaveGradient from '../../components/SaveGradient';
import BottomSheet from '@gorhom/bottom-sheet';

const Settings = () => {
  // Bottom sheet reference
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['25%', '50%', responsiveHeight(75)], []);
  // Function to open the Bottom Sheet
  const openBottomSheet = () => {
    bottomSheetRef.current?.expand(); // Bottom sheet ko expand karne ka function
  };

  return (
    <ImageBackground
      source={require('../../../src/assets/screensbg.png')}
      style={{flex: 1}}>
      <Text
        style={{
          fontSize: 20,
          fontFamily: Fonts.semibold,
          color: 'white',
          marginTop: responsiveHeight(4),
          marginLeft: 25,
        }}>
        User Profile
      </Text>

      <View
        style={{
          marginTop: responsiveHeight(5),
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        {/* First Name TextInput */}
        <View>
          <Text
            style={{
              fontSize: 13,
              fontFamily: Fonts.interRegular,
              color: 'white',
            }}>
            First name
          </Text>
          <TextInput
            placeholder="Aimen"
            placeholderTextColor={'#FFFFFF'}
            style={{
              width: responsiveWidth(43),
              height: responsiveHeight(6),
              borderWidth: 0.6,
              borderRadius: 7,
              borderColor: '#E2E8F0',
              fontSize: 13,
              fontFamily: Fonts.interRegular,
              padding: 10,
              marginTop: 8,
            }}
          />
        </View>

        {/* Last Name TextInput */}
        <View>
          <Text
            style={{
              fontSize: 13,
              fontFamily: Fonts.interRegular,
              color: 'white',
            }}>
            Last name
          </Text>
          <TextInput
            placeholder="Faheem"
            placeholderTextColor={'#FFFFFF'}
            style={{
              width: responsiveWidth(43),
              height: responsiveHeight(6),
              borderRadius: 7,
              borderWidth: 0.6,
              borderColor: '#E2E8F0',
              fontSize: 13,
              fontFamily: Fonts.interRegular,
              padding: 10,
              marginTop: 8,
            }}
          />
        </View>
      </View>

      <Text
        style={{
          fontSize: 13,
          fontFamily: Fonts.interRegular,
          color: '#94A3B8',
          marginTop: 20,
          marginLeft: 20,
        }}>
        Email
      </Text>
      <SharedTextInput
        placeholder={'aimen.faheem@gmail.com'}
        placeholderTextColor={'#94A3B8'}
        bordercolor={"#E2E8F0"}
      />

      <Text
        style={{
          fontSize: 13,
          fontFamily: Fonts.interRegular,
          color: 'white',
          marginTop: 20,
          marginLeft: 20,
        }}>
        Phone Number
      </Text>

      <View style={{flexDirection: 'row'}}>
        <TextInput
          placeholder="+92 300 222222"
          placeholderTextColor={'#94A3B8'}
          style={{
            width: responsiveWidth(67),
            height: responsiveHeight(6),
            borderTopWidth: 0.6,
            borderBottomWidth: 0.6,
            borderLeftWidth: 0.6,
            borderColor: '#E2E8F0',
            fontSize: 13,
            fontFamily: Fonts.interRegular,
            padding: 10,
            marginLeft: 20,
            marginTop: 10,
          }}
        />
        <TouchableOpacity
          style={{
            width: responsiveWidth(23),
            height: responsiveHeight(6),
            borderWidth: 0.6,
            borderColor: 'white',
            marginTop: 10,
          }}>
          {/* You can add some icon or content here */}
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: responsiveHeight(5),
          justifyContent: 'space-evenly',
        }}>
        {/* Change Password button */}
        <Settingsbtns
          title={'Change Password'}
          width={responsiveWidth(32)}
          height={responsiveHeight(6)}
          borderRadius={responsiveHeight(1)}
          onPress={openBottomSheet} // Button press to open the bottom sheet
        />
        {/* Delete Profile button */}
        <Settingsbtns
          title={'Delete Profile'}
          width={responsiveWidth(30)}
          height={responsiveHeight(6)}
          borderRadius={responsiveHeight(6)}
        />
        <SaveGradient
          width={responsiveWidth(23)}
          height={responsiveHeight(5)}
          borderRadius={responsiveHeight(5)}
          title={'Save'}
        />
      </View>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1} // Start closed
        snapPoints={snapPoints}
        enablePanDownToClose={true} // Allow drag to close
        backgroundStyle={styles.background} // Custom background style for sheet
        containerStyle={styles.container} // Custom container style for sheet
        handleIndicatorStyle={styles.handleIndicatorStyle}
      >
        <View style={{justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: Fonts.medium,
              color: 'white',
              marginLeft: 20,
              marginTop: 20,
            }}>
            Change password
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Fonts.interRegular,
              color: '#D4DCE5',
              marginLeft: 20,
              marginTop: 10,
            }}>
            Filed in the field below verify your previous password {'\n'}
            and set a new one.
          </Text>

          <Text
            style={{
              fontSize: 13,
              fontFamily: Fonts.interRegular,
              color: 'white',
              marginLeft: 20,
              marginTop: 20,
            }}>
            Current password
          </Text>
          <SharedTextInput
            placeholder={'........'}
            placeholderTextColor={'white'}
            bordercolor={"#E2E8F0"}
          />

          <Text
            style={{
              fontSize: 13,
              fontFamily: Fonts.interRegular,
              color: 'white',
              marginLeft: 20,
              marginTop: 20,
            }}>
            New password
          </Text>
          <SharedTextInput
            placeholder={'Enter new password'}
            placeholderTextColor={'#94A3B8'}
            bordercolor={"#E2E8F0"}
          />

          <Text
            style={{
              fontSize: 13,
              fontFamily: Fonts.interRegular,
              color: 'white',
              marginLeft: 20,
              marginTop: 20,
            }}>
            Re-enter new password
          </Text>
          <SharedTextInput
            placeholder={'Re-enter new password'}
            placeholderTextColor={'#94A3B8'}
            bordercolor={"#E2E8F0"}
          />
        </View>

        <View style={{marginTop: 20, marginLeft: responsiveWidth(70)}}>
          <SaveGradient
            width={responsiveWidth(23)}
            height={responsiveHeight(5)}
            borderRadius={responsiveHeight(5)}
            title={'Save'}
          />
        </View>
      </BottomSheet>
    </ImageBackground>
  );
};

export default Settings;

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'black', // Ensure the background color is set
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  container: {
    flex: 1,
  },
  handleIndicatorStyle: {
    backgroundColor: '#64748B',
    width: 40,
    height: 4,
  },
});
