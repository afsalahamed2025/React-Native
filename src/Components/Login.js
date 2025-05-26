import React, { useState } from 'react'
import { View, Text, Image, Button, StyleSheet, TextInput, Alert } from 'react-native'

export default function Login({navigation}) {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  const handlePress = () => {
    const validusername = "sharuk";
    const validpassword = "123456";

    if (!username.trim()) {
      Alert.alert('Validation Error', 'Username field is required ')
      return
    }
    else if (!password.trim()) {
      Alert.alert('Validation Error', 'Password field is required')
      return
    }
    else if (username !== validusername || password !== validpassword) {
      const wrong =
        username !== validusername ? 'Invalid Username'
          :
          password !== validpassword ? ' Invalid Password ' : 'Invalid Username or Password';

      Alert.alert('Validation Error', wrong);
      return;
    }
    else {
      Alert.alert('Success', 'Login Successfully');
      navigation.navigate('Home')
    }
  }
  return (
    <View style={styles.container
    }>
      <Text style={styles.title}>Login Page</Text>
      <Image source={require('../assets/image/Login_page_Background.png')} style={styles.image} />

      <TextInput placeholder='Name' onChangeText={setusername} style={styles.input} />
      <TextInput placeholder='Password' onChangeText={setpassword} secureTextEntry={true} style={styles.input} />

      <Button title='logins' onPress={handlePress} />

    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 50,
    fontWeight: 'bold',

  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 15,
    marginBottom: 8,
    borderRadius: 5,
  },
});

/* sharuk */
/* 123456 */