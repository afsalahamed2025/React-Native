import React, { useState ,useEffect} from 'react'
import { View, Text, Image, Button, StyleSheet, TextInput, Alert } from 'react-native'

import  AsyncStorage  from '@react-native-async-storage/async-storage';
import Home from './Home';
import based64 from 'base-64'


export default function Login({navigation}) {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')



useEffect(() => {
 Saved_Data()
}, [])


   const Saved_Data= async()=>{
      try{
      const username=await AsyncStorage.getItem('username')
      const password=await AsyncStorage.getItem('password')
      console.log('Saved Username Async:',username)
      console.log('Saved  Password Async:',password)
      if (username && password){
        navigation.navigate('Home') //replace use  pandarthu kku  (back pogathu login page kku) 
      }
    } catch (error){
      console.log('Error reading Aysnc:',error);
      
    }
  }
  const handlePress = async () => {
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

    
    const encodedUsername=based64.encode(username)
    const encodedPassword=based64.encode(password)

    console.log('Encoded Username:',encodedUsername)
    console.log('Encoded Password:',encodedPassword)


    try{
        const response= await fetch('http://13.127.67.252:5040/FPU20S3/',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          // Minimum Login-ku Required
          // p1 p2 user credentials base64 la
          //p3–p6  app name user type  and action (login) send pannuradhu
          body:JSON.stringify({
            data:{
              p1: "c2hhcnVr",
              p2: "MTIzNDU2",
              p3:'',
              p4:'1',
              p5:'Reach',
              p6:'login',
            },
          }),
        });


      const result= await response.json() //Response JSON format-la edukkurathu
    console.log('API Response:',result);

    const statusCode =result?.Output?.status?.code;
    if(statusCode === '200'){
      Alert.alert('Success','Login Sucessfully');
      await AsyncStorage.setItem('username',username)
      await AsyncStorage.setItem('password',password)

      navigation.navigate("Home")
      console.log('Login Successfully and Home Page Move:')
    }
  else {
    const errormsg=result?.Output?.status?.message || 'Login Failed '
    Alert.alert('Login Error:',errormsg)
    console.log('Login Error:',errormsg)
  }
    }
    catch (error) {
      console.log('API Error:',error)
      Alert.alert('Error',"Something went Wrong")
    }

  //   else {
  //     Alert.alert('Success', 'Login Successfully');
  //     navigation.navigate('Home')
//  }
  }
  return (
    <View style={styles.container
    }>
      <Text style={styles.title}>Login Page</Text>
      <Image source={require('../assets/image/Login_page_Background.png')} style={styles.image} />

      <TextInput placeholder='Name' placeholderTextColor='#0073ff' onChangeText={setusername} style={styles.input} />
      <TextInput placeholder='Password' placeholderTextColor='#0073ff' onChangeText={setpassword} secureTextEntry={true} style={styles.input} />

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
    color:'#0073ff',
    borderRadius: 5,
  },
});

/* sharuk */
/* 123456 */