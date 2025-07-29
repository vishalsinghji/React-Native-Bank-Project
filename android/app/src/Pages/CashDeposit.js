import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Logo from '../components/Logo';
import { Actions } from 'react-native-router-flux';

const CashDeposit = () => {
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('');
  const amountInputRef = useRef(null);

  const handle_account = text => setAccount(text);
  const handle_amount = text => setAmount(text);

  const cashDeposit = (ac, am) => {
    fetch('http://192.168.43.9:8080/api/v1/account_detail/' + ac + '/' + am, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    alert('Deposit Sucessful');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
      <Logo />
      <Text style={styles.logoText}> Cash Deposit</Text>
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Account Number"
        placeholderTextColor="#ffffff"
        selectionColor="#fff"
        keyboardType="number-pad"
        onChangeText={handle_account}
        onSubmitEditing={() => amountInputRef.current && amountInputRef.current.focus()}
      />
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Amount"
        placeholderTextColor="#ffffff"
        ref={amountInputRef}
        selectionColor="#fff"
        keyboardType="number-pad"
        onChangeText={handle_amount}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => cashDeposit(account, amount)}
      >
        <Text style={styles.buttonText}>CashDeposit</Text>
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

export default CashDeposit;
