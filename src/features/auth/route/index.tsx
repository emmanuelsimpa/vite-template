import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RoutesName} from '@/common/enum/route';
import {SignUp} from '../sign-up';
import {Login} from '../login';

export function AuthRoute() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="auth-index">
      <Stack.Screen
        name={RoutesName.SIGN_UP}
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={RoutesName.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
