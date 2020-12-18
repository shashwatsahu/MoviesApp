import React from 'react';
import {View, Text, Image, TextInput, StyleSheet, Platform} from 'react-native';
import colors from '../../assets/colors';
import Scaling from '../../assets/device/normalize';

const {widthScale, heightScale, normalize, moderateScale} = Scaling;

export const SearchView = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputStyle}
        placeholder={'Search...'}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: moderateScale(2),
    paddingVertical: heightScale(4),
    marginVertical: heightScale(4),
  },
  inputStyle: {
    paddingLeft: widthScale(4),
    paddingVertical: Platform.OS === 'ios' ? heightScale(4) : 0,
  },
});
