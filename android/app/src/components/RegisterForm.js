import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Form extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="ID"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          selectionColor="#fff"
          keyboardType="number-pad"
          onSubmitEditing={() => this.account.focus()}
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Account Number"
          placeholderTextColor="#ffffff"
          ref={input => (this.account = input)}
          selectionColor="#fff"
          keyboardType="number-pad"
          onSubmitEditing={() => this.fname.focus()}
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="First Name"
          placeholderTextColor="#ffffff"
          ref={input => (this.fname = input)}
          selectionColor="#fff"
          keyboardType="email-address"
          onSubmitEditing={() => this.lname.focus()}
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Last Name"
          placeholderTextColor="#ffffff"
          ref={input => (this.lname = input)}
          selectionColor="#fff"
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{this.props.type} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
