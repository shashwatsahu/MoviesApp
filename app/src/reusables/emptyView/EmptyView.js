import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LOADING} from '../../assets/strings';
import Scaling from '../../assets/device/normalize';
import colors from '../../assets/colors';

const {heightScale, normalize} = Scaling;

export const EmptyView = (props) => (
  <View style={styles.container}>
    <Text style={styles.textStyle}>{props.text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: heightScale(20),
  },
  textStyle: {
    fontSize: normalize(20),
    color: colors.blueGray,
    fontWeight: 'bold',
  },
});
