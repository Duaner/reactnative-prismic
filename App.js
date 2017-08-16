import React from 'react'
import { View, StatusBar } from 'react-native'
import About from './components/about'
import Home from './components/Home'
import { TabNavigator } from 'react-navigation'

const Tabs = TabNavigator({
  Home : { screen : Home },
  About : { screen : About }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <StatusBar hidden={true} />
        <Tabs/>
      </View>
    );
  }
}