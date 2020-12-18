import React from 'react';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as MovisAction from '../moviesList/ducks/MoviesList.actions';
import {MoviesListItem} from '../../reusables/moviesListItem';
import {styles} from '../moviesList/MoviesList.styles';
import {Header} from '../../reusables/header';
import {EmptyView} from '../../reusables/emptyView/EmptyView';
import {SHORT_LIST, LOADING, NO_DATA_FOUND} from '../../assets/strings';

class ShortList extends React.Component {
  componentDidMount() {
    this.searchMovies();
  }
  searchMovies = (text = 'Superman') => {
    const {fetchMovies} = this.props.actions;
    let searchText = text === '' ? 'Superman' : text;
    fetchMovies(searchText);
  };
  renderHeader = () => {
    return <Header name={SHORT_LIST} />;
  };
  renderMoviesList = () => {
    const {loading, shortListData} = this.props.MoviesReducer;
    return (
      <View style={[styles.container, styles.listcontainer]}>
        <FlatList
          ref={(ref) => (this.moviesScrollViewRef = ref)}
          keyExtractor={(item) => item.imdbID.toString()}
          data={shortListData}
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
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderMoviesList()}
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
export default connect(mapStateToProps, mapDispatchToProps)(ShortList);
