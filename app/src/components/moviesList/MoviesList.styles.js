import {StyleSheet} from 'react-native';
import Scaling from '../../assets/device/normalize';
import colors from '../../assets/colors';

const {widthScale} = Scaling;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  listcontainer: {
    marginHorizontal: widthScale(4),
  },
});
