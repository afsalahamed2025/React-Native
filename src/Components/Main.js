import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const Main = () => {
  const handlePress = () => {
    Alert.alert("You pressed the button!");
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.text}>Click Me</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 8,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Main;
