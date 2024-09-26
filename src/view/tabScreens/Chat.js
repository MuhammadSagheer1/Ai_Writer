import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import EasyWriterChat from '../../components/EasyWriterChat';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {Fonts} from '../../constants';
import ChatCommunication from '../../components/ChatCommunication';
import LinearGradient from 'react-native-linear-gradient';

const Chat = ({navigation}) => {
  const handleButtonPress = () => {
    alert('You entered');
  };

  return (
    <ImageBackground
      source={require('../../../src/assets/screensbg.png')}
      style={styles.background}>
      <EasyWriterChat />
      <View style={styles.container}>
        <Image
          source={require('../../../src/assets/communication.png')}
          style={styles.communicationImage}
        />
        <Text style={styles.descriptionText}>
          Choose a prompt below or write your own {'\n'}
          to start chatting with our AI.
        </Text>
        <TouchableOpacity
          style={[styles.optionButton, (style = {width: responsiveWidth(75)})]}>
          <Text style={styles.optionButtonText}>
            Brainstorm intriguing essay hooks for...
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, (style = {width: responsiveWidth(65)})]}>
          <Text style={styles.optionButtonText}>
            Develop a thesis statement on...
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, (style = {width: responsiveWidth(76)})]}>
          <Text style={styles.optionButtonText}>
            Outline main points for an essay about...
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.optionButton, (style = {width: responsiveWidth(70)})]}>
          <Text style={styles.optionButtonText}>
            Find credible sources for a paper on...
          </Text>
        </TouchableOpacity>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Type message..."
            placeholderTextColor={'#949494'}
          />

          <LinearGradient
            colors={['red', 'blue']}
            start={{x: 0, y: 0}} // Top-left se start
            end={{x: 1, y: 0}} // Left se right
            style={styles.gradientButton}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ChatScreen');
              }}
              style={styles.sendButton}>
              <Image
                source={require('../../../src/assets/paperplane.png')}
                style={styles.sendIcon}
              />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Chat;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    bottom: responsiveHeight(15),
  },
  communicationImage: {
    alignSelf: 'center',
    marginTop: responsiveHeight(22),
  },
  descriptionText: {
    color: '#D4DCE5',
    fontSize: responsiveWidth(3.5),
    fontFamily: Fonts.interRegular,
    alignSelf: 'center',
    marginTop: responsiveHeight(5),
    textAlign: 'center',
  },
  optionButton: {
    // width: responsiveWidth(76),
    height: responsiveHeight(6),
    backgroundColor: '#231326',
    borderRadius: responsiveWidth(20),
    borderWidth: 1,
    borderColor: '#5a126b',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: responsiveHeight(2),
  },
  optionButtonText: {
    color: '#DACADE',
    fontSize: responsiveFontSize(1.8),
    fontFamily: Fonts.interRegular,
    alignSelf: 'center',
  },
  inputContainer: {
    position: 'absolute',
    bottom: -responsiveHeight(15),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: responsiveHeight(7),
    width: responsiveWidth(94),
    height: responsiveHeight(7),
    marginHorizontal: responsiveWidth(3),
    backgroundColor: '#1f2123',
  },
  textInput: {
    flex: 1,
    height: responsiveHeight(7),
    borderRadius: responsiveHeight(6),
    paddingLeft: responsiveWidth(4),
    backgroundColor: '#1f2123',
    fontSize: responsiveFontSize(1.7),
    fontFamily: Fonts.interRegular,
  },
  gradientButton: {
    width: responsiveWidth(11),
    height: responsiveHeight(5.5),
    borderRadius: responsiveHeight(5.5),
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
  },
  sendButton: {
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    borderRadius: responsiveHeight(5),
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendIcon: {
    width: responsiveWidth(4),
    height: responsiveHeight(2.5),
  },
});
