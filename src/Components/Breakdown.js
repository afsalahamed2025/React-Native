import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const Break = ({route}) => {
  // const [submittedCards, setSubmittedCards] = useState([]);
  const {editData, editIndex} = route.params || {};
  const navigation = useNavigation();

  const [ContractName, setContractName] = useState('');
  const [LocationName, setLocationName] = useState('');
  const [BuildingName, setBuildingName] = useState('');
  const [SpotName, setSpotName] = useState('');
  const [AssignedTo, setAssignedTo] = useState('');
  const [Priority, setPriority] = useState('');

  const [SpotCode, setSpotCode] = useState('');
  const [Division, setDivision] = useState('');
  const [AttendBy, setAttendBy] = useState('');
  const [WorkorderType, setWorkorderType] = useState('');
  const [PreferredTimeTo, setPreferredTimeTo] = useState('');
  const [PreferredTimeForm, setPreferredTimeForm] = useState('');
  const [StandbyRemarks, setStandbyRemarks] = useState('');
  const [StandbyDateTime, setStandbyDateTime] = useState('');

  useEffect(() => {
    if (editData) {
      setContractName(editData.ContractName || '');
      setLocationName(editData.LocationName || '');
      setBuildingName(editData.BuildingName || '');
      setSpotName(editData.SpotName || '');
      setAssignedTo(editData.AssignedTo || '');
      setPriority(editData.Priority || '');
      setSpotCode(editData.SpotCode || '');
      setDivision(editData.Division || '');
      setAttendBy(editData.AttendBy || '');
      setWorkorderType(editData.WorkorderType || '');
      setPreferredTimeTo(editData.PreferredTimeTo || '');
      setPreferredTimeForm(editData.PreferredTimeForm || '');
      setStandbyRemarks(editData.StandbyRemarks || '');
      setStandbyDateTime(editData.StandbyDateTime || '');
      setPriority(editData.Priority || '');
      setPriority(editData.Priority || '');
      
    }
  }, [editData]);

  const handlePress = async () => {
    if (ContractName === '') {
      Alert.alert('Error', 'Please fill in all the fields ');
    } else if (LocationName == '') {
      Alert.alert('Error', 'Please enter LocationName');
    } else if (BuildingName === '') {
      Alert.alert('Error', 'Please enter BuildingName');
    } else if (SpotName == '') {
      Alert.alert('Error', 'Please enter SpotName');
    } else if (AssignedTo === '') {
      Alert.alert('Error', 'Please enter AssignedTo');
    } else if (Priority == '') {
      Alert.alert('Error', 'Please enter Priority');
    }
    else if (SpotCode == '') {
      Alert.alert('Error', 'Please enter SpotCode');
    }
    else if (Division == '') {
      Alert.alert('Error', 'Please enter Division');
    }
    else if (AttendBy == '') {
      Alert.alert('Error', 'Please enter AttendBy');
    }
    else if (WorkorderType == '') {
      Alert.alert('Error', 'Please enter WorkorderType');
    }
    else if (PreferredTimeTo == '') {
      Alert.alert('Error', 'Please enter PreferredTimeTo');
    }
    else if (PreferredTimeForm == '') {
      Alert.alert('Error', 'Please enter PreferredTimeForm');
    }
    else if (StandbyRemarks == '') {
      Alert.alert('Error', 'Please enter StandbyRemarks');
    }
    else if (StandbyDateTime == '') {
      Alert.alert('Error', ' Please enter StandbyDateTime');
    }

    else {
      const newCard = {
        ContractName,
        id: Date.now().toString(),
        LocationName,
        BuildingName,
        SpotName,
        AssignedTo,
        Priority,
        SpotCode,
        Division,
        AttendBy,
        WorkorderType,
        PreferredTimeTo,
        PreferredTimeForm,
        StandbyRemarks,
        StandbyDateTime,

      };
      /*============ cards stored data from asyncstorage  key ==========  */
      try {
        const stored = await AsyncStorage.getItem('cards');
        /*=========inthule value json format la   irokku atha normal array va convert pannathu illana empty arrat va initial =======  */
        let cards = stored ? JSON.parse(stored) : [];
        /*============ If editing replace the old card at editIndex with newCard. ==========  */
        if (editData && editIndex !== undefined) {
          cards[editIndex] = newCard;
        } else {
        /*============ edit illana  new data va initialze add pannthu push adding ==========  */
          cards.push(newCard);
        }
        await AsyncStorage.setItem('cards', JSON.stringify(cards));
        Alert.alert('Success', 'Successfully submitted', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Breakdown'),
          },
        ]);
      } catch (error) {
        console.log('Error Saving Data', error);
      }

      //       const Submitedddd =
      //         'Successfully submitted';
      //       Alert.alert('Success', Submitedddd, [
      //         {
      //           text: 'OK',
      //           onPress: () => {
      //         navigation.navigate('Breakdown', editData
      //   ? { editedCard: newCard, editIndex }
      //   : { submittedCards: [newCard] }
      // );
      //           },
      //         },
      //       ]);
      setContractName('');
      setLocationName('');
      setBuildingName('');
      setSpotName('');
      setAssignedTo('');
      setPriority('');
      setSpotCode('');
      setDivision('');
      setAttendBy('');
      setWorkorderType('');
      setPreferredTimeTo('');
      setPreferredTimeForm('');
      setStandbyRemarks('');
      setStandbyDateTime('');

      

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
<ScrollView>
      <View
        style={{
          flexDirection: 'column',
          width: '94%',
         
          justifyContent: 'center',
          alignSelf: 'center',
          // flexShrink: 0,
        }}>
        <TextInput
          onChangeText={text => setContractName(text)}
          value={ContractName}
          style={{
            borderWidth: 1,
            borderColor: '#0073ff',
            borderRadius: 10,
            color: '#0073ff',
          }}
          placeholder="ContractName"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
        <TextInput
          onChangeText={text => setLocationName(text)}
          value={LocationName}
          style={{
            borderWidth: 1,
            borderColor: '#0073ff',
            borderRadius: 10,
            color: '#0073ff',
          }}
          placeholder="LocationName"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
        <TextInput
          onChangeText={text => setBuildingName(text)}
          value={BuildingName}
          style={{
            borderWidth: 1,
            borderColor: '#0073ff',
            borderRadius: 10,
            color: '#0073ff',
          }}
          placeholder="BuildingName"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
        <TextInput
          onChangeText={text => setSpotName(text)}
          value={SpotName}
          style={{
            borderWidth: 1,
            borderColor: '#0073ff',
            borderRadius: 10,
            color: '#0073ff',
          }}
          placeholder="SpotName"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
        <TextInput
          onChangeText={text => setAssignedTo(text)}
          value={AssignedTo}
          style={{
            borderWidth: 1,
            borderColor: '#0073ff',
            borderRadius: 10,
            color: '#0073ff',
          }}
          placeholder="AssignedTo"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />

        {/*  */}
        <TextInput
          onChangeText={text => setPriority(text)}
          value={Priority}
          style={{
            borderWidth: 1,
            borderColor: '#0073ff',
            borderRadius: 10,
            color: '#0073ff',
          }}
          placeholder="Priority"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
          
          <TextInput
          onChangeText={text => setSpotCode(text)}
          value={SpotCode}
          style={{
            borderWidth: 1,
            borderColor: '#0073ff',
            borderRadius: 10,
            color: '#0073ff',
          }}
          placeholder="SpotCode"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
            <TextInput
          onChangeText={text => setDivision(text)}
          value={Division}
          style={{
            borderWidth: 1,
            borderColor: '#0073ff',
            borderRadius: 10,
            color: '#0073ff',
          }}
          placeholder="Division"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
            <TextInput
          onChangeText={text => setAttendBy(text)}
          value={AttendBy}
          style={{
            borderWidth: 1,
            borderColor: '#0073ff',
            borderRadius: 10,
            color: '#0073ff',
          }}
          placeholder="AttendBy"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
            <TextInput
          onChangeText={text => setWorkorderType(text)}
          value={WorkorderType}
          style={{
            borderWidth: 1,
            borderColor: '#0073ff',
            borderRadius: 10,
            color: '#0073ff',
          }}
          placeholder="WorkorderType"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
            <TextInput
          onChangeText={text => setPreferredTimeTo(text)}
          value={PreferredTimeTo}
          style={{
            borderWidth: 1,
            borderColor: '#0073ff',
            borderRadius: 10,
            color: '#0073ff',
          }}
          placeholder="PreferredTimeTo"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
            <TextInput
          onChangeText={text => setPreferredTimeForm(text)}
          value={PreferredTimeForm}
          style={{
            borderWidth: 1,
            borderColor: '#0073ff',
            borderRadius: 10,
            color: '#0073ff',
          }}
          placeholder="PreferredTimeForm"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
            <TextInput
          onChangeText={text => setStandbyRemarks(text)}
          value={StandbyRemarks}
          style={{
            borderWidth: 1,
            borderColor: '#0073ff',
            borderRadius: 10,
            color: '#0073ff',
          }}
          placeholder="StandbyRemarks"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />
            <TextInput
          onChangeText={text => setStandbyDateTime(text)}
          value={StandbyDateTime}
          style={{
            borderWidth: 1,
            borderColor: '#0073ff',
            borderRadius: 10,
            color: '#0073ff',
          }}
          placeholder="StandbyDateTime"
          placeholderTextColor="#000000"></TextInput>
        <View style={{height: 20}} />

        <View style={styles.buttonwrapper}>
          <Button title="Submit" onPress={handlePress} color="#0073ff" />
        </View>
      </View>
      </ScrollView>
    </View>
  );
};
export default Break;

const styles = StyleSheet.create({
  buttonwrapper: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    height:80,
    width: '100%',
  },
});
