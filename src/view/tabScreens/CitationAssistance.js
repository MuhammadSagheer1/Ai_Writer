import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {Fonts} from '../../constants';
import SaveGradient from '../../components/SaveGradient';
import CitationBtns from '../../components/CitationBtns';
import SharedTextInput from '../../components/SharedTextInput';
import EsaayWriterbuttons from '../../components/EsaayWriterbuttons';

const EsaayOutliner = () => {
  const [activeButton, setActiveButton] = useState(1);

  const renderContent = () => {
    switch (activeButton) {
      case 1:
        return (
          <View style={styles.contentContainer}>
            <Text style={styles.labelText}>Essay Topic*</Text>
            <SharedTextInput
              placeholder={"Topic or subject you're writing about"}
              placeholderTextColor={'#7D8085'}
              bordercolor={'#7D8085'}
            />
            <Text style={styles.characterCountText}>0/200 characters</Text>

            <Text style={styles.labelText}>No. of Sources*</Text>
            <SharedTextInput
              placeholder={'Number of sources required'}
              placeholderTextColor={'#7D8085'}
              bordercolor={'#7D8085'}
            />
            <Text style={styles.characterCountText}>0/30 characters</Text>

            <Text style={[styles.labelText, (style = {marginTop: 10})]}>
              Citation Style*
            </Text>
            <EsaayWriterbuttons
              title={'Required citation style (e.g. MLA, APA, Chicago)'}
            />

            <Text style={[styles.labelText, (style = {marginTop: 20})]}>
              Source Type*
            </Text>
            <EsaayWriterbuttons
              title={
                'Type of sources required (e.g. books, journals, websites)'
              }
            />

            <Text style={[styles.labelText, (style = {marginTop: 20})]}>
              Time Period*
            </Text>
            <EsaayWriterbuttons
              title={
                'Time period for sources (e.g. published in the last 5 years)'
              }
            />

            <View style={styles.buttonsRow}>
              <TouchableOpacity style={styles.clearButton}>
                <Image source={require('../../../src/assets/cross2.png')} />
                <Text style={styles.clearButtonText}>Clear Input</Text>
              </TouchableOpacity>

              <SaveGradient
                width={responsiveWidth(23)}
                height={responsiveHeight(5)}
                borderRadius={responsiveHeight(4)}
                title={'Generate'}
              />
            </View>

            <View style={styles.bottomBar}>
              <TouchableOpacity style={styles.newOutputButton}>
                <Text style={styles.newOutputButtonText}>New Outputs</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.bottomBarText}>History</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.bottomBarText}>Clear</Text>
              </TouchableOpacity>
            </View>

            {/* answer prompt */}
            <View style={styles.answerPromptContainer}>
              <View style={styles.answerImageContainer}>
                <Image source={require('../../../src/assets/answer.png')} />
              </View>
              <View style={styles.answerTextContainer}>
                <Text style={styles.answerPromptTitle}>Answer the prompts</Text>
                <Text style={styles.answerPromptDesc}>
                  Get the best results by trying multiple {'\n'}
                  inputs and of varying lengths.
                </Text>
              </View>
            </View>
            {/* answer prompt end */}
          </View>
        );
      case 2:
        return (
          <View>
            <Text style={styles.simpleText}>Content for Button 2</Text>
          </View>
        );
      case 3:
        return (
          <View>
            <Text style={styles.simpleText}>Content for Button 3</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <ImageBackground
      source={require('../../../src/assets/screensbg.png')}
      style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* title */}
        <View style={styles.titleContainer}>
          <View style={styles.iconContainer}>
            <Image source={require('../../../src/assets/Vector2.png')} />
          </View>
          <View>
            <Text style={styles.titleText}>
              Citation Assistance - Find and Cite
            </Text>
            <Text style={styles.subtitleText}>
              Get MLA, APA, etc, citations with ease!
            </Text>
          </View>
        </View>
        {/* end title */}

        {/* Buttons */}
        <View style={styles.buttonsContainer}>
          <CitationBtns
            title={'Citation Finder'}
            isActive={activeButton === 1}
            onPress={() => setActiveButton(1)}
          />
          <CitationBtns
            title={'Cite a Topic'}
            isActive={activeButton === 2}
            onPress={() => setActiveButton(2)}
          />
          <CitationBtns
            title={'Cite a Website'}
            isActive={activeButton === 3}
            onPress={() => setActiveButton(3)}
          />
        </View>

        {/* Content */}
        <View style={styles.contentSection}>{renderContent()}</View>
      </ScrollView>
    </ImageBackground>
  );
};

