import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation"; 
import { createBottomTabNavigator } from "react-navigation-tabs";
import TransanctionScreen from './Screens/BookTransanctionScreen';
import SearchScreen from './Screens/SearchScreen';

export default class App extends React.Component {
  render(){
  return (
   <AppContainer/> 
  );
  }
}
const TabNavigator = createBottomTabNavigator({
  Transancton:{screen: TransanctionScreen},
  Search:{screen: SearchScreen}
});

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
