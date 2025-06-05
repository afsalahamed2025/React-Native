import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BreakdownCards = ({route}) => {
  const {submittedCards = [], editedCard, editIndex} = route.params || {};
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
    /*=====#####==== Key Cards la ironthu  Asyn Storage  reads  ====#####==####======*/
    try {
      const stored = await AsyncStorage.getItem('cards');
      console.log('AsyncStorage-stored data:', stored);
      /*=====########======= Json la ironthu string object change  =====#######======*/
      const parsed = stored ? JSON.parse(stored) : [];
    
      // setcards(parsed);
      // SetfilteredCards(parsed);
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
          updatedCards = [...parsed, ...submittedCards];
        console.log(
          '\n add new cards  old cards and create a new list:',
          updatedCards,
        );
      }
      setcards(updatedCards);
      SetfilteredCards(updatedCards);

      /*=====###==== New Cards State Updates pAndarthukku and Saveing ====###======*/
      await AsyncStorage.setItem('cards', JSON.stringify(updatedCards));
      console.log('\n Data saved AsyncStorage successfully.');
    } catch (error) {
      console.error('Error loading cards:', error);
    }
  };

  /* SEARCHINGG... */
  const handleSearch = () => {
    if (searchText.trim() === '') {
      SetfilteredCards(cards);
    } else {
    /* User oru search text type panrathaa filter */
      const filtered = cards.filter(card => {
        const Searcheing = `
        ${card.ContractName }
        ${card.AssignedTo }
        ${card.Priority }
        ${card.BuildingName }
        ${card.SpotName }
        ${card.LocationName }
        ${card.SpotName }
        ${card.Division }
        ${card.AttendBy }
        ${card.WorkorderType }
        ${card. PreferredTimeTo}
        ${card.PreferredTimeForm }
        ${card.StandbyRemarks}
        ${card.StandbyDateTime}


      `.toLowerCase();
        /* Searcheingla searchText irukka nu check panrathu */
        return Searcheing.includes(searchText.toLowerCase());
      });
      /* display aagum  only search match aana cards mattum. */
      SetfilteredCards(filtered);
    }
  };

  /* handle delete */
  const handleDelete = async index => {
    const updated = [...cards];
    updated.splice(index, 1);

    setcards(updated);
    SetfilteredCards(updated)
    await AsyncStorage.setItem('cards', JSON.stringify(updated));
  };

  return (
    <>

    {/* Complaint Deatils */}
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
      {/* Searchbar */}
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
          placeholderTextColor="#7d7d7f"
          value={searchText}
          onChangeText={text => {
            setSearchText(text);
            // handleSearch()
                      if (text.trim()===''){
                        SetfilteredCards(cards)
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
      {/* Cards */}
      <ScrollView>
        {filteredCards.map((item, index) => (
          <View
            style={{
              width: '94%',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
           
            <View
              // key={item.id}
              style={{
                borderWidth: 1,
                width: '100%',
                backgroundColor: '#ffffff',
                alignItems: 'center',
                padding: 10,
                marginTop:13,
                justifyContent: 'center',
                alignSelf: 'center',
                borderRadius: 10,
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
                  style={{color: '#ff0000', fontWeight: '700', fontSize: 16}}>
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
                  style={{color: '#0073ff', fontWeight: '700', fontSize: 16}}>
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
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
                    style={{fontSize: 15, fontWeight: '700', color: '#000000'}}>
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
                    style={{fontSize:  15, fontWeight: '700', color: '#595a5b'}}>
                    : {item.ContractName}
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
                    style={{fontSize: 15, fontWeight: '700', color: '#000000'}}>
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
                    style={{fontSize:  15, fontWeight: '700', color: '#595a5b'}}>
                    : {item.LocationName}
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
                    style={{fontSize: 15, fontWeight: '700', color: '#000000'}}>
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
                    style={{fontSize:  15, fontWeight: '700', color: '#595a5b'}}>
                    : {item.BuildingName}
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
                  <Text
                    style={{fontSize: 15, fontWeight: '700', color: '#000000'}}>
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
                    style={{fontSize:  15, fontWeight: '700', color: '#595a5b'}}>
                    : {item.SpotName}
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
                    style={{fontSize: 15, fontWeight: '700', color: '#000000'}}>
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
                    style={{fontSize:  15, fontWeight: '700', color: '#595a5b'}}>
                    : {item.AssignedTo}
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
                  <Text
                    style={{fontSize:  15, fontWeight: '700', color: '#000000'}}>
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
                    style={{fontSize: 15, fontWeight: '700', color: '#595a5b'}}>
                    : {item.Priority}
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
                  <Text
                    style={{fontSize:  15, fontWeight: '700', color: '#000000'}}>
                    SpotCode
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
                    style={{fontSize:  15, fontWeight: '700', color: '#595a5b'}}>
                    : {item.SpotCode}
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
                  <Text
                    style={{fontSize:  15, fontWeight: '700', color: '#000000'}}>
                    Division
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
                    style={{fontSize:  15, fontWeight: '700', color: '#595a5b'}}>
                    : {item.Division}
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
                  <Text
                    style={{fontSize:  15, fontWeight: '700', color: '#000000'}}>
                    AttendBy
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
                    style={{fontSize:  15, fontWeight: '700', color: '#595a5b'}}>
                    : {item.AttendBy}
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
                  <Text
                    style={{fontSize:  15, fontWeight: '700', color: '#000000'}}>
                    WorkorderType
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
                    style={{fontSize:  15, fontWeight: '700', color: '#595a5b'}}>
                    : {item.WorkorderType}
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
                  <Text
                    style={{fontSize:  15, fontWeight: '700', color: '#000000'}}>
                    PreferredTimeTo
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
                    style={{fontSize:  15, fontWeight: '700', color: '#595a5b'}}>
                    : {item.PreferredTimeTo}
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
                  <Text
                    style={{fontSize:  15, fontWeight: '700', color: '#000000'}}>
                    PreferredTimeForm
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
                    style={{fontSize:  15, fontWeight: '700', color: '#595a5b'}}>
                    : {item.PreferredTimeForm}
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
                  <Text
                    style={{fontSize:  15, fontWeight: '700', color: '#000000'}}>
                    StandbyRemarks
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
                    style={{fontSize:  15, fontWeight: '700', color: '#595a5b'}}>
                    : {item.StandbyRemarks}
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
                  <Text
                    style={{fontSize:  15, fontWeight: '700', color: '#000000'}}>
                    StandbyDateTime
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
                    style={{fontSize:  15, fontWeight: '700', color: '#595a5b'}}>
                    : {item.StandbyDateTime}
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

const styles = StyleSheet.create({});
