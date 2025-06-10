import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  FlatList,
  Button,
  Alert
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';


const RegisterTicket = () => {
  const [Contract, setContract] = useState('');
  const [Contractidpk, setContractidpk] = useState('');
  const [Contractbtmsheet, setContractbtmsheet] = useState(false);
  const [Contract_data, setContract_data] = useState([]);

  const [Localitybtmsheet, setLocalitybtmsheet] = useState(false);
  const [Locality, setLocality] = useState('');
  const [LocalityData, setLocalityData] = useState([]);
  const [Localityidpk,setLocalityidpk]=useState('')

   const [Buildingbtmsheet,setBuildingbtmsheet]=useState(false)
  const [Building,setBuilding] = useState("")
  const [BuildingData,setBuildingData]=useState([])
  const [Buildingidpk,setBuildingidpk]=useState('')
  
  
   const [Floorbtmsheet,setFloorbtmsheet]=useState(false)
    const [Floor,setFloor] = useState("")
    const [FloorData,setFloorData]=useState([])
    const [Flooridpk,setFlooridpk]=useState([])

    const [Spotbtmsheet,setSpotbtmsheet]=useState(false)
    const [Spot,setSpot] = useState("")
    const [SpotData,setSpotData] = useState([]) 
    const [Spotidpk,setSpotidpk] = useState([])


    const [Servicebtmsheet,setServicebtmsheet]=useState(false)
    const [Service,setService] = useState("")
    const [ServiceData,setServiceData] = useState([]) 
    const [Serviceidpk,setServiceidpk]=useState([])


    const handlePress = async ()=>{
      if  (Contract == ''){
        Alert.alert('Error','Please fill in all the fields')
      }
      else if (Locality == ''){
        Alert.alert('Error','Select Contract')
      }
       else if (Building == ''){
        Alert.alert('Error','Select Building')
      }
       else if (Floor == ''){
        Alert.alert('Error','Select Floor')
      }
       else if (Spot == ''){
        Alert.alert('Error','Select Spot')
      }
       else if (Service == ''){
        Alert.alert('Error','Select Service')
      }
 else {
    const submittedMsg = 'Successfully submitted';
    Alert.alert('Success', submittedMsg);
    
    // Add your submission logic here
    // await submitData();
  }
    }

/* Contract */
  const Saved_Data = async () => {
    try {
      const response = await fetch(
        'http://13.127.67.252:5040/ReachComplaintRegProcess/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            data: {
              p1: null,
              p2: '1104',
              p3: null,
              p4: null,
              p5: null,
              p6: '',
              p7: null,
              p8: null,
              p9: null,
              p10: null,
              PageIndex_int: 1,
              PageSize_int: 10,
              Type_varchar: 'ContractIDPK',
              UserGroupKey: '2112',
              UserAccessKey: '124',
            },
          }),
        },
      );

      const result = await response.json(); //Response JSON format-la edukkurathu
      console.log('API Response:', result);

      const Data = result?.Output?.data ?? [];
      const Status = result?.Output?.status ?? [];
      console.log(Data, 'Received Data');
      console.log(Status, 'Status');
      if (Status?.code == '200') {
        setContract_data(Data);
      }
    } catch (error) {
      console.log('API Error:', error);
      Alert.alert('Error', 'Something went Wrong');
    }
  };

  /* Locality_API */
  const Locality_API = async () => {
    const url = 'http://13.127.67.252:5040/ReachComplaintRegProcess/';
    const Params = {
      data: {
        p1: null,
        p2: '1104',
        p3: Contractidpk /* Pass */,
        p4: null,
        p5: null,
        p6: '',
        p7: null,
        p8: null,
        p9: null,
        p10: null,
        PageIndex_int: 1,
        PageSize_int: 10,
        Type_varchar: 'LocalityIDPK',
        UserGroupKey: '2112',
        UserAccessKey: '124',
      },
    };
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Params),
      });
      console.log({url, Params});
      const result = await response.json();
      console.log('API LA RESPONSE VARATHA ILLAYANU PAKURATHU:', result);

      /* result la poi Output nu check pannura. Athu kulla data irundha adha eduthu Data la poduM.
Illana default a [] empty array podu */
      //data la API la irukkura records, list, array of items irukkum.
      const Data = result?.Output?.data ?? [];
      console.log(Data, 'Received Data');
      //Output kulla irukkura status object va edukkuM
      const Status = result?.Output?.status ?? [];
      console.log(Status, 'Status');

      /*Status.code 200 ah irundha,?
entha API la irundhu vandha Data ah
Locality state kulla save pannudhu */
      if (Status?.code == '200') {
        setLocalityData(Data);
      }
    } catch (error) {
      console.log('Api Error', error);
    }
  };
