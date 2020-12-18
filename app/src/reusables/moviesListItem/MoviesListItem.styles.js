import {Dimensions, StyleSheet} from 'react-native';
import Scaling from '../../assets/device/normalize';
import colors from '../../assets/colors';

const {widthScale, heightScale, normalize, moderateScale} = Scaling;

export const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('screen').height / 2.7,
    flex: 0.5,
    borderWidth: widthScale(0.5),
    borderColor: colors.blueGray,
  },
  productImage: {
    height: Dimensions.get('screen').height / 3.5,
  },
  productName: {
    fontSize: normalize(12),
    fontWeight: 'bold',
    color: colors.black,
    marginTop: heightScale(4),
    marginHorizontal: widthScale(4),
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: widthScale(4),
  },
  priceText: {
    fontSize: normalize(12),
    color: colors.black,
    marginRight: widthScale(4),
    fontWeight: 'bold',
  },
  mrpText: {
    fontSize: normalize(10),
    color: colors.blueGray,
    marginRight: widthScale(4),
    textDecorationLine: 'line-through',
  },
  discountedPrice: {
    fontSize: normalize(10),
    color: colors.red,
    marginRight: widthScale(4),
  },
  heartStyle: {
    height: moderateScale(16),
    tintColor: colors.veryLightBlue,
  },
  heartSelectedStyle: {
    tintColor: colors.purple,
  },
  shortListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: heightScale(4),
    width: '100%',
  },
  shortListText: {
    fontSize: normalize(12),
    color: colors.purple,
    fontWeight: 'bold',
  },
});
