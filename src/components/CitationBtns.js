import LinearGradient from 'react-native-linear-gradient';
import {Fonts} from '../constants';
import {Text, TouchableOpacity} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const CitationBtns = ({title, onPress, isActive}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={isActive ? ['red', 'blue'] : ['gray', 'gray']} // Conditional Gradient Colors
      style={{
        width: responsiveWidth(28),
        height: responsiveHeight(5),
        borderRadius: responsiveHeight(5),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          width: responsiveWidth(27),
          height: responsiveHeight(4.5),
          borderRadius: responsiveHeight(4.5),
          backgroundColor: isActive ? 'black' : 'black', // Conditional Button Color
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onPress}>
        <Text
          style={{
            fontSize: 13,
            color: isActive ? 'white' : '#AFAFAF',
            fontFamily: Fonts.interRegular,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
export default CitationBtns;
