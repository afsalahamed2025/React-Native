import React from 'react';
import { View,  StyleSheet } from 'react-native';
import Navigationfiles from "./src/Components/Navbar";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Navigationfiles />
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  header: {
    padding: 16,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
