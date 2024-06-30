import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RoutesName} from '@/common/enum/route';
import {AuthRoute} from '@/features/auth/route';
import {Settings} from '@/features/dashboard/settings';
import {Overview} from '@/features/dashboard/overview';

export const AppRouter = () => {
  const RoutesStack = createNativeStackNavigator();
  return (
    <RoutesStack.Navigator>
      <RoutesStack.Screen
        name={RoutesName.DASHBOARD}
        component={Overview}
        options={{headerShown: false}}
      />
      <RoutesStack.Screen
        name={RoutesName.SETTINGS}
        component={Settings}
        options={{headerShown: false}}
      />
      <RoutesStack.Screen
        name={RoutesName.AUTH}
        component={AuthRoute}
        options={{headerShown: false}}
      />
    </RoutesStack.Navigator>
  );
};
