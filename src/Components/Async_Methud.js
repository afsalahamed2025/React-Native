import { View, Text, Alert, Button, ActivityIndicator, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Async_Methud = () => {
//  const waiting=()=>{
//   return new Promise(resolve=>{
//     setTimeout(()=>{
//       resolve();
//     },2000)
//   })
//  }
//   const orderfoo=async()=>{
//     try{console.log('Ordering loaded...')
//       Alert.alert('Order loaded... ','Waiting Just 2,3 Seconds')
//       await waiting()
//       const message =' Order SuccessFully'
//       Alert.alert('Compleded ',message)
//       console.log(message)
//     } catch (error){
//       Alert.alert('Error',"Somethings")
//     }
//   }


  const get = async () => {
    try {
      const Values = await AsyncStorage.getItem('Numbers');
      console.log(Values);
    } catch (e) {}
  };
  const set = async (val) => {
    try {
      await AsyncStorage.setItem('Numbers', val);
    } catch (e) {}
  };

// const [userdetails,setuserdetails]=useState(null)
// const [load,setload]=useState(false)
// const loaduserinfo = async () => {
//   try{
//     setload(true)
//     setuserdetails(null)

//   console.log('Start Load...')
//     await new Promise (resolve=> setTimeout(resolve, 2000)
//     )

//     const user ={
//       id:'2025001',
//       Username:'hash',
//       Password:"12345",
//       Email:"hash@gmail.com",
//       Address:"Cbe, Tn"

//     };
//     console.log('User info LOAD :' ,user)
//     setuserdetails(user)
//   } catch(error){
//     console.log("Error loading user:",error);
    
//   }finally{
//     setload(false)
//     console.log('loading finish')
//   }
  
// }

return (
  // <View style={{width:'100%',height:100,flexDirection:'row',justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
  // <Button title='orders' onPress={orderfoo}/>
  // </View>
  
//   <View>
//     <Text>User Details</Text>
//     {load ? (
//  <ActivityIndicator size='large' color='blue'/>
//     ) :userdetails ?(
//       <View>
//         <Text>Id:{userdetails.id}</Text>
//         <Text>Username: {userdetails.Username}</Text>
//         <Text>Password: {userdetails.Password}</Text>
//         <Text>Email:{userdetails.Email}</Text>
//         <Text>Address:{userdetails.Address}</Text>
//       </View>
//     ):(
//       <Text style={{}}>User Info  :Not load</Text>
//     )}


//     <Button title='pRESS' onPress={loaduserinfo} />
//   </View>

<View>

<TouchableOpacity
        onPress={() => {
          get();
        }}>
        <Text>Get</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          set("123456789");
        }}>
        <Text>Setting Value 123</Text>
      </TouchableOpacity> 
      </View>
  
  )
}
export default Async_Methud

















































































/*====================================== */




/* ====================================== */

   