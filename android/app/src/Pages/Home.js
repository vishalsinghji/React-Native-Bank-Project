import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import Logo from '../components/Logo';
import HomeForm from '../components/HomeForm';
const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
      <Logo />
      <Text style={styles.logoText}> Home</Text>
      <HomeForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 25,
    color: 'rgba(255, 255, 255, 0.7)',
    marginVertical: 15,
  },
});

export default Home;
