import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import TouchAbleBox from '../../components/TouchAbleBox';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Fonts} from '../../constants';

const Templates = ({navigation}) => {
  return (
    <ImageBackground
      source={require('../../../src/assets/dashbaord.png')}
      style={styles.backgroundImage}>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../../src/assets/Frame1.png')}
          style={styles.headerImage}
        />
        <View style={styles.greetingContainer}>
          <View style={styles.greetingRow}>
            <Text style={styles.greetingText}>Hi, Aimen</Text>
            <Image source={require('../../../src/assets/waveemoji.png')} />
          </View>
          <Text style={styles.chatText}>Tap to Chat</Text>
        </View>
      </View>

      <Text style={styles.titleText}>Templates</Text>

      <View style={[styles.templateRow,style={marginTop:responsiveHeight(2)}]}>
        <TouchAbleBox
          imageSource={require('../../../src/assets/Group2.png')}
          titleText={'Essay Outliner'}
          onPress={() => navigation.navigate('EssayOutliner')}
          descriptionText={'Organize your thoughts and arguments!'}
        />
        <TouchAbleBox
          imageSource={require('../../../src/assets/Group1.png')}
          titleText={'Essay Topic Generator'}
          descriptionText={'Organize your thoughts and arguments!'}
        />
      </View>

      <View style={styles.templateRow}>
        <TouchAbleBox
          imageSource={require('../../../src/assets/Group3.png')}
          titleText={'Thesis Statement Generator'}
          descriptionText={'Organize your thoughts and arguments!'}
        />
        <TouchAbleBox
          imageSource={require('../../../src/assets/Group.png')}
          titleText={'Citation Assistance - Find and Cite'}
          descriptionText={'Organize your thoughts and arguments!'}
          onPress={() => {
            navigation.navigate('CitationAssistance');
          }}
        />
      </View>
    </ImageBackground>
  );
};

export default Templates;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  headerContainer: {
    alignItems: 'center',
    marginTop: responsiveHeight(7),
  },
  headerImage: {
    width: responsiveWidth(58.8),
    height: responsiveHeight(30),
  },
  greetingContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: '60%',
    left: '48%',
    transform: [{translateX: -50}, {translateY: -50}],
  },
  greetingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingText: {
    color: 'rgba(178, 179, 180, 1)',
    fontSize: responsiveFontSize(2),
  },
  chatText: {
    color: 'white',
    fontSize: responsiveFontSize(2.5),
    marginTop: responsiveHeight(1),
    fontFamily: Fonts.interRegular,
  },
  titleText: {
    fontSize: responsiveFontSize(3.5),
    fontFamily: Fonts.interRegular,
    color: 'white',
    marginLeft: responsiveWidth(4),
    marginTop: responsiveHeight(3),
  },
  templateRow: {
    marginTop: responsiveHeight(1),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
