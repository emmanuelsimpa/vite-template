import React, {PropsWithChildren} from 'react';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {persistor, store} from '@/lib/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {ToastProvider} from '@/common/components/toast';

export function AppProvider({children}: PropsWithChildren) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GluestackUIProvider config={config}>
          <NavigationContainer>
            <ToastProvider />
            {children}
          </NavigationContainer>
        </GluestackUIProvider>
      </PersistGate>
    </Provider>
  );
}
