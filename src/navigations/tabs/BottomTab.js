import React, {useRef, useCallback, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Templates from '../../view/tabScreens/Templates';
import Chat from '../../view/tabScreens/Chat';
import Settings from '../../view/tabScreens/Settings';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import BottomSheet from '@gorhom/bottom-sheet';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import SettingsheetBtns from '../../components/SettingsheetBtns';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import SaveGradient from '../../components/SaveGradient';
import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../../constants';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const bottomSheetRef = useRef(null);
  const bottomSheetRef2 = useRef(null);
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [showSettingsContent, setShowSettingsContent] = useState(false);

  const handlePresentModalPress = useCallback(() => {
    setShowSettingsContent(false); // Reset settings content
    bottomSheetRef.current?.expand();
  }, []);

  const handleUserProfilePress = () => {
    setShowSettingsContent(true); // Show the Settings screen content on press
    bottomSheetRef.current?.close(); // Close the bottom sheet
  };

  const handleSubscribeNowPress = () => {
    bottomSheetRef.current?.close(); // Close the first bottom sheet
    bottomSheetRef2.current?.expand(); // Open the second bottom sheet
  };

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'rgba(14, 14, 16, 1)',
            borderColor: 'rgba(14, 14, 16, 1)',
          },
          tabBarActiveTintColor: 'rgba(208, 18, 255, 1)',
          tabBarInactiveTintColor: 'rgba(100, 116, 139, 1)',
        }}>
        <Tab.Screen
          name="Templates"
          component={Templates}
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="grid" size={25} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialIcons name="chat" size={25} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Settings"
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="settings" size={25} color={color} />
            ),
            headerShown: false,
          }}>
          {({navigation}) => {
            useFocusEffect(
              useCallback(() => {
                handlePresentModalPress();
              }, []),
            );

            return (
              <View style={{flex: 1}}>
                {/* Only show Settings content if the User Profile button is clicked */}
                {showSettingsContent && <Settings />}
              </View>
            );
          }}
        </Tab.Screen>
      </Tab.Navigator>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={['25%', '25%']}
        index={-1} // Initially hidden
        enablePanDownToClose={true}
        backgroundStyle={styles.bottomSheetBackground}
        handleStyle={styles.handleStyle}
        handleIndicatorStyle={styles.handleIndicatorStyle}>
        <View style={styles.sheetContent}>
          <SettingsheetBtns
            imageSource={require('../../../src/assets/userprofile.png')}
            title={'User Profile'}
            onPress={handleUserProfilePress}
          />
          <SettingsheetBtns
            imageSource={require('../../../src/assets/Subscribe.png')}
            title={'Subscribe Now'}
            onPress={handleSubscribeNowPress} // Change here
          />
          <SettingsheetBtns
            imageSource={require('../../../src/assets/logouticon.png')}
            title={'Logout'}
          />
        </View>
      </BottomSheet>

      <BottomSheet
        ref={bottomSheetRef2}
        index={-1}
        snapPoints={['25%', '100%']}
        enablePanDownToClose={true}
        handleIndicatorStyle={{
          backgroundColor: 'grey',
          width: 50,
          height: 5,
          borderRadius: 3,
        }}
        backgroundStyle={{
          backgroundColor: '#0E0E10',
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: responsiveWidth(85),
              height: responsiveHeight(93),
              borderRadius: 10,
              backgroundColor: 'white',
            }}>
            {/* Button Section */}
            <View
              style={{
                flexDirection: 'row',
                width: responsiveWidth(85),
                height: responsiveHeight(10),
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}>
              <SaveGradient
                width={responsiveWidth(22)}
                height={responsiveHeight(5)}
                borderRadius={responsiveHeight(5)}
                title={'Monthly'}
                onPress={() => setSelectedPlan('monthly')} // Update state on press
              />
              <SaveGradient
                width={responsiveWidth(22)}
                height={responsiveHeight(5)}
                borderRadius={responsiveHeight(5)}
                title={'Annually'}
                onPress={() => setSelectedPlan('annually')} // Update state on press
              />
            </View>

            {/* Content based on selected plan */}
            {selectedPlan === 'monthly' ? (
              <View
                style={{
                  width: responsiveWidth(85),
                  height: responsiveHeight(20),
                  backgroundColor: 'black',
                }}>
                <LinearGradient
                  start={{x: 1, y: 0}}
                  end={{x: 0, y: 0}}
                  colors={['#FDFD5E', '#F7C82E']}
                  style={{
                    width: responsiveWidth(85),
                    height: responsiveHeight(22),
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 40,
                      fontFamily: Fonts.semibold,
                      color: '#08080F',
                      marginLeft: 20,
                      marginTop: 20,
                    }}>
                    MONTHLY
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-evenly',
                    }}>
                    <Text
                      style={{
                        fontSize: 19,
                        fontFamily: Fonts.semibold,
                        color: '#08080F',
                        marginTop: 10,
                      }}>
                      $39.99/mo
                    </Text>

                    {/* Black Button Overlap */}

                    <TouchableOpacity
                      style={{
                        position: 'absolute',
                        top: responsiveHeight(9.4),
                        left: responsiveWidth(6.3),
                        backgroundColor: 'black',
                        width: responsiveWidth(68),
                        height: responsiveHeight(5),
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: responsiveHeight(5),
                        zIndex: 1, // To ensure it overlaps both gradient and white view
                      }}>
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 14,
                          fontFamily: Fonts.medium,
                        }}>
                        SALES ENDS Today
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={{
                        borderWidth: 1,
                        justifyContent: 'center',
                        width: responsiveWidth(18),
                        height: responsiveHeight(3.5),
                        borderRadius: 40,
                        marginTop: 10,
                      }}>
                      <Text style={{color: 'black', alignSelf: 'center'}}>
                        133.99$
                      </Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 15,
                        fontFamily: Fonts.semibold,
                        color: '#08080F',
                        marginTop: 10,
                      }}>
                      (65% OFF today)
                    </Text>
                  </View>
                </LinearGradient>

                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: responsiveHeight(7),
                      marginLeft: 20,
                    }}>
                    <Image
                      source={require('../../../src/assets/drawcheck.png')}
                    />
                    <Text
                      style={{
                        fontSize: 13,
                        fontFamily: Fonts.regular,
                        marginLeft: 20,
                        color: '#08080F',
                      }}>
                      Up to 1500 words per essay
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: responsiveHeight(2),
                      marginLeft: 20,
                    }}>
                    <Image
                      source={require('../../../src/assets/drawcheck.png')}
                    />
                    <Text
                      style={{
                        fontSize: 13,
                        fontFamily: Fonts.regular,
                        marginLeft: 20,
                        color: '#08080F',
                      }}>
                      Advanced essay options
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: responsiveHeight(2),
                      marginLeft: 20,
                    }}>
                    <Image
                      source={require('../../../src/assets/drawcheck.png')}
                    />
                    <Text
                      style={{
                        fontSize: 13,
                        fontFamily: Fonts.regular,
                        marginLeft: 20,
                        color: '#08080F',
                      }}>
                      Unlimited essays
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: responsiveHeight(2),
                      marginLeft: 20,
                    }}>
                    <Image
                      source={require('../../../src/assets/drawcheck.png')}
                    />
                    <Text
                      style={{
                        fontSize: 13,
                        fontFamily: Fonts.regular,
                        marginLeft: 20,
                        color: '#08080F',
                      }}>
                      Access to all features:
                    </Text>
                  </View>

                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: 50,
                        marginTop: 10,
                      }}>
                      <Entypo name="dot-single" size={20} color="black" />
                      <Text
                        style={{
                          fontSize: 13,
                          fontFamily: Fonts.interRegular,
                          color: '#08080F',
                        }}>
                        AI Essay Writer{' '}
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: 50,
                        marginTop: 10,
                      }}>
                      <Entypo name="dot-single" size={20} color="black" />
                      <Text
                        style={{
                          fontSize: 13,
                          fontFamily: Fonts.interRegular,
                          color: '#08080F',
                        }}>
                        AI Essay Outliner{' '}
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: 50,
                        marginTop: 10,
                      }}>
                      <Entypo name="dot-single" size={20} color="black" />
                      <Text
                        style={{
                          fontSize: 13,
                          fontFamily: Fonts.interRegular,
                          color: '#08080F',
                        }}>
                        Thesis Statement Generator
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: 50,
                        marginTop: 10,
                      }}>
                      <Entypo name="dot-single" size={20} color="black" />
                      <Text
                        style={{
                          fontSize: 13,
                          fontFamily: Fonts.interRegular,
                          color: '#08080F',
                        }}>
                        Personal Statement Writer
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: 50,
                        marginTop: 10,
                      }}>
                      <Entypo name="dot-single" size={20} color="black" />
                      <Text
                        style={{
                          fontSize: 13,
                          fontFamily: Fonts.interRegular,
                          color: '#08080F',
                        }}>
                        Admission Essay Writer
                      </Text>
                    </View>

                    <View
                      style={{
                        flexDirection: 'row',
                        marginLeft: 50,
                        marginTop: 10,
                      }}>
                      <Entypo name="dot-single" size={20} color="black" />
                      <Text
                        style={{
                          fontSize: 13,
                          fontFamily: Fonts.interRegular,
                          color: '#08080F',
                        }}>
                        Content Peraphrase and much more
                      </Text>
                    </View>
                  </View>
                </View>
                {/* pointsend */}

                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <LinearGradient
                    start={{x: 1, y: 0}}
                    end={{x: 0, y: 0}}
                    colors={['#FDFD5E', '#F7C82E']}
                    style={{
                      width: responsiveWidth(55),
                      height: responsiveHeight(7),
                      borderRadius: 10,
                      marginTop: responsiveHeight(15),
                      justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                      style={{flexDirection: 'row', alignSelf: 'center'}}>
                      <Text
                        style={{
                          color: 'black',
                          alignSelf: 'center',
                          fontSizeL: 15,
                          fontFamily: Fonts.medium,
                        }}>
                        Subscribe Now
                      </Text>
                      <Image
                        source={require('../../../src/assets/Vector1.png')}
                        style={{marginTop: 5, marginLeft: 5}}
                      />
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
                {/* subssribebtnend */}
              </View>
            ) : (
              <View
              style={{
                width: responsiveWidth(85),
                height: responsiveHeight(20),
                backgroundColor: 'black',
              }}>
              <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 0, y: 0}}
                colors={['#D306F4', '#5700E6']}
                style={{
                  width: responsiveWidth(85),
                  height: responsiveHeight(22),
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 10,
                }}>
                <Text
                  style={{
                    fontSize: 40,
                    fontFamily: Fonts.semibold,
                    color: '#FFFFFF',
                    marginLeft: 20,
                    marginTop: 20,
                  }}>
                  ANNUALLY
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                  }}>
                  <Text
                    style={{
                      fontSize: 19,
                      fontFamily: Fonts.semibold,
                      color: '#FFFFFF',
                      marginTop: 10,
                    }}>
                    $199.99/mo
                  </Text>

                  {/* Black Button Overlap */}

                  <TouchableOpacity
                    style={{
                      position: 'absolute',
                      top: responsiveHeight(9.4),
                      left: responsiveWidth(6.3),
                      backgroundColor: 'black',
                      width: responsiveWidth(68),
                      height: responsiveHeight(5),
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: responsiveHeight(5),
                      zIndex: 1, // To ensure it overlaps both gradient and white view
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 14,
                        fontFamily: Fonts.medium,
                      }}>
                      SALES ENDS Today
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      borderColor:"#FFFFFF",
                      justifyContent: 'center',
                      width: responsiveWidth(18),
                      height: responsiveHeight(3.5),
                      borderRadius: 40,
                      marginTop: 10,
                    }}>
                    <Text style={{color: '#FFFFFF', alignSelf: 'center'}}>
                      479.99$
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: Fonts.semibold,
                      color: '#FFFFFF',
                      marginTop: 10,
                    }}>
                    paid annually
                  </Text>
                </View>
              </LinearGradient>

              <View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: responsiveHeight(7),
                    marginLeft: 20,
                  }}>
                  <Image
                    source={require('../../../src/assets/drawcheck.png')}
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: Fonts.regular,
                      marginLeft: 20,
                      color: '#08080F',
                    }}>
                    Up to 1500 words per essay
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: responsiveHeight(2),
                    marginLeft: 20,
                  }}>
                  <Image
                    source={require('../../../src/assets/drawcheck.png')}
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: Fonts.regular,
                      marginLeft: 20,
                      color: '#08080F',
                    }}>
                    Advanced essay options
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: responsiveHeight(2),
                    marginLeft: 20,
                  }}>
                  <Image
                    source={require('../../../src/assets/drawcheck.png')}
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: Fonts.regular,
                      marginLeft: 20,
                      color: '#08080F',
                    }}>
                    Unlimited essays
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: responsiveHeight(2),
                    marginLeft: 20,
                  }}>
                  <Image
                    source={require('../../../src/assets/drawcheck.png')}
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      fontFamily: Fonts.regular,
                      marginLeft: 20,
                      color: '#08080F',
                    }}>
                    Access to all features:
                  </Text>
                </View>

                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 50,
                      marginTop: 10,
                    }}>
                    <Entypo name="dot-single" size={20} color="black" />
                    <Text
                      style={{
                        fontSize: 13,
                        fontFamily: Fonts.interRegular,
                        color: '#08080F',
                      }}>
                      AI Essay Writer{' '}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 50,
                      marginTop: 10,
                    }}>
                    <Entypo name="dot-single" size={20} color="black" />
                    <Text
                      style={{
                        fontSize: 13,
                        fontFamily: Fonts.interRegular,
                        color: '#08080F',
                      }}>
                      AI Essay Outliner{' '}
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 50,
                      marginTop: 10,
                    }}>
                    <Entypo name="dot-single" size={20} color="black" />
                    <Text
                      style={{
                        fontSize: 13,
                        fontFamily: Fonts.interRegular,
                        color: '#08080F',
                      }}>
                      Thesis Statement Generator
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 50,
                      marginTop: 10,
                    }}>
                    <Entypo name="dot-single" size={20} color="black" />
                    <Text
                      style={{
                        fontSize: 13,
                        fontFamily: Fonts.interRegular,
                        color: '#08080F',
                      }}>
                      Personal Statement Writer
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 50,
                      marginTop: 10,
                    }}>
                    <Entypo name="dot-single" size={20} color="black" />
                    <Text
                      style={{
                        fontSize: 13,
                        fontFamily: Fonts.interRegular,
                        color: '#08080F',
                      }}>
                      Admission Essay Writer
                    </Text>
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      marginLeft: 50,
                      marginTop: 10,
                    }}>
                    <Entypo name="dot-single" size={20} color="black" />
                    <Text
                      style={{
                        fontSize: 13,
                        fontFamily: Fonts.interRegular,
                        color: '#08080F',
                      }}>
                      Content Peraphrase and much more
                    </Text>
                  </View>
                </View>
              </View>
              {/* pointsend */}

              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <LinearGradient
                  start={{x: 1, y: 0}}
                  end={{x: 0, y: 0}}
                  colors={['#D306F4', '#5700E6']}
                  style={{
                    width: responsiveWidth(55),
                    height: responsiveHeight(7),
                    borderRadius: 10,
                    marginTop: responsiveHeight(15),
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity
                    style={{flexDirection: 'row', alignSelf: 'center'}}>
                    <Text
                      style={{
                        color: 'white',
                        alignSelf: 'center',
                        fontSizeL: 15,
                        fontFamily: Fonts.medium,
                      }}>
                      Subscribe Now
                    </Text>
                    <Image
                      source={require('../../../src/assets/Vector1.png')}
                      style={{marginTop: 5, marginLeft: 5,tintColor:"white"}}
                    />
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              {/* subssribebtnend */}
            </View>
            )}
          </View>
        </View>
      </BottomSheet>
    </>
  );
};

const styles = StyleSheet.create({
  bottomSheetBackground: {
    backgroundColor: '#0E0E10',
    borderRadius: 25,
  },
  handleIndicatorStyle: {
    backgroundColor: '#64748B',
    width: 40,
    height: 4,
  },
  sheetContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: responsiveHeight(3),
  },
  sheetText: {
    flexDirection: 'row',
    flex: 1,
    fontSize: 18,
    color: '#f9fafb',
  },
});

export default BottomTab;
