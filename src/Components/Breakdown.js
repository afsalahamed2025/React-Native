import {StyleSheet, Text, View, Button, Alert, ScrollView} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native-gesture-handler';

import {useNavigation} from '@react-navigation/native';

const Break = ({route}) => {
  // const [submittedCards, setSubmittedCards] = useState([]);
const { editData, editIndex } = route.params || {};

useEffect(() => {
  if (editData) {
    setselectNatureofComplaint(editData.selectNatureofComplaint || '');
    setswitches(editData.switches || '');
    setselectPriority(editData.selectPriority || '');
    setsmartSwitch(editData.smartSwitch || '');
    setenterDescription(editData.enterDescription || '');
    setenterClientWorkerNo(editData.enterClientWorkerNo || '');
  }
}, [editData]);
 const navigation = useNavigation();
  const [selectNatureofComplaint, setselectNatureofComplaint] = useState('');
  const [switches, setswitches] = useState('');
  const [selectPriority, setselectPriority] = useState('');
  const [smartSwitch, setsmartSwitch] = useState('');
  const [enterDescription, setenterDescription] = useState('');
  const [enterClientWorkerNo, setenterClientWorkerNo] = useState('');

  const handlePress = () => {
    if (selectNatureofComplaint === '') {
      Alert.alert('Error', 'Please fill in all the fields ');
    } else if (switches == '') {
      Alert.alert('Error', 'Switches');
    } else if (selectPriority === '') {
      Alert.alert('Error', 'Select Priority');
    } else if (smartSwitch == '') {
      Alert.alert('Error', 'Enter Description');
    } else if (enterDescription === '') {
      Alert.alert('Error', 'Enter Client Worker No');
    } else if (enterClientWorkerNo == '') {
      Alert.alert('Error', 'Enter Client Worker No');
    } else {
      const newCard = {
        selectNatureofComplaint,
          id: Date.now().toString(),  
        switches,
        selectPriority,
        smartSwitch,
        enterDescription,
        enterClientWorkerNo,
      };

      const Submitedddd =
        'Successfully submitted';
      Alert.alert('Success', Submitedddd, [
        {
          text: 'OK',
          onPress: () => {
        navigation.navigate('Breakdown', editData
  ? { editedCard: newCard, editIndex }
  : { submittedCards: [newCard] }
);
          },
        },
      ]);
      setselectNatureofComplaint('');
      setswitches('');
      setselectPriority('');
      setsmartSwitch('');
      setenterDescription('');
      setenterClientWorkerNo('');

      // setSubmittedCards(prev => [newCard, ...prev]);
    }
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        // flex: 1,
        padding: 5,
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
          // flexShrink: 0,
        }}>
        <TextInput
          onChangeText={text => setselectNatureofComplaint(text)}
          value={selectNatureofComplaint}
          style={{
            borderWidth: 1,
            borderColor: '#0073ff',
            borderRadius: 10,
            color: '#0073ff',
          }}
          placeholder="Select Nature of Complaint"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
        <TextInput
          onChangeText={text => setswitches(text)}
          value={switches}
          style={{
            borderWidth: 1,
            borderColor: '#0073ff',
            borderRadius: 10,
            color: '#0073ff',
          }}
          placeholder="Switches"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
        <TextInput
          onChangeText={text => setselectPriority(text)}
          value={selectPriority}
          style={{
            borderWidth: 1,
            borderColor: '#0073ff',
            borderRadius: 10,
            color: '#0073ff',
          }}
          placeholder="Select Priority"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
        <TextInput
          onChangeText={text => setsmartSwitch(text)}
          value={smartSwitch}
          style={{
            borderWidth: 1,
            borderColor: '#0073ff',
            borderRadius: 10,
            color: '#0073ff',
          }}
          placeholder="Smart Switch"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
        <TextInput
          onChangeText={text => setenterDescription(text)}
          value={enterDescription}
          style={{
            borderWidth: 1,
            borderColor: '#0073ff',
            borderRadius: 10,
            color: '#0073ff',
          }}
          placeholder="Enter Description"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
        <TextInput
          onChangeText={text => setenterClientWorkerNo(text)}
          value={enterClientWorkerNo}
          style={{
            borderWidth: 1,
            borderColor: '#0073ff',
            borderRadius: 10,
            color: '#0073ff',
          }}
          placeholder="Enter Client Worker No"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />

        <View style={styles.buttonwrapper}>
          <Button title="Submit" onPress={handlePress} color="#0073ff" />
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
