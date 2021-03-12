import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import MeScreen from './screens/MeScreen';
import AddContactScreen from './screens/AddContactScreen';
import ContactDetailsScreen from './screens/ContactDetailsScreen';
import PureButtonScreen from './PureButtonScreen';

import { store, persistor } from './redux/store';
import { Provider, connect } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';


const Stack = createStackNavigator()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} >
          <LaunchFunction />
        </PersistGate>
      </Provider>
    )
  }
}

const Launch = ({token}) => {
  return (
    // (token !== 'thisIsARealToken') ? <LoginScreen /> :
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name='HomeScreen' component={HomeScreen}
            options={{ headerTintColor: 'darkorange', }} />

          <Stack.Screen
            name='MeScreen' component={MeScreen}
            options={{ title: 'Me', headerTintColor: 'teal', }} />

          <Stack.Screen
            name='AddContactScreen' component={AddContactScreen}
            options={{ title: 'Add a contact', headerTintColor: 'teal', }} />

          <Stack.Screen
            name='ContactDetailsScreen' component={ContactDetailsScreen}
            options={{ title:'Contact Details', headerTintColor: 'teal', headerStyle: {backgroundColor: "black"}, }} />

        </Stack.Navigator>
      </NavigationContainer>
  )
}

const mapStateToProps = gState => ({
  token: gState.user.token,
})

const LaunchFunction = connect(mapStateToProps)(Launch)