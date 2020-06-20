//
import {StyleSheet, View, StatusBar} from 'react-native';
import Register from './android/app/src/Pages/Register';
import CashWithdraw from './android/app/src/Pages/CashWithdraw';
import CashDeposit from './android/app/src/Pages/CashDeposit';
import CheckBalance from './android/app/src/Pages/CheckBalance';
import Home from './android/app/src/Pages/Home';
import React, {Component} from 'react';
import Routes from './android/app/src/components/Routes';

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      {/* <StatusBar backgroundColor="#1c313a" barStyle="light-content" /> */}
        {/* <CashWithdraw /> */}
        {/* <Home /> */}
        {/* <CashDeposit/> */}
        {/* <CheckBalance /> */}
        <Register />
        {/* <Routes /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
