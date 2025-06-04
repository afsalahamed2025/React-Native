import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useEffect } from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useState } from 'react';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const login = ({ route }) => {
  const { submittedCards = [], editedCard, editIndex } = route.params || {};
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [cards, setcards] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredCards, SetfilteredCards] = useState([]);

  /*=====###==== Code Screen Focus Functional Calling New Data Updated ====###======*/
  useEffect(() => {
    loadCards();
  }, [isFocused]);

  const loadCards = async () => {

    const stored = await AsyncStorage.getItem('cards');
    console.log('AsyncStorage-stored data:', stored); 
    const parsed = stored ? JSON.parse(stored) : [];
    setcards(parsed)
    // /*=====#####==== Key Cards la ironthu  Asyn Storage  reads  ====#####==####======*/
    // try {
    //   const stored = await AsyncStorage.getItem('cards');

    //   console.log('AsyncStorage-stored data:', stored);

    //   /*=====########======= Json la ironthu string object change  =====#######======*/
    //   const parsed = stored ? JSON.parse(stored) : [];

    //   console.log('Parsed cards:', parsed);

    //   /*==#####= spread opretor  parsed irokure datava mathammal athe mathiru copy seium ==####==*/
    //   let updatedCards = [...parsed];
    //   console.log('\n Spread Parsed:', updatedCards);

    //   /*=====########======= one card  edit atha atha edathule replaced  =======####====###==*/
    //   if (editedCard !== undefined && editIndex !== undefined) {
    //     updatedCards[editIndex] = editedCard;
    //     console.log('\n one card edit Replaced :', updatedCards);
    //   } else if (submittedCards.length > 0) {
    //     /*=====########===== add new cards old cards and create panni athe  new list ==###=====###====*/
    //     updatedCards = [...submittedCards, ...parsed];
    //     console.log(
    //       '\n add new cards  old cards and create a new list:',
    //       updatedCards,
    //     );
    //   }
    //   setcards(updatedCards);
    //   SetfilteredCards(updatedCards);

    //   /*=====###==== New Cards State Updates pAndarthukku and Saveing ====###======*/
    //   await AsyncStorage.setItem('cards', JSON.stringify(updatedCards));
    //   console.log('\n Data saved AsyncStorage successfully.');
    // } catch (error) {
    //   console.error('Error loading cards:', error);
    // }
  };

  /* SEARCHINGG... */
  const handleSearch = () => {
    if (searchText.trim() === '') {
      SetfilteredCards(cards);
    } else {
      const filtered = cards.filter(card =>
        card.contractName
          .toLowerCase()
          .includes(searchText.toLowerCase()),
      );
      SetfilteredCards(filtered);
    }
  };

  /* handle delete */
  const handleDelete = async index => {
    const updated = [...cards];
    updated.splice(index, 1);
    setcards(updated);
    await AsyncStorage.setItem('cards', JSON.stringify(updated));
  };

  return (
    <>
      <View
        style={{
          width: '100%',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          backgroundColor: '#ffffff',
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
              textDecorationLine: 'underline',
              color: '#0073ff',
              fontSize: 20,
              fontWeight: '600',
            }}>
            Complaint Details
          </Text>
        </View>
      </View>
      <View
        style={{
          width: '95%',

          elevation: 10,
          borderRadius: 20,
          backgroundColor: '#fffcfc',
          height: 40,
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '10%',

            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <EvilIcons name="search" color="#0073ff" size={30} />
        </View>

        <TextInput
          style={{
            width: '70%',
            height: 40,
            color: 'Blue',
            fontSize: 17,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
          }}
          placeholder="Search..."
          placeholderTextColor="blue"
          value={searchText}
          onChangeText={(text) => {
            setSearchText(text);
            if (text.trim() === '') {
              SetfilteredCards(cards)
            } else {
              const filtered = cards.filter(card =>
                card.selectNatureofComplaint?.toLowerCase().includes(text.toLowerCase())
              )
              SetfilteredCards(filtered)
            }
          }}

        />
        <TouchableOpacity
          onPress={handleSearch}
          style={{
            width: '20%',
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Ionicons name="send-sharp" color="#0073ff" size={30} />
        </TouchableOpacity>
      </View>
      <ScrollView>
      {(searchText == "" ? cards : filteredCards).map((item, index) => (
          <View
            style={{
              width: '94%',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <View
              style={{
                width: '100%',
                height: 50,
                backgroundColor: '#ffffff',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
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
                <Text
                  style={{ color: '#ff0000', fontWeight: '700', fontSize: 16 }}>
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
                <Text
                  style={{ color: '#0073ff', fontWeight: '700', fontSize: 16 }}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
            <View
              key={item.id}
              style={{
                borderWidth: 1,
                width: '100%',
                backgroundColor: '#ffffff',
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
                  backgroundColor: '#ffffff',
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
                    style={{ fontSize: 17, fontWeight: '600', color: '#000000' }}>
                    Contract Name
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
                    style={{ fontSize: 17, fontWeight: '500', color: '#595a5b' }}>
                    : {item.contractName}
                  </Text>
                </View>
              </View>
              <View style={{ height: 10 }} />
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
                    style={{ fontSize: 17, fontWeight: '600', color: '#000000' }}>
                    Location Name
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
                    style={{ fontSize: 17, fontWeight: '500', color: '#595a5b' }}>
                    : {item.locationName}
                  </Text>
                </View>
              </View>
              <View style={{ height: 10 }} />
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
                    style={{ fontSize: 17, fontWeight: '600', color: '#000000' }}>
                    Building Name
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
                    style={{ fontSize: 17, fontWeight: '500', color: '#595a5b' }}>
                    : {item.buildingName}
                  </Text>
                </View>
              </View>
              <View style={{ height: 10 }} />
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
                  <Text
                    style={{ fontSize: 17, fontWeight: '600', color: '#000000' }}>
                    Spot Name
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
                    style={{ fontSize: 17, fontWeight: '500', color: '#595a5b' }}>
                    : {item.spotName}
                  </Text>
                </View>
              </View>
              <View style={{ height: 10 }} />
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
                    style={{ fontSize: 17, fontWeight: '600', color: '#000000' }}>
                    Assigned to
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
                    style={{ fontSize: 17, fontWeight: '500', color: '#595a5b' }}>
                    : {item.assignedTo}
                  </Text>
                </View>
              </View>
              <View style={{ height: 10 }} />
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
                  <Text
                    style={{ fontSize: 17, fontWeight: '700', color: '#000000' }}>
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
                    style={{ fontSize: 17, fontWeight: '500', color: '#595a5b' }}>
                    : {item.priority}
                  </Text>
                </View>
              </View>
              <View style={{ height: 10 }} />
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default login;
const styles = StyleSheet.create({});
