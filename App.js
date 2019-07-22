// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import commonStyle from './src/commonStyle'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Sample text</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    fontFamily: commonStyle.fontFamily
  }
})
