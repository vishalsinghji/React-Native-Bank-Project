import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Logo from '../components/Logo';
import {Actions} from 'react-native-router-flux';
import InputText from '../components/InputText';

class Register extends Component<{}> {
  goBack() {
    Actions.pop();
  }

  constructor(props) {
    super(props);
    this.state = {
      FirstName: '',
      LastName: '',
      AccountNo: '',
      Address: '',
      Amount: '',
    };
  }
  userRegister = () => {
    const {FirstName} = this.state;
    const {LastName} = this.state;
    const {AccountNo} = this.state;
    const {Address} = this.state;
    const {Amount} = this.state;

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

  render() {
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
          onSubmitEditing={() => this.account.focus()}
          onChangeText={AccountNo => this.setState({AccountNo})}
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Amount"
          placeholderTextColor="#ffffff"
          ref={input => (this.account = input)}
          selectionColor="#fff"
          keyboardType="number-pad"
          onSubmitEditing={() => this.fname.focus()}
          onChangeText={Amount => this.setState({Amount})}
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
          onChangeText={FirstName => this.setState({FirstName})}
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Last Name"
          placeholderTextColor="#ffffff"
          ref={input => (this.lname = input)}
          selectionColor="#fff"
          keyboardType="email-address"
          onChangeText={LastName => this.setState({LastName})}
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Address"
          placeholderTextColor="#ffffff"
          ref={input => (this.address = input)}
          selectionColor="#fff"
          keyboardType="email-address"
          onChangeText={Address => this.setState({Address})}
        />

        <TouchableOpacity style={styles.button} onPress={this.userRegister}>
          <Text style={styles.buttonText}>Register </Text>
        </TouchableOpacity>

        <View style={styles.signupTextCont}>
          <Text style={styles.signupButton} onPress={() => Actions.Homes()}>
            Home
          </Text>
        </View>
      </View>
    );
  }
  renderTextInput = field => {
    const {
      meta: {touched, error},
      label,
      secureTextEntry,
      maxLength,
      keyboardType,
      placeholder,
      input: {onChange, ...restInput},
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
}

// const validate = values => {
//   const errors = {};

//   if (!values.firstName) {
//     errors.firstName = ' First Name is required';
//   }

//   if (!values.lastName) {
//     errors.lastName = ' Last Name is required';
//   }

//   if (!values.id) {
//     errors.id = ' Id is required';
//   }

//   if (!values.phoneno) {
//     errors.phoneno = ' Account Number  is required';
//   }
//   return errors;
// };

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
