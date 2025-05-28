import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

const Break = () => {
 
    let SelectNatureofComplaint = ''
    let Switches = ''
    let SelectPriority = ''
    let SmartSwitch = ''
    let EnterDescription=''
    let EnterClientWorkerNo=''
    


  return (
    <View
      style={{
        
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      <Text style={{backgroundColor: '#ffffff' , color:'#0073ff' , width:"100%", fontSize:20,  height:50,fontWeight:'600'}}>Complaint Details</Text>
      <View style={{flexDirection:"column",width:"94%", justifyContent:"center",alignSelf:"center"}}>
        <TextInput style={{ borderWidth:1, borderColor:'#0073ff',borderRadius:10, }} placeholder="Select Nature of Complaint" placeholderTextColor="#000000"></TextInput>
        <View style={{height:20}}/>
        <TextInput style={{ borderWidth:1, borderColor:'#0073ff',borderRadius:10,  }} placeholder="Switches"  placeholderTextColor="#000000"></TextInput>
        <View style={{height:20}}/>
        <TextInput style={{ borderWidth:1, borderColor:'#0073ff',borderRadius:10,}} placeholder="Select Priority"  placeholderTextColor="#000000"></TextInput>
        <View style={{height:20}}/>
        <TextInput style={{ borderWidth:1, borderColor:'#0073ff',borderRadius:10,}} placeholder="Smart Switch" placeholderTextColor="#000000"></TextInput>
        <View style={{height:20}}/>
        <TextInput style={{borderWidth:1, borderColor:'#0073ff',borderRadius:10,}} placeholder="Enter Description" placeholderTextColor="#000000"></TextInput>
        <View style={{height:20}}/>
        <TextInput style={{ borderWidth:1, borderColor:'#0073ff',borderRadius:10, }} placeholder="Enter Client Worker No" placeholderTextColor="#000000"></TextInput>
        <View style={{height:20}}/>

        <View style={styles.buttonwrapper}>
  <Button title="Submit" onPress={handlepress}  color="#0073ff" />
</View>
      </View>
    </View>
  );
};

export default Break;

const styles = StyleSheet.create({
  buttonwrapper: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

  },
});
