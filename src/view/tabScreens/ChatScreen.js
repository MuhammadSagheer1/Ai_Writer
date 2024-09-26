import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';
import EasyWriterChat from '../../components/EasyWriterChat';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Fonts} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';

const ChatScreen = () => {
  return (
    <ImageBackground
      source={require('../../../src/assets/screensbg.png')}
      style={{flex: 1}}>
      <ScrollView style={{flex:1}}>
        <EasyWriterChat />

        <TouchableOpacity
          style={{
            width: responsiveWidth(50),
            height: responsiveHeight(6),
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: '#CFB9FC',
            alignSelf: 'flex-end',
            marginRight: 20,
            justifyContent: 'center',
            marginTop: responsiveHeight(7),
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Fonts.medium,
              color: '#0F172A',
              marginLeft: 10,
            }}>
            Hello!
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: responsiveWidth(80),
            height: responsiveHeight(9),
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: '#262628',
            marginLeft: 20,
            justifyContent: 'center',
            marginTop: responsiveHeight(3),
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Fonts.medium,
              color: '#FFFFFF',
              marginLeft: 10,
            }}>
            Hi, Aimen Nice to see you again, How are you {'\n'}
            today? Can i help you?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: responsiveWidth(50),
            height: responsiveHeight(7),
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: '#CFB9FC',
            alignSelf: 'flex-end',
            marginRight: 20,
            justifyContent: 'center',
            marginTop: responsiveHeight(3),
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Fonts.medium,
              color: '#0F172A',
              marginLeft: 10,
            }}>
            Nice. I need help in blog writing.
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: responsiveWidth(80),
            height: responsiveHeight(10),
            borderBottomRightRadius: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            backgroundColor: '#262628',
            marginLeft: 20,
            justifyContent: 'center',
            marginTop: responsiveHeight(3),
          }}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Fonts.medium,
              color: '#FFFFFF',
              marginLeft: 10,
            }}>
            Great! I'd be happy to assist you with your blog writing in
            Markdown. What specifically do you need help with? Do you have a
            topic in mind?
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderRadius: responsiveHeight(7),
            width: responsiveWidth(94),
            height: responsiveHeight(7),
            marginTop: responsiveHeight(24),
            marginHorizontal: responsiveWidth(3), // To center the input with some margin on the sides
            backgroundColor: '#1f2123', // Background for the TextInput and button container
          }}>
          <TextInput
            style={{
              flex: 1, // This will take up the remaining space, making it dynamic with the button
              height: responsiveHeight(7),
              borderRadius: responsiveHeight(6),
              paddingLeft: 15,
              backgroundColor: '#1f2123',
              fontSize: 14,
              fontFamily: Fonts.interRegular,
            }}
            placeholder="Type message..."
            placeholderTextColor={'#949494'}
          />

          <LinearGradient
            colors={['red', 'blue']}
            start={{x: 0, y: 0}} // Top-left se start
            end={{x: 1, y: 0}} // Left se right
            style={{
              width: responsiveWidth(11),
              height: responsiveHeight(5.5),
              borderRadius: responsiveHeight(5.5),
              justifyContent: 'center',
              alignItems: 'center',
              right: 10,
            }}>
            <TouchableOpacity
              //   onPress={() => {
              //     navigation.navigate('ChatScreen');
              //   }}
              style={{
                width: responsiveWidth(10),
                height: responsiveHeight(5),
                borderRadius: responsiveHeight(5),
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../../src/assets/paperplane.png')}
                style={{width: 15, height: 15}}
              />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({});
