import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
// import MemoListScreen from './src/screens/MemoListScreen';
// import MemoListScreen from './src/screens/MemoDetailScreen';
// import MemoListScreen from './src/screens/MemoEditScreen';
import LoginScreen from './src/screens/SignupScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      {/* <MemoListScreen /> */}
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 78,
  },
  
});
