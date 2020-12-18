import {Dimensions, StyleSheet} from 'react-native';
import Scaling from '../../assets/device/normalize';
import colors from '../../assets/colors';

const {widthScale, heightScale, normalize, moderateScale} = Scaling;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.purple,
    paddingHorizontal: widthScale(12),
    paddingVertical: heightScale(16),
    borderBottomColor: colors.blueGray,
    borderBottomWidth: heightScale(0.5),
    marginBottom: heightScale(4),
  },
  headerText: {
    fontSize: normalize(16),
    color: colors.white,
    fontWeight: 'bold',
  },
  arrowStyle: {
    height: heightScale(15),
    transform: [{rotate: '180deg'}],
  },
});
