import {StyleSheet, Text, View, Button, Alert, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Break = () => {
  const [selectNatureofComplaint, setselectNatureofComplaint] = useState('');
  const [switches, setswitches] = useState('');
  const [selectPriority, setselectPriority] = useState('');
  const [smartSwitch, setsmartSwitch] = useState('');
  const [enterDescription, setenterDescription] = useState('');
  const [enterClientWorkerNo, setenterClientWorkerNo] = useState('');

  const [submittedCards, setSubmittedCards] = useState([]);

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
      const Submitedddd =
        selectNatureofComplaint == 'tech' ? 'Rise complaint' : 'Successfully';
      Alert.alert('Success', Submitedddd);

      const newCard = {
        selectNatureofComplaint,
        switches,
        selectPriority,
        smartSwitch,
        enterDescription,
        enterClientWorkerNo,
      };
      setSubmittedCards(prev => [newCard, ...prev]);

      setselectNatureofComplaint('');
      setswitches('');
      setselectPriority('');
      setsmartSwitch('');
      setenterDescription('');
      setenterClientWorkerNo('');
    }
  };

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
        backgroundColor: 'white',
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        flex: 1,
        padding: 10,
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
          flexShrink: 0,
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

      <View style={{flex: 1, width: '94%', alignSelf: 'center', marginTop: 20}}>
        <ScrollView>
          {submittedCards.map(item => (
            <View
              style={{
                borderWidth: 1,
                width: '100%',
                height: 220,
                alignItems: 'center',
                padding: 10,
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 10,
              }}>
              <View
                style={{
                  width: '100%',
                  height: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    width: '10%',
                    height: 28,

                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Icon3
                    name="file-document-edit-outline"
                    size={30}
                    color="#0073ff"
                  />
                </View>

                <View
                  style={{
                    width: '41%',
                    height: 20,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text style={{fontSize: 17, fontWeight: '600'}}>
                    Nature of Complaint
                  </Text>
                </View>
                <View
                  style={{
                    width: '41%',
                    height: 20,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text style={{fontSize: 17, fontWeight: '600'}}>
                    : {item.selectNatureofComplaint}
                  </Text>
                </View>
              </View>
              <View style={{height: 10}} />
              <View
                style={{
                  width: '100%',
                  height: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    width: '10%',
                    height: 28,

                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Icon3 name="switch" size={30} color="#0073ff" />
                </View>
                <View
                  style={{
                    width: '41%',
                    height: 20,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text style={{fontSize: 17, fontWeight: '600'}}>
                    Switches
                  </Text>
                </View>
                <View
                  style={{
                    width: '41%',
                    height: 20,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text style={{fontSize: 17, fontWeight: '600'}}>
                    : {item.switches}
                  </Text>
                </View>
              </View>
              <View style={{height: 10}} />
              <View
                style={{
                  width: '100%',
                  height: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    width: '10%',
                    height: 28,

                    justifyContent: 'center',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Icon3 name="priority-high" size={30} color="#0073ff" />
                </View>
                <View
                  style={{
                    width: '41%',
                    height: 20,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text style={{fontSize: 17, fontWeight: '600'}}>
                    Priority
                  </Text>
                </View>
                <View
                  style={{
                    width: '41%',
                    height: 20,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text style={{fontSize: 17, fontWeight: '600'}}>
                    : {item.selectPriority}
                  </Text>
                </View>
              </View>
              <View style={{height: 10}} />
              <View
                style={{
                  width: '100%',
                  height: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    width: '10%',
                    height: 28,

                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}>
                  <MaterialIcons
                    name="smart-button"
                    size={30}
                    color="#0073ff"
                  />
                </View>
                <View
                  style={{
                    width: '41%',
                    height: 20,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text style={{fontSize: 17, fontWeight: '600'}}>
                    Smart Switch
                  </Text>
                </View>
                <View
                  style={{
                    width: '41%',
                    height: 20,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text style={{fontSize: 17, fontWeight: '600'}}>
                    : {item.smartSwitch}
                  </Text>
                </View>
              </View>
              <View style={{height: 10}} />
              <View
                style={{
                  width: '100%',
                  height: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    width: '10%',
                    height: 28,

                    justifyContent: 'center',
                    alignSelf: 'center',
                    alignItems: 'center',
                  }}>
                  <MaterialIcons name="description" size={30} color="#0073ff" />
                </View>
                <View
                  style={{
                    width: '41%',
                    height: 20,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text style={{fontSize: 16, fontWeight: '600'}}>
                    Description
                  </Text>
                </View>
                <View
                  style={{
                    width: '41%',
                    height: 20,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text style={{fontSize: 17, fontWeight: '500'}}>
                    : {item.enterDescription}
                  </Text>
                </View>
              </View>
              <View style={{height: 10}} />
              <View
                style={{
                  width: '100%',
                  height: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    width: '10%',
                    height: 28,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <Icon3
                    name="format-list-numbered"
                    size={30}
                    color="#0073ff"
                  />
                </View>
                <View
                  style={{
                    width: '41%',
                    height: 20,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text style={{fontSize: 17, fontWeight: '500'}}>
                    Client Worker No
                  </Text>
                </View>
                <View
                  style={{
                    width: '41%',
                    height: 20,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text style={{fontSize: 16, fontWeight: '600'}}>
                    : {item.enterClientWorkerNo}
                  </Text>
                </View>
              </View>
              <View style={{height: 10}} />

              {/* <Text style={{color: '#0073ff', fontWeight: '800', marginBottom: 5,textDecorationLine:'underline'}}>Submitted:</Text>
              <Text>Nature of Complaint: {item.selectNatureofComplaint}</Text>
              <Text>Switches: {item.style=switches}</Text>
              <Text>Priority: {item.selectPriority}</Text>
              <Text>Smart Switch: {item.smartSwitch}</Text>
              <Text>Description: {item.enterDescription}</Text>
              <Text>Client Worker No: {item.enterClientWorkerNo}</Text> */}
            </View>
          ))}
        </ScrollView>
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
