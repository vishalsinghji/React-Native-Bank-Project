import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Logo from '../components/Logo';
import { Actions } from 'react-native-router-flux';
import InputText from '../components/InputText';

const Register = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [AccountNo, setAccountNo] = useState('');
  const [Address, setAddress] = useState('');
  const [Amount, setAmount] = useState('');

  const accountRef = useRef(null);
  const fnameRef = useRef(null);
  const lnameRef = useRef(null);
  const addressRef = useRef(null);

  const goBack = () => {
    Actions.pop();
  };

  const userRegister = () => {
    fetch('http://192.168.43.9:8080/api/v1/account_detail', {
      method: 'post',
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: Amount,
        ac_no: AccountNo,
        customer: {
          firstName: FirstName,
          lastName: LastName,
          address: Address,
        },
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        alert('Successfully Registered');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const renderTextInput = field => {
    const {
      meta: { touched, error },
      label,
      secureTextEntry,
      maxLength,
      keyboardType,
      placeholder,
      input: { onChange, ...restInput },
    } = field;
    return (
      <View>
        <InputText
          onChangeText={onChange}
          maxLength={maxLength}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          label={label}
          {...restInput}
        />
        {touched && error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1c313a" barStyle="light-content" />
      <Logo />
      <Text style={styles.logoText}> Create Account</Text>
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Account Number"
        secureTextEntry={true}
        placeholderTextColor="#ffffff"
        selectionColor="#fff"
        keyboardType="number-pad"
        onSubmitEditing={() => accountRef.current && accountRef.current.focus()}
        onChangeText={setAccountNo}
      />
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Amount"
        placeholderTextColor="#ffffff"
        ref={accountRef}
        selectionColor="#fff"
        keyboardType="number-pad"
        onSubmitEditing={() => fnameRef.current && fnameRef.current.focus()}
        onChangeText={setAmount}
      />
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="First Name"
        placeholderTextColor="#ffffff"
        ref={fnameRef}
        selectionColor="#fff"
        keyboardType="email-address"
        onSubmitEditing={() => lnameRef.current && lnameRef.current.focus()}
        onChangeText={setFirstName}
      />
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Last Name"
        placeholderTextColor="#ffffff"
        ref={lnameRef}
        selectionColor="#fff"
        keyboardType="email-address"
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.inputBox}
        underlineColorAndroid="rgba(0,0,0,0)"
        placeholder="Address"
        placeholderTextColor="#ffffff"
        ref={addressRef}
        selectionColor="#fff"
        keyboardType="email-address"
        onChangeText={setAddress}
      />

      <TouchableOpacity style={styles.button} onPress={userRegister}>
        <Text style={styles.buttonText}>Register </Text>
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
    fontSize: 24,
    color: 'rgba(255, 255, 255, 0.7)',
    marginVertical: 15,
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
  errorText: {
    color: '#ffffff',
    fontSize: 14,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#ffffff',
    marginVertical: 10,
  },
});

export default Register;