export default EsaayOutliner;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: responsiveHeight(2.5),
  },
  iconContainer: {
    width: responsiveWidth(14),
    height: responsiveHeight(7),
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: '#1F2123',
    borderColor: '#434E5D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: responsiveFontSize(2.2),
    fontFamily: Fonts.regular,
    color: 'white',
    marginLeft: responsiveWidth(2),
  },
  subtitleText: {
    fontSize: responsiveFontSize(1.5),
    fontFamily: Fonts.interRegular,
    color: '#D4DCE5',
    marginLeft: responsiveWidth(2.5),
    marginTop: responsiveHeight(0.5),
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: responsiveHeight(3),
  },
  contentSection: {
    marginTop: responsiveHeight(2),
  },
  contentContainer: {
    flex: 1,
    marginTop: responsiveHeight(2),
  },
  labelText: {
    // marginTop:10,
    color: 'white',
    fontSize: responsiveFontSize(1.6),
    fontFamily: Fonts.interRegular,
  },
  characterCountText: {
    color: 'white',
    fontSize: responsiveFontSize(1.6),
    fontFamily: Fonts.interRegular,
    alignSelf: 'flex-end',
  },
  buttonsRow: {
    flexDirection: 'row',
    marginTop: responsiveHeight(5),
    justifyContent: 'space-between',
  },
  clearButton: {
    width: responsiveWidth(30),
    height: responsiveHeight(4),
    borderRadius: 5,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  clearButtonText: {
    color: 'white',
    fontSize: responsiveFontSize(1.6),
    fontFamily: Fonts.interRegular,
    marginLeft: 5,
  },
  bottomBar: {
    width: '100%',
    height: responsiveHeight(8),
    borderTopWidth: 1,
    borderColor: '#7D8085',
    marginTop: responsiveHeight(4),
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  newOutputButton: {
    width: responsiveWidth(30),
    height: responsiveHeight(5),
    borderRadius: 8,
    backgroundColor: '#171717',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newOutputButtonText: {
    color: '#D012FF',
    fontSize: responsiveFontSize(1.5),
    fontFamily: Fonts.interRegular,
  },
  bottomBarText: {
    fontFamily: Fonts.interRegular,
    fontSize: responsiveFontSize(1.5),
    color: 'white',
    marginRight: responsiveWidth(5),
  },
  answerPromptContainer: {
    flexDirection: 'row',
    marginTop: responsiveHeight(5),
    justifyContent: 'center',
  },
  answerImageContainer: {
    width: responsiveWidth(15),
    height: responsiveHeight(15),
    borderWidth: 0.3,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerTextContainer: {
    width: responsiveWidth(64),
    height: responsiveHeight(15),
    borderLeftWidth: 0,
    borderWidth: 0.3,
    borderColor: 'gray',
  },
  answerPromptTitle: {
    color: 'white',
    fontSize: responsiveFontSize(2),
    fontFamily: Fonts.interRegular,
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(4),
  },
  answerPromptDesc: {
    color: 'white',
    fontSize: responsiveFontSize(1.6),
    fontFamily: Fonts.interRegular,
    marginTop: responsiveHeight(1.5),
    marginLeft: responsiveWidth(4),
  },
  simpleText: {
    color: 'white',
    fontSize: responsiveFontSize(1.8),
  },
});
