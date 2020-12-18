import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {styles} from './MoviesListItem.styles';
import {ic_heart} from '../../assets/images/ic_heart';
import {ic_movie_placeholder} from '../../assets/images/ic_movie_placeholder';

export const MoviesListItem = ({item, addShortListData, shortListData}) => {
  let name = item.Title ? item.Title : '';
  let isSelected =
    shortListData && shortListData.length > 0
      ? shortListData.findIndex((value) => value.imdbID === item.imdbID)
      : -1;
  isSelected = isSelected > -1;
  let sourceImg =
    item.Poster === 'N/A' ? ic_movie_placeholder : {uri: item.Poster};
  return (
    <View style={styles.container}>
      <Image
        source={sourceImg}
        style={styles.productImage}
        resizeMode={item.Poster === 'N/A' ? 'contain' : 'cover'}
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
        <Text
          style={[
            styles.shortListText,
            isSelected && styles.selectedShortListText,
          ]}>
          {'ShortList'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
