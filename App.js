/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import Entype from 'react-native-vector-icons/Entypo';
import React from 'react';
import type {Node} from 'react';
import 'react-native-gesture-handler';
import { withAuthenticator } from 'aws-amplify-react-native';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './src/screens/Home/';
import Posts from './src/components/posts/index.js';
import Profile from './src/screens/Profile/ProfileScreen.js';
import SearchResultScreen from './src/screens/SearchResults/index.js';
import DestinationSearch from './src/screens/DestinationSearch/index.js';
import Guests from './src/screens/Guests/index.js';

import Router from './src/navigation/Router.js';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
    <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Router />
    {/* <SafeAreaView style={backgroundStyle}>
      <Posts />
      <HomeScreen />
      <Profile /> 
      <SearchResultScreen /> 
      <DestinationSearch />
      <Guests />
    </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
  // sectionContainer: {
  //   marginTop: 32,
  //   paddingHorizontal: 24,
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
});

export default withAuthenticator(App);
