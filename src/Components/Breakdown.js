import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import React, { useState } from 'react';
import {TextInput} from 'react-native-gesture-handler';
import { log } from 'react-native-reanimated';

const Break = () => {



/* =========********** USE STATE ==========******** */
const [selectNatureofComplaint, setselectNatureofComplaint]= useState('');
const [switches,setswitches]= useState('');
const [selectPriority,setselectPriority]=useState('');
const [smartSwitch,setsmartSwitch]=useState('');
const [enterDescription,setenterDescription]=useState('');
const [enterClientWorkerNo,setenterClientWorkerNo]=useState('');

const [datas,setdatas]=useState([]);




const handlePress =()=>{ 
  if(selectNatureofComplaint === ''){
    Alert.alert('Error','Select Nature of Complaint')
  }
  else if (switches == ''){
    Alert.alert('Error','Switches')
  }
  else if (selectPriority === ''){
    Alert.alert('Error','Select Priority')
  }
  else if (smartSwitch == ''){
    Alert.alert('Error','Enter Description')
  }
  else if (enterDescription === ''){
    Alert.alert('Error','Enter Client Worker No')
  }
  else if (enterClientWorkerNo == ''){
    Alert.alert('Error','Enter Client Worker No')
  }
  else {
 
/* OBJECT LOG */
const Temp_data = {selectNatureofComplaint,switches,selectPriority,smartSwitch,enterDescription,enterClientWorkerNo}
setdatas(prevDatas => [...prevDatas, Temp_data]);

console.log({selectNatureofComplaint,switches,selectPriority,smartSwitch,enterDescription,enterClientWorkerNo})
console.log(datas,"DATAS")
    const Submitedddd = selectNatureofComplaint=='tech'? 'Rise complaint':'Successfully'; 
    Alert.alert('Success',Submitedddd)
  }


}
/* ***********====================JAVASCRIPT=========================== ******/
  // let selectNatureofComplaint = '';
  // let switches = '';
  // let selectPriority = '';
  // let smartSwitch = '';
  // let enterDescription = '';
  // let enterClientWorkerNo = '';

  // const handlePress = () => {
  //   if (selectNatureofComplaint == '') {
  //     Alert.alert('Error', 'Select Nature of Complaint');
  //   } else if (switches === '') {
  //     Alert.alert('Error', 'Switches');
  //   } else if (selectPriority == '') {
  //     Alert.alert('Error', 'Select Priority');
  //   } else if (smartSwitch === '') {
  //     Alert.alert('Error', 'Smart Switch');
  //   } else if (enterDescription == '') {
  //     Alert.alert('Error', 'Enter Description');
  //   } else if (enterClientWorkerNo === '') {
  //     Alert.alert('Error', 'Enter Client Worker No');
  //   } else {
  //     const Sumbited =
  //       selectNatureofComplaint === 'technical problem'
  //         ? 'Rise your Complaints'
  //         : 'Form Submited succesfully!';
  //     Alert.alert('Success', Sumbited);
  //   }
  // };

  return (
    <View
      style={{
        backgroundColor:"white",
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      <Text
        style={{
          backgroundColor: '#fffefe',
          color: '#0073ff',
          width: '100%',
          fontSize: 20,
          height: 50,
          fontWeight: '600',
        }}>
        Complaint Details
      </Text>
      <View
        style={{
          flexDirection: 'column',
          width: '94%',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <TextInput
          onChangeText={text => setselectNatureofComplaint (text)} 
          
          style={{borderWidth: 1, borderColor: '#0073ff', borderRadius: 10, color:'#0073ff'}}
          placeholder="Select Nature of Complaint"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
        <TextInput
          onChangeText={text => setswitches (text)} 
          style={{borderWidth: 1, borderColor: '#0073ff', borderRadius: 10,color:'#0073ff'}}
          placeholder="Switches"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
        <TextInput 
          onChangeText={text => setselectPriority (text)} 
          style={{borderWidth: 1, borderColor: '#0073ff', borderRadius: 10,color:'#0073ff'}}
          placeholder="Select Priority"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
        <TextInput
          onChangeText={text => setsmartSwitch  (text)}  
          style={{borderWidth: 1, borderColor: '#0073ff', borderRadius: 10,color:'#0073ff'}}
          placeholder="Smart Switch"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
        <TextInput
          onChangeText={text => setenterDescription (text)} 
          style={{borderWidth: 1, borderColor: '#0073ff', borderRadius: 10,color:'#0073ff'}}
          placeholder="Enter Description"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
        <TextInput
          onChangeText={text => setenterClientWorkerNo  (text)} 
          style={{borderWidth: 1, borderColor: '#0073ff', borderRadius: 10,color:'#0073ff'}}
          placeholder="Enter Client Worker No"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />

        <View style={styles.buttonwrapper}>
          <Button title="Submit" onPress={handlePress}  color="#0073ff" />
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