/* Building_API */
  const Building_API = async () =>{
    const url = 'http://13.127.67.252:5040/ReachComplaintRegProcess/'
    const Params = {
      data:{
            p1: null,
            p2: "1104",
            p3: Contractidpk,
            p4: Localityidpk,
            p5: null,
            p6: "",
            p7: null,
            p8: null,
            p9: null,
            p10: null,
            PageIndex_int: 1,
            PageSize_int: 10,
            Type_varchar: "BuildingIDPK",
            UserGroupKey: "2112",
            UserAccessKey: "124"
      }
    }
    try{
      const response = await fetch (url,{
        method : 'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(Params),
      });
      console.log({url,Params})
      const result = await response.json();
      console.log('API LA RESPONSE :',result)


      const Data = result?.Output?.data ?? [];
      console.log(Data,'Received Data')

      const Status  =result?.Output?.status ?? [];
      console.log(Status,'Status')

      if (Status?.code == '200'){
        setBuildingData(Data);

      }

    }
    catch(error){
      console.log('Api Error',error)
    }
  }
/* FloorData */
  const Floor_API = async () => {
    const url = 'http://13.127.67.252:5040/ReachComplaintRegProcess/';
    const Params  = {
      data: {
            p1: null,
            p2: "1104",
            p3: Contractidpk,
            p4: Localityidpk,
            p5: Buildingidpk,
            p6: "",
            p7: null,
            p8: null,
            p9: null,
            p10: null,
            PageIndex_int: 1,
            PageSize_int: 10,
            Type_varchar: "FloorIDPK",
            UserGroupKey: "2112",
            UserAccessKey: "124"
      },
    };
    try {
      const response = await fetch (url,{
        method : 'POST',
        headers : {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(Params)
      })
      console.log({url,Params})
      const result = await response.json();
      console.log('Api RESPONSE :',result)


        const Data = result?.Output?.data ?? [];
        console.log(Data,'Received Data')

        const Status  = result?.Output?.status ?? []
        console.log(Status,'status')


        if (Status?.code == '200'){
          setFloorData(Data);
        }

    }catch (error){
      console.log('Api Error',error)
    }
  }
 /* SPOT DATA */
     const Spot_API = async () =>{
    const url = 'http://13.127.67.252:5040/ReachComplaintRegProcess/'
    const Params = {
      data: {
            p1: null,
            p2: "1104",
            p3: Contractidpk,
            p4: Localityidpk,
            p5: Buildingidpk,
            p6: "",
            p7: null,
            p8: null,
            p9: null,
            p10: null,
            PageIndex_int: 1,
            PageSize_int: 10,
            Type_varchar: "SpotIDPK",
            UserGroupKey: "2112",
            UserAccessKey: "124"
      },
    };
    try{
      const response = await fetch (url,{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',

        },
        body:JSON.stringify(Params),

      })
      console.log({url,Params})
      const result = await response.json();
      console.log('Api check response:',result)

      const Data = result?.Output?.data ?? []
      console.log(Data,'Received Data')

      const Status = result?.Output?.status ?? []
      console.log(Status,'Status')

      if (Status?.code == '200'){
        setSpotData(Data)
        console.log("Data to set in Spotdata",Data)
      }

    }
    catch (error){
      console.log('Api Error',error)
    }
   }

   /* SERVICE DATA */
     const Service_API = async () =>{
    const url = 'http://13.127.67.252:5040/ReachComplaintRegProcess/'
    const Params = {
      data: {
            p1: null,
            p2: "1117",
            p3: Contractidpk,
            p4: Localityidpk,
            p5: Buildingidpk,
            p6: "",
            p7: null,
            p8: null,
            p9: null,
            p10: null,
            PageIndex_int: 1,
            PageSize_int: 10,
            Type_varchar: "ServiceTypeIDPK",
            UserGroupKey: "2112",
            UserAccessKey: "124"
      },
    };
    try{
      const response = await fetch (url,{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',

        },
        body:JSON.stringify(Params),

      })
      console.log({url,Params})
      const result = await response.json();
      console.log('Api check response:',result)

      const Data = result?.Output?.data ?? []
      console.log(Data,'Received Data')

      const Status = result?.Output?.status ?? []
      console.log(Status,'Status')

      if (Status?.code == '200'){
        setServiceData(Data)
        console.log("Data to set in Spotdata",Data)
      }

    }
    catch (error){
      console.log('Api Error',error)
    }
   }




  return (
    <View
      style={{
        // backgroundColor: '#ffffff',
        padding: 10,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        // height:'200
      }}>
<View style={{}}>

</View>
        <View style={{width:'100%',height:50,alignSelf:'center',alignSelf:'center',justifyContent:'center',}}>
          <View style={{width:'50%',height:40,flexDirection:'row' ,alignItems:'center',justifyContent:'flex-start',}}>
            <Text style={{fontSize:16,fontWeight:'500',color:'#0091ff'}}>Complainer Details</Text>
          </View>
        </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          // backgroundColor:'#ffffff'
        }}>
        <TouchableOpacity
          onPress={() => {
            setContractbtmsheet(true);
            Saved_Data();
          }}
          style={{
            borderColor: '#0073ff',
            borderRadius: 7,
            borderWidth: 1,
            padding: 5,
            flexDirection: 'row',
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
               <Text
              style={{
                alignSelf: 'flex-start',
                color: Contract ? 'black' : 'gray',
              }}>
              {Contract ? Contract : 'Select Contract'}
            </Text>
          </View>
          <View
            style={{
              width: '10%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign
              name={Contractbtmsheet ? 'caretup' : 'caretdown'}
              size={16}
              style={{color: 'black', marginRight: 5, alignSelf: 'center'}}
            />
          </View>
        </TouchableOpacity>
        <View style={{height: 20}} />
        <TouchableOpacity
          onPress={() => {
            setLocalitybtmsheet(true), Locality_API();
          }}
          style={{
            borderColor: '#0073ff',
            borderRadius: 7,
            borderWidth: 1,
            padding: 5,
            flexDirection: 'row',
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'flex-start',
                color: Locality ? 'black' : 'gray',
              }}>
              {Locality ? Locality : 'Select Locality'}
            </Text>
          </View>
          <View
            style={{
              width: '10%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign
              name={Localitybtmsheet ? 'caretup' : 'caretdown'}
              size={16}
              style={{color: 'black', marginRight: 5, alignSelf: 'center'}}
            />
          </View>
        </TouchableOpacity>
        <View style={{height: 20}} />
         <TouchableOpacity
          onPress={() => {
            setBuildingbtmsheet(true), Building_API();
          }}
          style={{
            borderColor: '#0073ff',
            borderRadius: 7,
            borderWidth: 1,
            padding: 5,
            flexDirection: 'row',
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'flex-start',
                color: Building ? 'black' : 'gray',
              }}>
              {Building ? Building : 'Select Building'}
            </Text>
          </View>
          <View
            style={{
              width: '10%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign
              name={Buildingbtmsheet ? 'caretup' : 'caretdown'}
              size={16}
              style={{color: 'black', marginRight: 5, alignSelf: 'center'}}
            />
          </View>
        </TouchableOpacity>
      <View style={{height: 20}} />
        <TouchableOpacity
          onPress={() => {
            setFloorbtmsheet(true), Floor_API();
          }}
          style={{
            borderColor: '#0073ff',
            borderRadius: 7,
            borderWidth: 1,
            padding: 5,
            flexDirection: 'row',
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'flex-start',
                color: Floor ? 'black' : 'gray',
              }}>
              {Floor ? Floor : 'Select Floor'}
            </Text>
          </View>
          <View
            style={{
              width: '10%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign
              name={Floorbtmsheet ? 'caretup' : 'caretdown'}
              size={16}
              style={{color: 'black', marginRight: 5, alignSelf: 'center'}}
            />
          </View>
        </TouchableOpacity>
        <View style={{height: 20}} />
          <TouchableOpacity
          onPress={() => {
            setSpotbtmsheet(true), Spot_API();
          }}
          style={{
            borderColor: '#0073ff',
            borderRadius: 7,
            borderWidth: 1,
            padding: 5,
            flexDirection: 'row',
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'flex-start',
                color: Spot ? 'black' : 'gray',
              }}>
              {Spot ? Spot : 'Select Spot'}
            </Text>
          </View>
          <View
            style={{
              width: '10%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign
              name={Spotbtmsheet ? 'caretup' : 'caretdown'}
              size={16}
              style={{color: 'black', marginRight: 5, alignSelf: 'center'}}
            />
          </View>
        </TouchableOpacity>
        <View style={{height: 20}} />
           <TouchableOpacity
          onPress={() => {
            setServicebtmsheet(true), Service_API();
          }}
          style={{
            borderColor: '#0073ff',
            borderRadius: 7,
            borderWidth: 1,
            padding: 5,
            flexDirection: 'row',
            width: '100%',
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <View
            style={{
              width: '90%',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'flex-start',
                color: Service ? 'black' : 'gray',
              }}>
              {Service ? Service : 'Select Service Type'}
            </Text>
          </View>
          <View
            style={{
              width: '10%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign
              name={Servicebtmsheet ? 'caretup' : 'caretdown'}
              size={16}
              style={{color: 'black', marginRight: 5, alignSelf: 'center'}}
            />
          </View>
        </TouchableOpacity>
        <View style={{height: 20}} />
      </View>
      {/* <View style={{flex: 2}}></View> */}

      {/* CONTRACT  */}
      <Modal
        visible={Contractbtmsheet}
        transparent={true}
        animationType="slide">
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => {
              setContractbtmsheet(false);
            }}
            style={{flex: 0.5}}></TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setContractbtmsheet(false);
            }}
            style={{
              flex: 0.5,
              backgroundColor: '#ffffff',
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              overflow: 'hidden',
            }}>
            <FlatList
              data={Contract_data}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      console.log(item);
                      setContractbtmsheet(false);
                      setContract(item.ContractName);
                      setContractidpk(item.ContractIDPK);
                    }}
                    style={{
                      padding: 15,
                      borderBottomWidth: 0.5,
                      borderBottomColor: '#000000',
                      backgroundColor:"#eaa3a3",
                    }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        color: 'black',
                      }}>
                      {item.ContractName}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </TouchableOpacity>
        </View>
      </Modal>

      {/* LOCALITY */}
      <Modal
        visible={Localitybtmsheet}
        transparent={true}
        animationType="slide">
          
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => {
              setLocalitybtmsheet(false);
            }}
            style={{flex: 0.5}}></TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setLocalitybtmsheet(false);
            }}
            style={{
              flex: 0.5,
              backgroundColor: '#f0b9b9',
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              overflow: 'hidden',
            }}>
            <FlatList
              data={LocalityData}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      console.log(item);
                      setLocalitybtmsheet(false);
                      setLocality(item.LocalityName);
                      setLocalityidpk(item.LocalityIDPK)
                    }}
                    style={{
                      padding: 15,
                      borderBottomWidth: 0.5,
                      borderBottomColor: '#000000',
                    }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        color: 'black',
                      }}>
                      {item.LocalityName}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </TouchableOpacity>
        </View>
      </Modal>

      {/* BUILDING */}
        <Modal
        visible={Buildingbtmsheet}
        transparent={true}
        animationType="slide">
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => {
              setBuildingbtmsheet(false);
            }}
            style={{flex: 0.5}}></TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setBuildingbtmsheet(false);
            }}
            style={{
              flex: 0.5,
              backgroundColor: '#ffffff',
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              overflow: 'hidden',
            }}>
            <FlatList
              data={BuildingData}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      console.log(item);
                      setBuildingbtmsheet(false);
                      setBuilding(item.BuildingName);
                      setBuildingidpk(item.BuildingIDPK);
                    }}
                    style={{
                      padding: 15,
                      borderBottomWidth: 0.5,
                      borderBottomColor: '#000000',
                    }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        color: 'black',
                      }}>
                      {item.BuildingName}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </TouchableOpacity>
        </View>
      </Modal>

        {/* Floor */}
      <Modal
        visible={Floorbtmsheet}
        transparent={true}
        animationType="slide">
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => {
              setFloorbtmsheet(false);
            }}
            style={{flex: 0.5}}></TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setFloorbtmsheet(false);
            }}
            style={{
              flex: 0.5,
              backgroundColor: '#ffffff',
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              overflow: 'hidden',
            }}>
            <FlatList
              data={FloorData}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      console.log(item);
                      setFloorbtmsheet(false);
                      setFloor(item.FloorName);
                      setFlooridpk(item.FloorIDPK)
                    }}
                    style={{
                      padding: 15,
                      borderBottomWidth: 0.5,
                      borderBottomColor: '#000000',
                    }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        color: 'black',
                      }}>
                      {item.FloorName}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </TouchableOpacity>
        </View>
      </Modal>

       {/* SPOT */}
      <Modal
        visible={Spotbtmsheet}
        transparent={true}
        animationType="slide">
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => {
              setSpotbtmsheet(false);
            }}
            style={{flex: 0.5}}></TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setSpotbtmsheet(false);
            }}
            style={{
              flex: 0.5,
              backgroundColor: '#ffffff',
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              overflow: 'hidden',
            }}>
            <FlatList
              data={SpotData}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setSpot(item.SpotName);
                      setSpotbtmsheet(false);
                      setSpotidpk(item.SpotIDPK)
                    }}
                    style={{
                      padding: 15,
                      borderBottomWidth: 0.5,
                      borderBottomColor: '#000000',
                    }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        color: 'black',
                      }}>
                      {item.SpotName}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </TouchableOpacity>
        </View>
      </Modal>

         {/* Service Spot */}
      <Modal
        visible={Servicebtmsheet}
        transparent={true}
        animationType="slide">
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => {
              setServicebtmsheet(false);
            }}
            style={{flex: 0.5}}></TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setServicebtmsheet(false);
            }}
            style={{
              flex: 0.5,
              backgroundColor: '#ffffff',
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              overflow: 'hidden',
            }}>
            <FlatList
              data={ServiceData}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => {
                      setService(item.ServiceTypeName
);
                      setServicebtmsheet(false);
                      setServiceidpk(item.ServiceIDPK)
                    }}
                    style={{
                      padding: 15,
                      borderBottomWidth: 0.5,
                      borderBottomColor: '#000000',
                    }}>
                    <Text
                      style={{
                        alignSelf: 'center',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start',
                        color: 'black',
                      }}>
                      {item.ServiceTypeName
}
                    </Text>
                  </TouchableOpacity>
                );
              }}
            />
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={{width:'90%', height:40, justifyContent:'center',alignSelf:'center'}}>
        <Button title='Submit' onPress={handlePress}   />
      </View>
    </View>
  );
};

export default RegisterTicket;

const styles = StyleSheet.create({});

/*    error note     <TouchableOpacity onPress={() => { setContractbtmsheet(true) }} style={{borderColor: "#0073ff",   borderRadius: 7, borderWidth: 1, padding: 5, flexDirection: "row", width: "100%", height: 50, justifyContent: "center",alignItems:'center',alignSelf:'center' }}>
          <View style={{ width: "100%", justifyContent: "center", alignItems: "center", }}>
            <Text style={{ alignSelf: "center", color: "black" }}>{Contract}</Text>
          </View>
          <View style={{ width: "10%", justifyContent: "center", alignItems: "center" }}>
            <AntDesign name={Contractbtmsheet ? "caretup" : "caretdown"} size={16} style={{ color: "black", marginRight: 5, alignSelf: "center" }} />
          </View>
        </TouchableOpacity> */
