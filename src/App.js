import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, TouchableOpacity} from 'react-native';

import {pushNotifications} from './services';

const pushHelper = new pushNotifications.PushHelper();

const App = () => {
  useEffect(() => pushHelper.deleteHistory(), []);

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'green'}}>
        <TouchableOpacity
          style={{flex: 1, backgroundColor: 'purple'}}
          onPress={pushHelper.localNotification}
        />
      </SafeAreaView>
    </>
  );
};

export default App;
