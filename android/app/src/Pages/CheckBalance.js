import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Logo from '../components/Logo';
import { Actions } from 'react-native-router-flux';

const API_BASE_URL = 'http://192.168.43.9:8080/api/v1/account_detail/';

const CheckBalance = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchBalance = async () => {
    if (!accountNumber) return;
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}${accountNumber}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      Alert.alert('Balance', `Balance: ${data.amount}`);
    } catch (error) {
      Alert.alert('Error', error.message || 'Failed to fetch balance');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2c3e50" barStyle="light-content" />
      <Logo />
      <Text style={styles.logoText}>Check Balance</Text>
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Account Number"
        placeholderTextColor="#ffffff"
        selectionColor="#fff"
        keyboardType="number-pad"
        value={accountNumber}
        onChangeText={setAccountNumber}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={fetchBalance}
        disabled={!accountNumber || loading}
      >
        <Text style={styles.buttonText}>
          {loading ? 'Checking...' : 'Check Balance'}
        </Text>
      </TouchableOpacity>
      <View style={styles.signupTextCont}>
        <Text style={styles.signupButton} onPress={() => Actions.Homes()}>
          Home
        </Text>
      </View>
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
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row',
  },
  signupButton: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
  },
  logoText: {
    fontSize: 25,
    color: 'rgba(255, 255, 255, 0.7)',
    marginVertical: 15,
  },
  inputBox: {
    marginVertical: 15,
    width: 300,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
  },
  button: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default CheckBalance;
