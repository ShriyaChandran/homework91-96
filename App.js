import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import SignupLogin from './screens/SignupLogin';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'


export default function App() {
  return (
    <AppContainer/>
  );
}


const switchNavigator = createSwitchNavigator({
  SignupLogin:{screen: SignupLogin},
  Drawer:{screen: AppDrawerNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
