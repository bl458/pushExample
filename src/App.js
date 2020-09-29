/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, StatusBar, TouchableOpacity} from 'react-native';

import {pushNotifications} from './services';

const App = () => {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'green'}}>
        <TouchableOpacity
          style={{flex: 1, backgroundColor: 'purple'}}
          onPress={pushNotifications.LocalNotification}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
