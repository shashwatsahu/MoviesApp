import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './MoviesListItem.styles';
import {ic_heart} from '../../assets/images/ic_heart';

export const MoviesListItem = ({item, addShortListData, shortListData}) => {
  let name = item.Title ? item.Title : '';
  let isSelected =
    shortListData && shortListData.length > 0
      ? shortListData.findIndex((value) => value.imdbID === item.imdbID)
      : -1;
  isSelected = isSelected > -1;
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
      <TouchableOpacity
        style={styles.shortListContainer}
        onPress={() => addShortListData(item)}>
        <Image
          style={[styles.heartStyle, isSelected && styles.heartSelectedStyle]}
          source={ic_heart}
          resizeMode={'contain'}
        />
        <Text style={styles.shortListText}>{'ShortList'}</Text>
      </TouchableOpacity>
    </View>
  );
};
