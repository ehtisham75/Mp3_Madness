import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//-------------------------------------------------->>
// import PlayerScreen from './Source_Spotify/Screens/Player/PlayerScreen';
import SplashScreen from './Source_Madness/Screens/Splash/SplashScreen';
import Mp3Player from './Source_Madness/Screens/Home/Mp3Player';
import LoginScreen from './Source_Madness/Screens/Home/Login/LoginScreen';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
          headerShown: false
        }}>
        {/* <Stack.Screen name="SplashScreen" component={SplashScreen} /> */}
        {/* <Stack.Screen name="LoginScreen" component={LoginScreen} /> */}
        <Stack.Screen name="Mp3Player" component={Mp3Player} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }
}
