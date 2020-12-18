import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './header.styles';
import {SearchView} from '../searchView';
export const Header = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{props.name}</Text>
      {props && props.isSearch && (
        <SearchView onChangeText={props.onChangeText} />
      )}
    </View>
  );
};
