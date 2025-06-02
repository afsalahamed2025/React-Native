import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import { useState } from 'react';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const BreakdownCards = ({route}) => {
  
const {submittedCards=[],editedCard, editIndex}=route.params || {}
const navigation = useNavigation();

const [cards, setcards] =useState(()=>{
const tempcards =[...submittedCards];
  if(editedCard!== undefined && editIndex !== undefined){
    tempcards[editIndex] =editedCard
  }
  return tempcards  
})


const handleDelete =indexToDelete=>{
  const updated = cards.filter((_,i)=> i !== indexToDelete)
  setcards(updated)
}


  

  return (
    <>
    {cards.map((item,index) => (
    <View style={{width: '94%', justifyContent: 'center', alignSelf: 'center'}}>
      
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
                  color: '#0073ff',
                  fontSize: 20,
                  fontWeight: '600',
                }}>
                Complaint Details
              </Text>
            </View>
            <TouchableOpacity    onPress={() => handleDelete(index)}
              style={{
                width: '25%',
                height: 30,
                backgroundColor: '#e8e3e3',
                borderRadius:20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#ff0000', fontWeight: '700',fontSize:16,}}>Delete</Text>
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
                 backgroundColor: '#e8e3e3',
                borderRadius:20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: '#0073ff', fontWeight: '700', fontSize:16,}}>Edit</Text>
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
              <Text style={{fontSize: 17, fontWeight: '600', color: '#000000'}}>
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
              <Text style={{fontSize: 17, fontWeight: '600', color: '#0073ff',}}>
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
              <Text style={{fontSize: 17, fontWeight: '600', color: '#000000'}}>
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
              <Text style={{fontSize: 17, fontWeight: '600', color: '#0073ff'}}>
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
              <Text style={{fontSize: 17, fontWeight: '600', color: '#000000'}}>
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
              <Text style={{fontSize: 17, fontWeight: '600', color: '#0073ff'}}>
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
              <Text style={{fontSize: 17, fontWeight: '600', color: '#000000'}}>
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
              <Text style={{fontSize: 17, fontWeight: '600', color: '#0073ff'}}>
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
              <Text style={{fontSize: 16, fontWeight: '600', color: '#000000'}}>
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
              <Text style={{fontSize: 17, fontWeight: '500', color: '#0073ff'}}>
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
              <Text style={{fontSize: 17, fontWeight: '500', color: '#000000'}}>
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
              <Text style={{fontSize: 16, fontWeight: '600', color: '#0073ff'}}>
                : {item.enterClientWorkerNo}
              </Text>
            </View>
          </View>
          <View style={{height: 10}} />
         
        </View>
      
    </View>
    ))}
    </>
  );
};

export default BreakdownCards;

const styles = StyleSheet.create({});
