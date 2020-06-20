import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Platform, StatusBar} from 'react-native';

export default class Logo extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{width: 85, height: 85}}
          source={require('../images/bank.png')}
        />
        <Text style={styles.logoText}> Welcome to Digi Bank</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.7)',
    marginVertical: 15,
  },
});
