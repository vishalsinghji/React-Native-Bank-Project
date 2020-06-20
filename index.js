//  import App from './App';
//  import {name as appName} from './app.json';

import {AppRegistry} from 'react-native';
import React from 'react';
import Routes from './android/app/src/components/Routes';

const App = () => {
  return <Routes />;
};

export default App;

AppRegistry.registerComponent('Project', () => App);
