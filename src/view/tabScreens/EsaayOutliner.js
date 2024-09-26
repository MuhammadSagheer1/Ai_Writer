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
} from 'react-native-responsive-dimensions';
import {Fonts} from '../../constants';
import SharedTextInput from '../../components/SharedTextInput';
import EsaayWriterbuttons from '../../components/EsaayWriterbuttons';
import SaveGradient from '../../components/SaveGradient';
import Answerbtns from '../../components/Answerbtns';

const EsaayOutliner = () => {
  const [clickeded, setClickeded] = useState(false);
  return (
    <ImageBackground
      source={require('../../../src/assets/screensbg.png')}
      style={styles.backgroundImage}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
        {/* title */}
        <View style={styles.titleContainer}>
          <View style={styles.iconContainer}>
            <Image source={require('../../../src/assets/Vector2.png')} />
          </View>
          <View>
            <Text style={styles.mainTitle}>AI Essay Writer For Students</Text>
            <Text style={styles.subtitle}>
              Get High Quality Custom Essays Written In Real-Time
            </Text>
          </View>
        </View>

        <Text style={styles.label}>Essay topic*</Text>
        <SharedTextInput
          placeholder={'Enter the topic of your essay'}
          placeholderTextColor={'#858585'}
          bordercolor={'#7D8085'}
        />

        <Text style={styles.label}>Academic level*</Text>
        <EsaayWriterbuttons
          onPress={() => setClickeded(!clickeded)}
          title={'Choose academic level'}
        />

        {clickeded && (
          <View style={styles.dropdownContainer}>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>Choose academic level</Text>
              <Image
                source={require('../../../src/assets/downarrow.png')}
                style={styles.dropdownArrow}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>High School</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>College - Undergraduate</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>Master</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem}>
              <Text style={styles.dropdownText}>Doctoral</Text>
            </TouchableOpacity>
          </View>
        )}

        <Text style={styles.label}>Essay Type*</Text>
        <EsaayWriterbuttons title={'Choose essay type'} />

        <Text style={styles.label}>Subject Name*</Text>
        <SharedTextInput
          placeholder={'Enter subject name'}
          placeholderTextColor={'#858585'}
          bordercolor={'#7D8085'}
        />

        <Text style={styles.label}>Citation Style*</Text>
        <EsaayWriterbuttons title={'Choose citation style'} />

        <Text style={styles.label}>No. of Pages*</Text>
        <EsaayWriterbuttons title={'1 Page - 300 Words'} />

        <Text style={styles.label}>Required No. of Sources*</Text>
        <EsaayWriterbuttons title={'Number of Sources'} />

        <Text style={styles.label}>Specific Instructions (Optional)</Text>
        <SharedTextInput
          placeholder={'Enter specific instruction'}
          placeholderTextColor={'#858585'}
          bordercolor={'#7D8085'}
        />

        <View style={styles.buttonContainer}>
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

        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <Text style={styles.footerButtonText}>New Outputs</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerText}>History</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerText}>Clear</Text>
          </TouchableOpacity>
        </View>

        {/* answer prompt */}
        <View style={styles.answerPromptContainer}>
          <View style={styles.answerIconContainer}>
            <Image source={require('../../../src/assets/answer.png')} />
          </View>
          <View style={styles.answerTextContainer}>
            <Text style={styles.answerTitle}>Answer the prompts</Text>
            <Text style={styles.answerSubtitle}>
              Get the best results by trying multiple {'\n'} inputs and of
              varying lengths.
            </Text>
          </View>
        </View>

        <View style={styles.responseContainer}>
          <View style={styles.responseIcons}>
            <Answerbtns
              imageSource={require('../../../src/assets/Layer1.png')}
            />
            <Answerbtns
              imageSource={require('../../../src/assets/download.png')}
            />
            <Answerbtns imageSource={require('../../../src/assets/like.png')} />
            <Answerbtns
              imageSource={require('../../../src/assets/dislike.png')}
            />
            <Text style={styles.responseTime}>21h ago</Text>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default EsaayOutliner;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: responsiveHeight(2),
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
  mainTitle: {
    fontSize: 19,
    fontFamily: Fonts.regular,
    color: 'white',
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: Fonts.interRegular,
    color: '#D4DCE5',
    marginLeft: 10,
    marginTop: 5,
  },
  label: {
    fontSize: 13,
    fontFamily: Fonts.interRegular,
    color: 'white',
    marginTop: responsiveHeight(2),
  },
  dropdownContainer: {
    width: responsiveWidth(90),
    height: responsiveHeight(30),
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#7D8085',
    alignSelf: 'center',
    marginTop: responsiveHeight(4),
  },
  dropdownItem: {
    height: responsiveHeight(6),
    borderBottomWidth: 1,
    borderBottomColor: '#7D8085',
    justifyContent: 'center',
  },
  dropdownText: {
    fontSize: 12,
    fontFamily: Fonts.interRegular,
    color: 'white',
    marginLeft: 10,
  },
  dropdownArrow: {
    alignSelf: 'center',
    marginRight: 10,
  },
  buttonContainer: {
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
    fontSize: 13,
    fontFamily: Fonts.interRegular,
  },
  footer: {
    width: '100%',
    height: responsiveHeight(8),
    borderTopWidth: 1,
    borderColor: '#7D8085',
    marginTop: 30,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerButton: {
    width: responsiveWidth(30),
    height: responsiveHeight(5),
    borderRadius: 8,
    backgroundColor: '#171717',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerButtonText: {
    color: '#D012FF',
    fontSize: 12,
    fontFamily: Fonts.interRegular,
  },
  footerText: {
    fontFamily: Fonts.interRegular,
    fontSize: 12,
    color: 'white',
    marginRight: 20,
  },
  answerPromptContainer: {
    flexDirection: 'row',
    marginTop: responsiveHeight(10),
    justifyContent: 'center',
  },
  answerIconContainer: {
    width: responsiveWidth(15),
    height: responsiveHeight(15),
    borderWidth: 0.4,
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: '#000000',
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  answerTextContainer: {
    borderWidth: 0.4,
    borderColor: 'gray',
  },
  answerTitle: {
    color: 'white',
    fontSize: 16,
    fontFamily: Fonts.regular,
    marginTop: responsiveHeight(2),
    marginLeft: 10,
  },
  answerSubtitle: {
    color: '#D4DCE5',
    fontSize: 12,
    fontFamily: Fonts.interRegular,
    marginTop: responsiveHeight(1),
    marginLeft: 10,
  },
  responseContainer: {
    width: '100%',
    backgroundColor: '#1F1F1F',
    height: responsiveHeight(40),
    borderRadius: 10,
    marginTop: responsiveHeight(4),
  },
  responseIcons: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 8,
  },
  responseTime: {
    marginLeft: responsiveWidth(17),
    marginTop: responsiveHeight(1),
    color: '#858585',
  },
});
