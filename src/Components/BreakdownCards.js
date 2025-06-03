import {Text,StyleSheet, View, TouchableOpacity,ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useState} from 'react';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const BreakdownCards = ({route}) => {
  const {submittedCards = [], editedCard, editIndex} = route.params || {};
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [cards, setcards] = useState([]);

  /*=====###==== Code Screen Focus Functional Calling New Data Updated ====###======*/
  useEffect(() => {
    loadCards();
  }, [isFocused]);

  const loadCards = async () => {
    /*=====#####==== Key Cards la ironthu  Asyn Storage  reads  ====#####==####======*/
    try {
      const stored = await AsyncStorage.getItem('cards');

      console.log('AsyncStorage-stored data:', stored);

      /*=====########======= Json la ironthu string object change  =====#######======*/
      const parsed = stored ? JSON.parse(stored) : [];

      console.log('Parsed cards:', parsed);

      /*==#####= spread opretor  parsed irokure datava mathammal athe mathiru copy seium ==####==*/
      let updatedCards = [...parsed];
      console.log('\n Spread Parsed:', updatedCards);

      /*=====########======= one card  edit atha atha edathule replaced  =======####====###==*/
      if (editedCard !== undefined && editIndex !== undefined) {
        updatedCards[editIndex] = editedCard;
        console.log('\n one card edit Replaced :', updatedCards);
      } else if (submittedCards.length > 0) {
        /*=====########===== add new cards old cards and create panni athe  new list ==###=====###====*/
        updatedCards = [...submittedCards,...parsed];
        console.log(
          '\n add new cards  old cards and create a new list:',updatedCards);
      }

      /*=====###==== New Cards State Updates pAndarthukku and Saveing ====###======*/
      setcards(updatedCards);
      await AsyncStorage.setItem('cards', JSON.stringify(updatedCards));
      console.log('\n Data saved AsyncStorage successfully.');
    } catch (error) {
      console.error('Error loading cards:', error);
    }
  };

  const handleDelete = async index => {
    const updated = [...cards];
    updated.splice(index, 1);
    setcards(updated);
    await AsyncStorage.setItem('cards', JSON.stringify(updated));
  };

  return (
    <>
    <ScrollView>
      {cards.map((item, index) => (
        
        <View
          style={{width: '94%', justifyContent: 'center', alignSelf: 'center'}}>
          <View
            style={{
              width: '100%',
              height: 50,

              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '50%',
                height: 30,
                
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  textDecorationLine:'underline',
                  color: '#0073ff',
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                Complaint Details
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => handleDelete(index)}
              style={{
                width: '25%',
                height: 30,
                backgroundColor: '#f5e4e4',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#ff0000', fontWeight: '700', fontSize: 16}}>
                Delete
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Break', {
                  editData: item,
                  editIndex: index,
                });
              }}
              style={{
                width: '25%',
                height: 30,
                backgroundColor: '#e0eef7',
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#0073ff', fontWeight: '700', fontSize: 16}}>
                Edit
              </Text>
            </TouchableOpacity>
          </View>
          <View
            key={item.id}
            style={{
              borderWidth: 1,
              width: '100%',
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
                <Text
                  style={{fontSize: 17, fontWeight: '600', color: '#000000'}}>
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
                <Text
                  style={{fontSize: 17, fontWeight: '600', color: '#0073ff'}}>
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
                <Text
                  style={{fontSize: 17, fontWeight: '600', color: '#000000'}}>
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
                <Text
                  style={{fontSize: 17, fontWeight: '600', color: '#0073ff'}}>
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
                <Text
                  style={{fontSize: 17, fontWeight: '600', color: '#000000'}}>
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
                <Text
                  style={{fontSize: 17, fontWeight: '600', color: '#0073ff'}}>
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
                <MaterialIcons name="smart-button" size={30} color="#0073ff" />
              </View>
              <View
                style={{
                  width: '41%',
                  height: 20,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: '600', color: '#000000'}}>
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
                <Text
                  style={{fontSize: 17, fontWeight: '600', color: '#0073ff'}}>
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
                <Text
                  style={{fontSize: 17, fontWeight: '600', color: '#000000'}}>
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
                <Text
                  style={{fontSize: 17, fontWeight: '600', color: '#0073ff'}}>
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
                <Icon3 name="format-list-numbered" size={30} color="#0073ff" />
              </View>
              <View
                style={{
                  width: '41%',
                  height: 20,
                  justifyContent: 'center',
                  alignSelf: 'center',
                }}>
                <Text
                  style={{fontSize: 17, fontWeight: '700', color: '#000000'}}>
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
                <Text
                  style={{fontSize: 17, fontWeight: '600', color: '#0073ff'}}>
                  : {item.enterClientWorkerNo}
                </Text>
              </View>
            </View>
            <View style={{height: 10}} />
          </View>
        </View>
      ))}
      </ScrollView>
    </>
  );
};

export default BreakdownCards;
const styles = StyleSheet.create({})
