import React from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as MovisAction from './ducks/MoviesList.actions';
import {MoviesListItem} from '../../reusables/moviesListItem';
import {styles} from './MoviesList.styles';
import {Header} from '../../reusables/header';
import {EmptyView} from '../../reusables/emptyView/EmptyView';
import {APP_NAME, LOADING, NO_DATA_FOUND} from '../../assets/strings';
import {debounce} from 'lodash';

class MoviesList extends React.Component {
  componentDidMount() {
    this.searchMovies();
  }
  searchMovies = (text = 'Superman') => {
    const {fetchMovies} = this.props.actions;
    let searchText = text === '' ? 'Superman' : text;
    fetchMovies(searchText);
  };
  renderHeader = () => {
    return (
      <Header
        name={APP_NAME}
        isSearch
        onChangeText={debounce(this.onChangeText, 500)}
      />
    );
  };
  onChangeText = (text) => {
    this.searchMovies(text);
  };
  renderMoviesList = () => {
    const {moviesData, loading, shortListData} = this.props.MoviesReducer;
    return (
      <View style={[styles.container, styles.listcontainer]}>
        <FlatList
          ref={(ref) => (this.moviesScrollViewRef = ref)}
          keyExtractor={(item) => item.imdbID.toString()}
          data={moviesData}
          renderItem={({item, index}) => (
            <MoviesListItem
              item={item}
              addShortListData={this.addShortListData}
              shortListData={shortListData}
            />
          )}
          numColumns={2}
          windowSize={60}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <EmptyView text={loading ? LOADING : NO_DATA_FOUND} />
          )}
        />
      </View>
    );
  };
  onScrollToTop = () => {
    const {moviesData} = this.props.MoviesReducer;
    if (moviesData && moviesData.length > 0) {
      this.moviesScrollViewRef &&
        this.moviesScrollViewRef.scrollToIndex({
          index: 0,
          animated: true,
        });
    }
  };
  addShortListData = (item) => {
    const {addShortListMovie} = this.props.actions;
    const {shortListData} = this.props.MoviesReducer;
    let data = [...shortListData];
    if (data.length > 0) {
      let index = data.findIndex(
        (movieItem) => movieItem.imdbID === item.imdbID,
      );
      if (index > -1) {
        data.splice(index, 1);
        addShortListMovie(data);
      } else {
        data.push(item);
        addShortListMovie(data);
      }
    } else {
      data.push(item);
      addShortListMovie(data);
    }
  };
  render() {
    const {loading} = this.props.MoviesReducer;
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderMoviesList()}
        {loading && <EmptyView text={LOADING} />}
      </View>
    );
  }
}
function mapStateToProps({MoviesReducer}) {
  return {
    MoviesReducer: MoviesReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...MovisAction}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
