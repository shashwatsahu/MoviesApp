import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './MoviesListItem.styles';

export const MoviesListItem = ({item}) => {
  let name = item.Title ? item.Title : '';
  return (
    <View style={styles.container}>
      <Image
        source={{uri: item.Poster}}
        style={styles.productImage}
        resizeMode={'cover'}
      />
      <Text style={styles.productName} numberOfLines={1}>
        {name}
      </Text>
      <Text style={styles.productName} numberOfLines={1}>
        {item.Year}
      </Text>
    </View>
  );
};
