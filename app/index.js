/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './src/config/store';
import {PersistGate} from 'redux-persist/integration/react';
import AppStackEntry from './src/config/router';
import colors from './src/assets/colors';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rehydrated: false,
      store: null,
      persistor: null,
    };
  }
  componentDidMount() {
    this.reHydratingStore();
  }
  reHydratingStore = async () => {
    const {store, persistor} = await configureStore();
    this.setState({store, persistor, rehydrated: true});
  };
  render() {
    const {store, persistor, rehydrated} = this.state;
    if (!rehydrated) {
      return null;
    }
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar backgroundColor={colors.purple} />
          <SafeAreaView style={styles.container}>
            <AppStackEntry />
          </SafeAreaView>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
  },
});
