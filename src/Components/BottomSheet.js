import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  FlatList,
  Button,
  Alert,
  SafeAreaView,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {format} from 'date-fns';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {moderatescale,verticalscale} from './Responsive';

const RegisterTicket = () => {
  const [Contract, setContract] = useState('');
  const [Contractidpk, setContractidpk] = useState('');
  const [Contractbtmsheet, setContractbtmsheet] = useState(false);
  const [Contract_data, setContract_data] = useState([]);

  const [Localitybtmsheet, setLocalitybtmsheet] = useState(false);
  const [Locality, setLocality] = useState('');
  const [LocalityData, setLocalityData] = useState([]);
  const [Localityidpk, setLocalityidpk] = useState('');

  const [Buildingbtmsheet, setBuildingbtmsheet] = useState(false);
  const [Building, setBuilding] = useState('');
  const [BuildingData, setBuildingData] = useState([]);
  const [Buildingidpk, setBuildingidpk] = useState('');

  const [Floorbtmsheet, setFloorbtmsheet] = useState(false);
  const [Floor, setFloor] = useState('');
  const [FloorData, setFloorData] = useState([]);
  const [Flooridpk, setFlooridpk] = useState('');

  const [Spotbtmsheet, setSpotbtmsheet] = useState(false);
  const [Spot, setSpot] = useState('');
  const [SpotData, setSpotData] = useState([]);
  const [Spotidpk, setSpotidpk] = useState('');

  const [Servicebtmsheet, setServicebtmsheet] = useState(false);
  const [Service, setService] = useState('');
  const [ServiceData, setServiceData] = useState([]);
  const [Serviceidpk, setServiceidpk] = useState('');

  const [Complaintbtmsheet, setComplaintbtmsheet] = useState(false);
  const [Complaint, setComplaint] = useState('');
  const [ComplaintData, setComplaintData] = useState([]);
  const [Complaintidpk, setComplaintidpk] = useState('');

  const [Naturalbtmsheet, setNaturalbtmsheet] = useState(false);
  const [Natural, setNatural] = useState('');
  const [NaturalData, setNaturalData] = useState([]);
  const [Naturalidpk, setNaturalidpk] = useState('');

  const [Divisionbtmsheet, setDivisionbtmsheet] = useState(false);
  const [Division, setDivision] = useState('');
  const [DivisionData, setDivisionData] = useState([]);
  const [Divisionidpk, setDivisionidpk] = useState('');

  const [Prioritybtmsheet, setPrioritybtmsheet] = useState(false);
  const [Priority, setPriority] = useState('');
  const [PriorityData, setPriorityData] = useState([]);
  const [Priorityidpk, setPriorityidpk] = useState('');

  const [Disciplinebtmsheet, setDisciplinebtmsheet] = useState(false);
  const [Discipline, setDiscipline] = useState('');
  const [DisciplineData, setDisciplineData] = useState([]);
  const [Disciplineidpk, setDisciplineidpk] = useState('');

  const [Descriptionbtmsheet, setDescriptionbtmsheet] = useState(false);
  const [Description, setDescription] = useState('');
  // const [DescriptionData, setDescriptionData] = useState([]);
  // const [Descriptionidpk, setDescriptionidpk] = useState([]);

  // const [ClientData, setClientData] = useState([]);
  const [Clientbtmsheet, setClientbtmsheet] = useState([]);
  const [Client, setClient] = useState('');

  const [searchText, setSearchText] = useState('');

  const filteredData = DisciplineData.filter(item =>
    item.DisciplineName.toLowerCase().includes(searchText.toLowerCase()),
  );



const handlePress = async () => {
  if (Contract == '') {
    Alert.alert('Error', 'Please fill in all the fields');
    return;
  } else if (Locality == '') {
    Alert.alert('Error', 'Select Contract');
    return;
  } else if (Building == '') {
    Alert.alert('Error', 'Select Building');
    return;
  } else if (Floor == '') {
    Alert.alert('Error', 'Select Floor');
    return;
  } else if (Spot == '') {
    Alert.alert('Error', 'Select Spot');
    return;
  } else if (Service == '') {
    Alert.alert('Error', 'Select Service');
    return;
  } else if (Complaint == '') {
    Alert.alert('Error', 'Select Complaint');
    return;
  } else if (Natural == '') {
    Alert.alert('Error', 'Select Natural');
    return;
  } else if (Division == '') {
    Alert.alert('Error', 'Select Division');
    return;
  } else if (Priority == '') {
    Alert.alert('Error', 'Select Priority');
    return;
  } else if (Discipline == '') {
    Alert.alert('Error', 'Select Discipline');
    return;
  } else if (Description == '') {
    Alert.alert('Error', 'Select Description');
    return;
  } else if (Client == '') {
    Alert.alert('Error', 'Select Client');
    return;
  }

  let today = new Date();
  let TimeFormat = format(today, 'yyyy-MM-dd HH:mm:ss');

  const requestData = {
    data: [
      {
       "P1": "",
            "P2": "",
            "P3": "",
            "P4": TimeFormat,
            "P5": null,
            "P6": null,
            "P7": null,
            "P8": "",
            "P9": "",
            "P10": "",
            "P11": "0",
            "P12": 0,
            "P13": 0,
            "P14": "0",
            "P15": "",
            "P16": "0",
            "P17": "0",
            "P18": "",
            "P19": null,
            "P20": 0,
            "P21": "0",
            "P22": "0",
            "P23": TimeFormat,
            "P24": TimeFormat,
            "P25": null,
            "P26": TimeFormat,
            "P27": null,
            "P28": 0,
            "P29": 0,
            "P30": 0,
            "P31": 0,
            "P32": 0,
            "P33": 0,
            "P34": 0,
            "P35": 0,
            "P36": 0,
            "P37": 0,
            "P38": "",
            "P39": 0,
            "P40": "0",
            "P41": 0,
            "P42": "",
            "P43": "",
            "P44": 0,
            "P45": "",
            "P46": "",
            "P47": "",
            "P48": "",
            "P49": "0",
            "P50": null,
            "P51": 1056,
            "P52": 79,
            "P53": 1125,
            "P54": null,
            "P55": null,
            "P56": 3,
            "P57": 1068,
            "P58": null,
            "P59": "0",
            "P60": 527,
            "P61": "6",
            "P62": 11,
            "P63": null,
            "P64": "4",
            "P65": "1",
            "P66": 5,
            "P67": null,
            "P68": null,
            "P69": null,
            "P70": null,
            "P71": null,
            "P72": "1",
            "P73": "0",
            "P74": "124",
            "P75": TimeFormat,
            "P76": "124",
            "P77": TimeFormat
      },
    ],
  };

  console.log("Sending Request:", JSON.stringify(requestData));

  try {
    const response = await fetch('http://13.127.67.252:5040/FP290S1/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    const result = await response.json();
    console.log('API Response:', JSON.stringify(result));

    const status = result?.[0]?.status?.code;
    if (status == '200') {
      Alert.alert('Success', 'Complaint Successfully Submitted');
    } else {
      const msg = result?.[0]?.status?.message || 'Submission Failed';
      Alert.alert('Error', msg);
    }
  } catch (error) {
    console.log('API Error:', error);
    Alert.alert('Error', 'Something went wrong. Please try again.');
  }
};


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
  const Building_API = async () => {
    const url = 'http://13.127.67.252:5040/ReachComplaintRegProcess/';
    const Params = {
      data: {
        p1: null,
        p2: '1104',
        p3: Contractidpk,
        p4: Localityidpk,
        p5: null,
        p6: '',
        p7: null,
        p8: null,
        p9: null,
        p10: null,
        PageIndex_int: 1,
        PageSize_int: 10,
        Type_varchar: 'BuildingIDPK',
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
      console.log('API LA RESPONSE :', result);

      const Data = result?.Output?.data ?? [];
      console.log(Data, 'Received Data');

      const Status = result?.Output?.status ?? [];
      console.log(Status, 'Status');

      if (Status?.code == '200') {
        setBuildingData(Data);
      }
    } catch (error) {
      console.log('Api Error', error);
    }
  };
  /* FloorData */
  const Floor_API = async () => {
    const url = 'http://13.127.67.252:5040/ReachComplaintRegProcess/';
    const Params = {
      data: {
        p1: null,
        p2: '1104',
        p3: Contractidpk,
        p4: Localityidpk,
        p5: Buildingidpk,
        p6: '',
        p7: null,
        p8: null,
        p9: null,
        p10: null,
        PageIndex_int: 1,
        PageSize_int: 10,
        Type_varchar: 'FloorIDPK',
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
      console.log('Api RESPONSE :', result);

      const Data = result?.Output?.data ?? [];
      console.log(Data, 'Received Data');

      const Status = result?.Output?.status ?? [];
      console.log(Status, 'status');

      if (Status?.code == '200') {
        setFloorData(Data);
      }
    } catch (error) {
      console.log('Api Error', error);
    }
  };
  /* SPOT DATA */
  const Spot_API = async () => {
    const url = 'http://13.127.67.252:5040/ReachComplaintRegProcess/';
    const Params = {
      data: {
        p1: null,
        p2: '1104',
        p3: Contractidpk,
        p4: Localityidpk,
        p5: Buildingidpk,
        p6: '',
        p7: null,
        p8: null,
        p9: null,
        p10: null,
        PageIndex_int: 1,
        PageSize_int: 10,
        Type_varchar: 'SpotIDPK',
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
      console.log('Api check response:', result);

      const Data = result?.Output?.data ?? [];
      console.log(Data, 'Received Data');

      const Status = result?.Output?.status ?? [];
      console.log(Status, 'Status');

      if (Status?.code == '200') {
        setSpotData(Data);
        console.log('Data to set in Spotdata', Data);
      }
    } catch (error) {
      console.log('Api Error', error);
    }
  };

  /* SERVICE DATA */
  const Service_API = async () => {
    const url = 'http://13.127.67.252:5040/ReachComplaintRegProcess/';
    const Params = {
      data: {
        p1: null,
        p2: '1117',
        p3: Contractidpk,
        p4: Localityidpk,
        p5: Buildingidpk,
        p6: '',
        p7: null,
        p8: null,
        p9: null,
        p10: null,
        PageIndex_int: 1,
        PageSize_int: 10,
        Type_varchar: 'ServiceTypeIDPK',
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
      console.log('Api check response:', result);

      const Data = result?.Output?.data ?? [];
      console.log(Data, 'Received Data');

      const Status = result?.Output?.status ?? [];
      console.log(Status, 'Status');

      if (Status?.code == '200') {
        setServiceData(Data);
        console.log('Data to set in Spotdata', Data);
      }
    } catch (error) {
      console.log('Api Error', error);
    }
  };

  /* Complaint Data */
  const Complaint_API = async () => {
    const url = 'http://13.127.67.252:5040/ReachComplaintRegProcess/';
    const Params = {
      data: {
        p1: null,
        p2: '1729',
        p3: 1883,
        p4: 175,
        p5: 1787,
        p6: '',
        p7: null,
        p8: null,
        p9: null,
        p10: null,
        PageIndex_int: 1,
        PageSize_int: 10,
        Type_varchar: 'CCMComplaintTypeIDPK',
        UserGroupKey: '2110',
        UserAccessKey: '551',
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
      console.log('Api check response:', result);

      const Data = result?.Output?.data ?? [];
      console.log(Data, 'Received Data');

      const Status = result?.Output?.status ?? [];
      console.log(Status, 'Status');

      if (Status?.code == '200') {
        setComplaintData(Data);
        console.log('Data to set in NaturalData', Data);
      }
    } catch (error) {
      console.log('Api Error', error);
    }
  };

  /* NATURAL COMPLAINTS */

  const Natural_API = async () => {
    const url = 'http://13.127.67.252:5040/ReachComplaintRegProcess/';
    const Params = {
      data: {
        p1: null,
        p2: null,
        p3: null,
        p4: null,
        p5: null,
        p6: '',
        p7: Divisionidpk ? Divisionidpk : null,
        p8: Complaintidpk ? Complaintidpk : null,
        p9: '2025-06-11 14:49:02',
        p10: null,
        PageIndex_int: 1,
        PageSize_int: 10,
        Type_varchar: 'ComplaintNatureIDPK',
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
      console.log('Api check response:', result);

      const Data = result?.Output?.data ?? [];
      console.log(Data, 'Received Data');

      const Status = result?.Output?.status ?? [];
      console.log(Status, 'Status');

      if (Status?.code == '200') {
        setNaturalData(Data);
        console.log('Data to set in NaturalData', Data);
      }
    } catch (error) {
      console.log('Api Error', error);
    }
  };
  /* DIVISION */

  const Division_API = async () => {
    const url = 'http://13.127.67.252:5040/ReachComplaintRegProcess/';
    const Params = {
      data: {
        p1: null,
        p2: null,
        p3: null,
        p4: null,
        p5: null,
        p6: '',
        p7: 53,
        p8: 573,
        p9: '2025-06-11 14:49:02',
        p10: null,
        PageIndex_int: 1,
        PageSize_int: 10,
        Type_varchar: 'DIVISIONIDPK',
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
      console.log('Api check response:', result);

      const Data = result?.Output?.data ?? [];
      console.log(Data, 'Received Data');

      const Status = result?.Output?.status ?? [];
      console.log(Status, 'Status');

      if (Status?.code == '200') {
        setDivisionData(Data);
        console.log('Data to set in Division data', Data);
      }
    } catch (error) {
      console.log('Api Error', error);
    }
  };

  /* PRIORITY */
  const Priority_API = async () => {
    const url = 'http://13.127.67.252:5040/ReachComplaintRegProcess/';
    const Params = {
      data: {
        p1: 573,
        p2: null,
        p3: null,
        p4: null,
        p5: null,
        p6: '',
        p7: Divisionidpk ?? null,
        p8: Complaintidpk ?? null,
        p9: '2025-06-11 14:51:22',
        p10: null,
        PageIndex_int: 1,
        PageSize_int: 10,
        Type_varchar: 'PriorityIDPK',
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
      console.log('Api check response:', result);

      const Data = result?.Output?.data ?? [];
      console.log(Data, 'Received Data');

      const Status = result?.Output?.status ?? [];
      console.log(Status, 'Status');

      if (Status?.code == '200') {
        setPriorityData(Data);
        console.log('Data to set in PriorityData', Data);
      }
    } catch (error) {
      console.log('Api Error', error);
    }
  };

  /* Discipline */

  const Descipline_API = async () => {
    const url = 'http://13.127.67.252:5040/ReachComplaintRegProcess/';
    const Params = {
      data: {
        p1: 573,
        p2: null,
        p3: null,
        p4: null,
        p5: null,
        p6: '',
        p7: 1071,
        p8: 4,
        p9: '2025-06-11 14:51:22',
        p10: null,
        PageIndex_int: 1,
        PageSize_int: 10,
        Type_varchar: 'DisciplineIDPK',
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
      console.log('Api check response:', result);

      const Data = result?.Output?.data ?? [];
      console.log(Data, 'Received Data');

      const Status = result?.Output?.status ?? [];
      console.log(Status, 'Status');

      if (Status?.code == '200') {
        setDisciplineData(Data);
        console.log('Data to set in PriorityData', Data);
      }
    } catch (error) {
      console.log('Api Error', error);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{backgroundColor: 'white'}}>
          <View
            style={{
              backgroundColor: '#ffffff',
              // padding: 10,
              width: '96%',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              // height:1150
            }}>
            {/*  */}
            <View
              style={{
                width: '100%',
                height: 50,
                alignSelf: 'center',
                justifyContent: 'center',
                elevation: 10,
                backgroundColor: '#ffffff',
              }}>
              <View
                style={{
                  width: '100%',
                  height: 40,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 10,
                }}>
                <Text
                  style={{fontSize: 16, fontWeight: '500', color: '#0091ff'}}>
                  Primary Details
                </Text>

                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <MaterialIcons name="attachment" size={25} color="black" />
                  <Text
                    style={{
                      fontSize: 16,
                      fontWeight: '500',
                      color: '#000000',
                      marginLeft: 5,
                    }}>
                    Attachments [0/5]
                  </Text>
                </View>
              </View>
            </View>

            {/* Complaint No date and Time */}
            <View
              style={{
                width: '100%',
                height: 40,
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                alignSelf: 'center',
                marginTop: 10,
              }}>
              <View
                style={{
                  width: '50%',
                  height: 40,
                  alignItems: 'flex-start',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{fontSize: 15, fontWeight: '600', color: '#000000'}}>
                  Complaint No
                </Text>
                <Text
                  style={{fontSize: 15, fontWeight: '600', color: '#000000'}}>
                  Date and Time
                </Text>
              </View>
              <View
                style={{
                  width: '50%',
                  height: 40,
                  alignItems: 'flex-start',
                  alignSelf: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{fontSize: 15, fontWeight: '400', color: '#000000'}}>
                  : Auto Genorate
                </Text>
                <Text
                  style={{fontSize: 15, fontWeight: '400', color: '#000000'}}>
                  : 11-06-2025 12:06:23 PM
                </Text>
              </View>
            </View>

            {/* Top Select Complaint Type */}
            <View
              style={{
                width: '100%',
                // height:500,
                marginTop: 20,
                elevation: 10,

                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                backgroundColor: '#ffffff',
              }}>
               
              <TouchableOpacity
                onPress={() => {
                  setComplaintbtmsheet(true);
                  Complaint_API();
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
                     <Text
                    style={{
                      position: 'absolute',
                      left: moderatescale(14),
                      top: verticalscale(-9),
                      backgroundColor: '#ffffff',
                      color: '#0073ff',
                      zIndex: 2,
                    }}>
                    Complaint
                  </Text>
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
                      color: 'black',
                    }}>
                    {Complaint ? Complaint : 'Select Complaint Type'}
                  </Text>
            
                </View>
                <View
                  style={{
                    width: 1,
                    height: 40,
                    backgroundColor: '#d0cdcd',
                    fontSize: '16',
                    fontWeight: '100',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}
                />
                <View
                  style={{
                    width: '10%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (Complaint) {
                        setComplaint('');
                      } else {
                        setComplaintbtmsheet(!Complaintbtmsheet);
                      }
                    }}
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <AntDesign
                      style={{color: '#000000', fontWeight: '700'}}
                      name={
                        Complaint
                          ? 'close'
                          : Complaintbtmsheet
                          ? 'caretup'
                          : 'caretdown'
                      }
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <View style={{height: 20}} />
            </View>

            {/*  Complainer Details Title */}

            <View
              style={{
                width: '100%',
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  width: '100%',
                  fontSize: 16,
                  fontWeight: '500',
                  color: '#0073ff',
                  borderBottomWidth: 1,
                  borderBottomColor: '#d7d3d3',
                }}>
                Complainer Details
              </Text>
            </View>
            {/* Top COMPLANT FIELDS */}

            <View
              style={{
                width: '100%',
                // height:500,
                marginTop: 20,
                elevation: 2,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                backgroundColor: '#ffffff',
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
                       <Text
                    style={{
                      position: 'absolute',
                      left: moderatescale(14),
                      top: verticalscale(-9),
                      backgroundColor: '#ffffff',
                      color: '#0073ff',
                      zIndex: 2,
                    }}>
                    Contract
                  </Text>
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
                      color: 'black',
                    }}>
                    {Contract ? Contract : 'Select Contract'}
                  </Text>
               
                </View>
                <View
                  style={{
                    width: 1,
                    height: 40,
                    backgroundColor: '#d0cdcd',
                    fontSize: '16',
                    fontWeight: '100',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}
                />
                <View
                  style={{
                    width: '10%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (Contract) {
                        setContract('');
                      } else {
                        setContractbtmsheet(!Contractbtmsheet);
                      }
                    }}
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <AntDesign
                      style={{color: '#000000', fontWeight: '700'}}
                      name={
                        Contract
                          ? 'close'
                          : Contractbtmsheet
                          ? 'caretup'
                          : 'caretdown'
                      }
                      size={18}
                    />
                  </TouchableOpacity>
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
                      <Text
                    style={{
                      position: 'absolute',
                      left: moderatescale(14),
                      top: verticalscale(-9),
                      backgroundColor: '#ffffff',
                      color: '#0073ff',
                      zIndex: 2,
                    }}>
                    Location
                  </Text>
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
                      color: 'black',
                    }}>
                    {Locality ? Locality : 'Select Locality'}
                  </Text>
              
                </View>
                <View
                  style={{
                    width: 1,
                    height: 40,
                    backgroundColor: '#d0cdcd',
                    fontSize: '16',
                    fontWeight: '100',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}
                />
                <View
                  style={{
                    width: '10%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (Locality) {
                        setLocality('');
                      } else {
                        setLocalitybtmsheet(!Localitybtmsheet);
                      }
                    }}
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <AntDesign
                      style={{color: '#000000', fontWeight: '700'}}
                      name={
                        Locality
                          ? 'close'
                          : Localitybtmsheet
                          ? 'caretup'
                          : 'caretdown'
                      }
                      size={18}
                    />
                  </TouchableOpacity>
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
                       <Text
                    style={{
                      position: 'absolute',
                      left: moderatescale(14),
                      top: verticalscale(-9),
                      backgroundColor: '#ffffff',
                      color: '#0073ff',
                      zIndex: 2,
                    }}>
                    Building
                  </Text>
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
                      color: 'black',
                    }}>
                    {Building ? Building : 'Select Building'}
                  </Text>
              
                </View>
                <View
                  style={{
                    width: 1,
                    height: 40,
                    backgroundColor: '#d0cdcd',
                    fontSize: '16',
                    fontWeight: '100',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}
                />
                <View
                  style={{
                    width: '10%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (Building) {
                        setBuilding('');
                      } else {
                        setBuildingbtmsheet(!Buildingbtmsheet);
                      }
                    }}
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <AntDesign
                      style={{color: '#000000', fontWeight: '700'}}
                      name={
                        Building
                          ? 'close'
                          : Buildingbtmsheet
                          ? 'caretup'
                          : 'caretdown'
                      }
                      size={18}
                    />
                  </TouchableOpacity>
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
                       <Text
                    style={{
                      position: 'absolute',
                      left: moderatescale(14),
                      top: verticalscale(-9),
                      backgroundColor: '#ffffff',
                      color: '#0073ff',
                      zIndex: 2,
                    }}>
                    Floor
                  </Text>
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
                      color: 'black',
                    }}>
                    {Floor ? Floor : 'Select Floor'}
                  </Text>
               
                </View>
                <View
                  style={{
                    width: 1,
                    height: 40,
                    backgroundColor: '#d0cdcd',
                    fontSize: '16',
                    fontWeight: '100',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}
                />
                <View
                  style={{
                    width: '10%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (Floor) {
                        setFloor('');
                      } else {
                        setFloorbtmsheet(!Floorbtmsheet);
                      }
                    }}
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <AntDesign
                      style={{color: '#000000', fontWeight: '700'}}
                      name={
                        Floor
                          ? 'close'
                          : Floorbtmsheet
                          ? 'caretup'
                          : 'caretdown'
                      }
                      size={18}
                    />
                  </TouchableOpacity>
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
                       <Text
                    style={{
                      position: 'absolute',
                      left: moderatescale(14),
                      top: verticalscale(-9),
                      backgroundColor: '#ffffff',
                      color: '#0073ff',
                      zIndex: 2,
                    }}>
                    Spot
                  </Text>
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
                      color: 'black',
                    }}>
                    {Spot ? Spot : 'Select Spot'}
                  </Text>
                  
               
                </View>
                <View
                  style={{
                    width: 1,
                    height: 40,
                    backgroundColor: '#d0cdcd',
                    fontSize: '16',
                    fontWeight: '100',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}
                />
                <View
                  style={{
                    width: '10%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (Spot) {
                        setSpot('');
                      } else {
                        setSpotbtmsheet(!Spotbtmsheet);
                      }
                    }}
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <AntDesign
                      style={{color: '#000000', fontWeight: '700'}}
                      name={
                        Spot ? 'close' : Spotbtmsheet ? 'caretup' : 'caretdown'
                      }
                      size={18}
                    />
                  </TouchableOpacity>
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
                       <Text
                    style={{
                      position: 'absolute',
                      left: moderatescale(14),
                      top: verticalscale(-9),
                      backgroundColor: '#ffffff',
                      color: '#0073ff',
                      zIndex: 2,
                    }}>
                    Service
                  </Text>
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
                      color: 'black',
                    }}>
                    {Service ? Service : 'Select Service'}
                  </Text>
            
                </View>
                <View
                  style={{
                    width: 1,
                    height: 40,
                    backgroundColor: '#d0cdcd',
                    fontSize: '16',
                    fontWeight: '100',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}
                />
                <View
                  style={{
                    width: '10%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (Service) {
                        setService('');
                      } else {
                        setServicebtmsheet(!Servicebtmsheet);
                      }
                    }}
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <AntDesign
                      style={{color: '#000000', fontWeight: '700'}}
                      name={
                        Service
                          ? 'close'
                          : Servicebtmsheet
                          ? 'caretup'
                          : 'caretdown'
                      }
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <View style={{height: 20}} />
            </View>

            {/* DOWN  Complainer  Title */}

            <View
              style={{
                width: '100%',
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  width: '100%',
                  fontSize: 16,
                  fontWeight: '500',
                  color: '#0073ff',
                  borderBottomWidth: 1,
                  borderBottomColor: '#d7d3d3',
                }}>
                Complainer Details
              </Text>
            </View>

            {/* DOWN COMPLANT FIELDS */}

            <View
              style={{
                width: '100%',
                // height:500,
                marginTop: 25,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                alignSelf: 'center',
                elevation: 2,
                backgroundColor: '#ffffff',
              }}>
              <TouchableOpacity
                onPress={() => {
                  setNaturalbtmsheet(true), Natural_API();
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
                       <Text
                    style={{
                      position: 'absolute',
                      left: moderatescale(14),
                      top: verticalscale(-9),
                      backgroundColor: '#ffffff',
                      color: '#0073ff',
                      zIndex: 2,
                    }}>
                    Nature Of Complaint
                  </Text>
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
                      color: 'black',
                    }}>
                    {Natural ? Natural : 'Select Natural'}
                  </Text>
                
                </View>
                <View
                  style={{
                    width: 1,
                    height: 40,
                    backgroundColor: '#d0cdcd',
                    fontSize: '16',
                    fontWeight: '100',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}
                />
                <View
                  style={{
                    width: '10%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (Natural) {
                        setNatural('');
                      } else {
                        setNaturalbtmsheet(!Naturalbtmsheet);
                      }
                    }}
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <AntDesign
                      style={{color: '#000000', fontWeight: '700'}}
                      name={
                        Natural
                          ? 'close'
                          : Naturalbtmsheet
                          ? 'caretup'
                          : 'caretdown'
                      }
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <View style={{height: 20}} />
              <TouchableOpacity
                onPress={() => {
                  setDivisionbtmsheet(true), Division_API();
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
                       <Text
                    style={{
                      position: 'absolute',
                      left: moderatescale(14),
                      top: verticalscale(-9),
                      backgroundColor: '#ffffff',
                      color: '#0073ff',
                      zIndex: 2,
                    }}>
                    Division
                  </Text>
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
                      color: 'black',
                    }}>
                    {Division ? Division : 'Select Division'}
                  </Text>
               
                </View>
                <View
                  style={{
                    width: 1,
                    height: 40,
                    backgroundColor: '#d0cdcd',
                    fontSize: '16',
                    fontWeight: '100',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}
                />
                <View
                  style={{
                    width: '10%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (Division) {
                        setDivision('');
                      } else {
                        setDivisionbtmsheet(!Divisionbtmsheet);
                      }
                    }}
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <AntDesign
                      style={{color: '#000000', fontWeight: '700'}}
                      name={
                        Division
                          ? 'close'
                          : Divisionbtmsheet
                          ? 'caretup'
                          : 'caretdown'
                      }
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>

              <View style={{height: 20}} />
              <TouchableOpacity
                onPress={() => {
                  setPrioritybtmsheet(true), Priority_API();
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
                       <Text
                    style={{
                      position: 'absolute',
                      left: moderatescale(14),
                      top: verticalscale(-9),
                      backgroundColor: '#ffffff',
                      color: '#0073ff',
                      zIndex: 2,
                    }}>
                    Priority
                  </Text>
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
                      color: 'black',
                    }}>
                    {Priority ? Priority : 'Select Priority'}
                  </Text>
           
                </View>
                <View
                  style={{
                    width: 1,
                    height: 40,
                    backgroundColor: '#d0cdcd',
                    fontSize: '16',
                    fontWeight: '100',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}
                />
                <View
                  style={{
                    width: '10%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (Priority) {
                        setPriority('');
                      } else {
                        setPrioritybtmsheet(!Prioritybtmsheet);
                      }
                    }}
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <AntDesign
                      style={{color: '#000000', fontWeight: '700'}}
                      name={
                        Priority
                          ? 'close'
                          : Prioritybtmsheet
                          ? 'caretup'
                          : 'caretdown'
                      }
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <View style={{height: 20}} />
              <TouchableOpacity
                onPress={() => {
                  setDisciplinebtmsheet(true), Descipline_API();
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
                       <Text
                    style={{
                      position: 'absolute',
                      left: moderatescale(14),
                      top: verticalscale(-9),
                      backgroundColor: '#ffffff',
                      color: '#0073ff',
                      zIndex: 2,
                    }}>
                    Discipline
                  </Text>
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
                      color: 'black',
                    }}>
                    {Discipline ? Discipline : 'Select Discipline'}
                  </Text>
                
                </View>
                <View
                  style={{
                    width: 1,
                    height: 40,
                    backgroundColor: '#d0cdcd',
                    fontSize: '16',
                    fontWeight: '100',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}
                />
                <View
                  style={{
                    width: '10%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      if (Discipline) {
                        setDiscipline('');
                      } else {
                        setDisciplinebtmsheet(!Disciplinebtmsheet);
                      }
                    }}
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <AntDesign
                      style={{color: '#000000', fontWeight: '700'}}
                      name={
                        Discipline
                          ? 'close'
                          : Disciplinebtmsheet
                          ? 'caretup'
                          : 'caretdown'
                      }
                      size={18}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
              <View style={{height: 20}} />
           <TouchableOpacity
  onPress={() => {
    setDescriptionbtmsheet(true);
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
  <Text
    style={{
      position: 'absolute',
      left: moderatescale(14),
      top: verticalscale(-9),
      backgroundColor: '#ffffff',
      color: '#0073ff',
      zIndex: 2,
    }}>
    Description
  </Text>

  <View
    style={{
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    }}>
    <TextInput
      style={{alignSelf: 'flex-start', color: 'black'}}
      placeholder="Enter Description"
      placeholderTextColor="black"
      value={Description}
      onChangeText={setDescription}
    />
  </View>

  <View
    style={{
      width: 1,
      height: 40,
      backgroundColor: '#d0cdcd',
    }}
  />

  <View
    style={{
      width: '10%',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    }}>
    <TouchableOpacity
      onPress={() => {
        if (Description) {
          setDescription('');
        } else {
          setDescriptionbtmsheet(!Descriptionbtmsheet);
        }
      }}
      style={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      <AntDesign
        style={{color: '#000000', fontWeight: '700'}}
        name={
          Description
            ? 'close'
            : Descriptionbtmsheet
            ? 'caretup'
            : 'caretdown'
        }
        size={18}
      />
    </TouchableOpacity>
  </View>
</TouchableOpacity>

              <View style={{height: 20}} />
          <TouchableOpacity
  onPress={() => {
    setClientbtmsheet(true);
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
  <Text
    style={{
      position: 'absolute',
      left: moderatescale(14),
      top: verticalscale(-9),
      backgroundColor: '#ffffff',
      color: '#0073ff',
      zIndex: 2,
    }}>
    Workorder No
  </Text>

  <View
    style={{
      width: '90%',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    }}>
    <TextInput
      style={{alignSelf: 'flex-start', color: 'black'}}
      placeholder="Enter Client Workorder No"
      placeholderTextColor="black"
      value={Client}
      onChangeText={setClient}
    />
  </View>

  <View
    style={{
      width: 1,
      height: 40,
      backgroundColor: '#d0cdcd',
    }}
  />

  <View
    style={{
      width: '10%',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    }}>
    <TouchableOpacity
      onPress={() => {
        if (Client) {
          setClient('');
        } else {
          setClientbtmsheet(!Clientbtmsheet);
        }
      }}
      style={{
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}>
      <AntDesign
        style={{color: '#000000', fontWeight: '700'}}
        name={
          Client
            ? 'close'
            : Clientbtmsheet
            ? 'caretup'
            : 'caretdown'
        }
        size={18}
      />
    </TouchableOpacity>
  </View>
</TouchableOpacity>

              <View style={{height: 20}} />

              {/*View Response Time  */}
              <View
                style={{
                  width: '100%',
                  height: 50,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    width: '100%',
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    alignSelf: 'center',
                  }}>
                  <Text style={{color: 'black', fontSize: 14}}>
                    View Response Time
                  </Text>
                  <Text>
                    <AntDesign
                      name="pluscircleo"
                      size={18}
                      style={{
                        color: 'black',
                        fontWeight: '600',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                      }}
                    />
                  </Text>
                </View>
              </View>
            </View>

            {/* MODAL BOXING  ALL */}

            {/* CONTRACT  */}
            <Modal
              visible={Contractbtmsheet}
              transparent={true}
              animationType="slide">
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => setContractbtmsheet(false)}
                  style={{flex: 0.5}}
                />
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: '#ffffff',
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    overflow: 'hidden',
                    paddingTop: 10,
                    // width:'100%'
                  }}>
                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#afaaaa',
                        width: '90%',
                        borderBottomWidth: 1,
                        borderBottomColor: '#dedddd',
                      }}>
                      Contract
                    </Text>
                  </View>
                  {/* Search */}
                  <View
                    style={{
                      width: '80%',
                      // elevation: 10,
                      borderRadius: 20,
                      backgroundColor: '#ffffff',
                      height: 40,
                      marginTop: 25,
                      borderWidth: 1,
                      borderColor: '#b7b5b5',
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
                        // fontWeight:'700',
                      }}>
                      <EvilIcons
                        name="search"
                        color="#003cff"
                        size={30}
                        style={{fontWeight: '700'}}
                      />
                    </View>
                    <TextInput
                      style={{
                        width: '75%',
                        height: 40,
                        color: '#000000',
                        fontSize: 12,
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                      }}
                      placeholder="Search..."
                      placeholderTextColor="#7d7d7f"
                      value={searchText}
                      onChangeText={text => setSearchText(text)}
                    />
                  </View>

                  {/* Filtered FlatList */}
                  <FlatList
                    data={Contract_data.filter(item =>
                      item.ContractName.toLowerCase().includes(
                        searchText.toLowerCase(),
                      ),
                    )}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        onPress={() => {
                          setContractbtmsheet(false);
                          setContract(item.ContractName);
                          setContractidpk(item.ContractIDPK);
                        }}
                        style={{
                          width: '90%',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                          alignSelf: 'center',
                          padding: 10,
                          borderBottomWidth: 1,
                          borderBottomColor: '#8d8d8d',
                          backgroundColor: '#ffffff',
                        }}>
                        <Text style={{color: 'black'}}>
                          {item.ContractName}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </Modal>

            {/* LOCALITY */}
            <Modal
              visible={Localitybtmsheet}
              transparent={true}
              animationType="slide">
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => setLocalitybtmsheet(false)}
                  style={{flex: 0.5}}
                />
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: '#ffffff',
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    overflow: 'hidden',
                    paddingTop: 10,
                    // width:'100%'
                  }}>
                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#afaaaa',
                        width: '90%',
                        borderBottomWidth: 1,
                        borderBottomColor: '#dedddd',
                      }}>
                      Locality
                    </Text>
                  </View>
                  {/* Search */}
                  <View
                    style={{
                      width: '80%',
                      // elevation: 10,
                      borderRadius: 20,
                      backgroundColor: '#ffffff',
                      height: 40,
                      marginTop: 25,
                      borderWidth: 1,
                      borderColor: '#b7b5b5',
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
                        // fontWeight:'700',
                      }}>
                      <EvilIcons
                        name="search"
                        color="#003cff"
                        size={30}
                        style={{fontWeight: '700'}}
                      />
                    </View>
                    <TextInput
                      style={{
                        width: '75%',
                        height: 40,
                        color: '#000000',
                        fontSize: 12,
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                      }}
                      placeholder="Search..."
                      placeholderTextColor="#7d7d7f"
                      value={searchText}
                      onChangeText={text => setSearchText(text)}
                    />
                  </View>

                  {/* Filtered FlatList */}
                  <FlatList
                    data={LocalityData.filter(item =>
                      item.LocalityName.toLowerCase().includes(
                        searchText.toLowerCase(),
                      ),
                    )}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        onPress={() => {
                          setLocalitybtmsheet(false);
                          setLocality(item.LocalityName);
                          setLocalityidpk(item.LocalityIDPK);
                        }}
                        style={{
                          width: '90%',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                          alignSelf: 'center',
                          padding: 10,
                          borderBottomWidth: 1,
                          borderBottomColor: '#8d8d8d',
                          backgroundColor: '#ffffff',
                        }}>
                        <Text style={{color: 'black'}}>
                          {item.LocalityName}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </Modal>

            {/* BUILDING */}
            <Modal
              visible={Buildingbtmsheet}
              transparent={true}
              animationType="slide">
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => setBuildingbtmsheet(false)}
                  style={{flex: 0.5}}
                />
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: '#ffffff',
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    overflow: 'hidden',
                    paddingTop: 10,
                    // width:'100%'
                  }}>
                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#afaaaa',
                        width: '90%',
                        borderBottomWidth: 1,
                        borderBottomColor: '#dedddd',
                      }}>
                      Building
                    </Text>
                  </View>
                  {/* Search */}
                  <View
                    style={{
                      width: '80%',
                      // elevation: 10,
                      borderRadius: 20,
                      backgroundColor: '#ffffff',
                      height: 40,
                      marginTop: 25,
                      borderWidth: 1,
                      borderColor: '#b7b5b5',
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
                        // fontWeight:'700',
                      }}>
                      <EvilIcons
                        name="search"
                        color="#003cff"
                        size={30}
                        style={{fontWeight: '700'}}
                      />
                    </View>
                    <TextInput
                      style={{
                        width: '75%',
                        height: 40,
                        color: '#000000',
                        fontSize: 12,
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                      }}
                      placeholder="Search..."
                      placeholderTextColor="#7d7d7f"
                      value={searchText}
                      onChangeText={text => setSearchText(text)}
                    />
                  </View>

                  {/* Filtered FlatList */}
                  <FlatList
                    data={BuildingData.filter(item =>
                      item.BuildingName.toLowerCase().includes(
                        searchText.toLowerCase(),
                      ),
                    )}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        onPress={() => {
                          setBuildingbtmsheet(false);
                          setBuilding(item.BuildingName);
                          setBuildingidpk(item.BuildingIDPK);
                        }}
                        style={{
                          width: '90%',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                          alignSelf: 'center',
                          padding: 10,
                          borderBottomWidth: 1,
                          borderBottomColor: '#8d8d8d',
                          backgroundColor: '#ffffff',
                        }}>
                        <Text style={{color: 'black'}}>
                          {item.BuildingName}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </Modal>

            {/* Floor */}
            <Modal
              visible={Floorbtmsheet}
              transparent={true}
              animationType="slide">
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => setFloorbtmsheet(false)}
                  style={{flex: 0.5}}
                />
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: '#ffffff',
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    overflow: 'hidden',
                    paddingTop: 10,
                    // width:'100%'
                  }}>
                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#afaaaa',
                        width: '90%',
                        borderBottomWidth: 1,
                        borderBottomColor: '#dedddd',
                      }}>
                      {' '}
                      Floor
                    </Text>
                  </View>
                  {/* Search */}
                  <View
                    style={{
                      width: '80%',
                      // elevation: 10,
                      borderRadius: 20,
                      backgroundColor: '#ffffff',
                      height: 40,
                      marginTop: 25,
                      borderWidth: 1,
                      borderColor: '#b7b5b5',
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
                        // fontWeight:'700',
                      }}>
                      <EvilIcons
                        name="search"
                        color="#003cff"
                        size={30}
                        style={{fontWeight: '700'}}
                      />
                    </View>
                    <TextInput
                      style={{
                        width: '75%',
                        height: 40,
                        color: '#000000',
                        fontSize: 12,
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                      }}
                      placeholder="Search..."
                      placeholderTextColor="#7d7d7f"
                      value={searchText}
                      onChangeText={text => setSearchText(text)}
                    />
                  </View>

                  {/* Filtered FlatList */}
                  <FlatList
                    data={FloorData.filter(item =>
                      item.FloorName.toLowerCase().includes(
                        searchText.toLowerCase(),
                      ),
                    )}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        onPress={() => {
                          setFloorbtmsheet(false);
                          setFloor(item.FloorName);
                          setFlooridpk(item.FloorIDPK);
                        }}
                        style={{
                          width: '90%',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                          alignSelf: 'center',
                          padding: 10,
                          borderBottomWidth: 1,
                          borderBottomColor: '#8d8d8d',
                          backgroundColor: '#ffffff',
                        }}>
                        <Text style={{color: 'black'}}>{item.FloorName}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </Modal>

            {/* SPOT */}
            <Modal
              visible={Spotbtmsheet}
              transparent={true}
              animationType="slide">
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => setSpotbtmsheet(false)}
                  style={{flex: 0.5}}
                />
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: '#ffffff',
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    overflow: 'hidden',
                    paddingTop: 10,
                    // width:'100%'
                  }}>
                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#afaaaa',
                        width: '90%',
                        borderBottomWidth: 1,
                        borderBottomColor: '#dedddd',
                      }}>
                      {' '}
                      Spot
                    </Text>
                  </View>
                  {/* Search */}
                  <View
                    style={{
                      width: '80%',
                      // elevation: 10,
                      borderRadius: 20,
                      backgroundColor: '#ffffff',
                      height: 40,
                      marginTop: 25,
                      borderWidth: 1,
                      borderColor: '#b7b5b5',
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
                        // fontWeight:'700',
                      }}>
                      <EvilIcons
                        name="search"
                        color="#003cff"
                        size={30}
                        style={{fontWeight: '700'}}
                      />
                    </View>
                    <TextInput
                      style={{
                        width: '75%',
                        height: 40,
                        color: '#000000',
                        fontSize: 12,
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                      }}
                      placeholder="Search..."
                      placeholderTextColor="#7d7d7f"
                      value={searchText}
                      onChangeText={text => setSearchText(text)}
                    />
                  </View>

                  {/* Filtered FlatList */}
                  <FlatList
                    data={SpotData.filter(item =>
                      item.SpotName.toLowerCase().includes(
                        searchText.toLowerCase(),
                      ),
                    )}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        onPress={() => {
                          setSpotbtmsheet(false);
                          setSpot(item.SpotName);
                          setSpotidpk(item.SpotIDPK);
                        }}
                        style={{
                          width: '90%',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                          alignSelf: 'center',
                          padding: 10,
                          borderBottomWidth: 1,
                          borderBottomColor: '#8d8d8d',
                          backgroundColor: '#ffffff',
                        }}>
                        <Text style={{color: 'black'}}>{item.SpotName}</Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </Modal>

            {/* Service Spot */}
            <Modal
              visible={Servicebtmsheet}
              transparent={true}
              animationType="slide">
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => setServicebtmsheet(false)}
                  style={{flex: 0.5}}
                />
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: '#ffffff',
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    overflow: 'hidden',
                    paddingTop: 10,
                    // width:'100%'
                  }}>
                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#afaaaa',
                        width: '90%',
                        borderBottomWidth: 1,
                        borderBottomColor: '#dedddd',
                      }}>
                      Service Type
                    </Text>
                  </View>
                  {/* Search */}
                  <View
                    style={{
                      width: '80%',
                      // elevation: 10,
                      borderRadius: 20,
                      backgroundColor: '#ffffff',
                      height: 40,
                      marginTop: 25,
                      borderWidth: 1,
                      borderColor: '#b7b5b5',
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
                        // fontWeight:'700',
                      }}>
                      <EvilIcons
                        name="search"
                        color="#003cff"
                        size={30}
                        style={{fontWeight: '700'}}
                      />
                    </View>
                    <TextInput
                      style={{
                        width: '75%',
                        height: 40,
                        color: '#000000',
                        fontSize: 12,
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                      }}
                      placeholder="Search..."
                      placeholderTextColor="#7d7d7f"
                      value={searchText}
                      onChangeText={text => setSearchText(text)}
                    />
                  </View>

                  {/* Filtered FlatList */}
                  <FlatList
                    data={ServiceData.filter(item =>
                      item.ServiceTypeName.toLowerCase().includes(
                        searchText.toLowerCase(),
                      ),
                    )}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        onPress={() => {
                          setServicebtmsheet(false);
                          setService(item.ServiceTypeName);
                          setServiceidpk(item.ServiceIDPK);
                        }}
                        style={{
                          width: '90%',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                          alignSelf: 'center',
                          padding: 10,
                          borderBottomWidth: 1,
                          borderBottomColor: '#8d8d8d',
                          backgroundColor: '#ffffff',
                        }}>
                        <Text style={{color: 'black'}}>
                          {item.ServiceTypeName}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </Modal>

            {/* Complaint */}

            <Modal
              visible={Complaintbtmsheet}
              transparent={true}
              animationType="slide">
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => setComplaintbtmsheet(false)}
                  style={{flex: 0.5}}
                />
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: '#ffffff',
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    overflow: 'hidden',
                    paddingTop: 10,
                    // width:'100%'
                  }}>
                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#afaaaa',
                        width: '90%',
                        borderBottomWidth: 1,
                        borderBottomColor: '#dedddd',
                      }}>
                      Complaint Type
                    </Text>
                  </View>
                  {/* Search */}
                  <View
                    style={{
                      width: '80%',
                      // elevation: 10,
                      borderRadius: 20,
                      backgroundColor: '#ffffff',
                      height: 40,
                      marginTop: 25,
                      borderWidth: 1,
                      borderColor: '#b7b5b5',
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
                        // fontWeight:'700',
                      }}>
                      <EvilIcons
                        name="search"
                        color="#003cff"
                        size={30}
                        style={{fontWeight: '700'}}
                      />
                    </View>
                    <TextInput
                      style={{
                        width: '75%',
                        height: 40,
                        color: '#000000',
                        fontSize: 12,
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                      }}
                      placeholder="Search..."
                      placeholderTextColor="#7d7d7f"
                      value={searchText}
                      onChangeText={text => setSearchText(text)}
                    />
                  </View>

                  {/* Filtered FlatList */}
                  <FlatList
                    data={ComplaintData.filter(item =>
                      item.CCMComplaintTypeName.toLowerCase().includes(
                        searchText.toLowerCase(),
                      ),
                    )}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        onPress={() => {
                          setComplaintbtmsheet(false);
                          setComplaint(item.CCMComplaintTypeName);
                          setComplaintidpk(item.CCMComplaintTypeIDPK);
                        }}
                        style={{
                          width: '90%',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                          alignSelf: 'center',
                          padding: 10,
                          borderBottomWidth: 1,
                          borderBottomColor: '#8d8d8d',
                          backgroundColor: '#ffffff',
                        }}>
                        <Text style={{color: 'black'}}>
                          {item.CCMComplaintTypeName}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </Modal>

            {/* Natural Data */}

            <Modal
              visible={Naturalbtmsheet}
              transparent={true}
              animationType="slide">
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => setNaturalbtmsheet(false)}
                  style={{flex: 0.5}}
                />
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: '#ffffff',
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    overflow: 'hidden',
                    paddingTop: 10,
                    // width:'100%'
                  }}>
                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#afaaaa',
                        width: '90%',
                        borderBottomWidth: 1,
                        borderBottomColor: '#dedddd',
                      }}>
                      Nature Of Complaint
                    </Text>
                  </View>
                  {/* Search */}
                  <View
                    style={{
                      width: '80%',
                      // elevation: 10,
                      borderRadius: 20,
                      backgroundColor: '#ffffff',
                      height: 40,
                      marginTop: 25,
                      borderWidth: 1,
                      borderColor: '#b7b5b5',
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
                        // fontWeight:'700',
                      }}>
                      <EvilIcons
                        name="search"
                        color="#003cff"
                        size={30}
                        style={{fontWeight: '700'}}
                      />
                    </View>
                    <TextInput
                      style={{
                        width: '75%',
                        height: 40,
                        color: '#000000',
                        fontSize: 12,
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                      }}
                      placeholder="Search..."
                      placeholderTextColor="#7d7d7f"
                      value={searchText}
                      onChangeText={text => setSearchText(text)}
                    />
                  </View>

                  {/* Filtered FlatList */}
                  <FlatList
                    data={NaturalData.filter(item =>
                   item.ComplaintNatureName &&
    item.ComplaintNatureName.toLowerCase().includes(
      searchText.toLowerCase()
                      ),
                    )}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        onPress={() => {
                          setNaturalbtmsheet(false);
                          setNatural(item.ComplaintNatureName);
                          setNaturalidpk(item.ComplaintNatureIDPK);
                          setDivision(item.DivisionName);
                          setDivisionidpk(item.Divisionidpk);
                          setPriority(item.PriorityName);
                          setPriorityidpk(item.Priorityidpk);
                        }}
                        style={{
                          width: '90%',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                          alignSelf: 'center',
                          padding: 10,
                          borderBottomWidth: 1,
                          borderBottomColor: '#8d8d8d',
                          backgroundColor: '#ffffff',
                        }}>
                        <Text style={{color: 'black'}}>
                          {item.ComplaintNatureName}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </Modal>

            {/*  DIVISION*/}

            <Modal
              visible={Divisionbtmsheet}
              transparent={true}
              animationType="slide">
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => setDivisionbtmsheet(false)}
                  style={{flex: 0.5}}
                />
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: '#ffffff',
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    overflow: 'hidden',
                    paddingTop: 10,
                    // width:'100%'
                  }}>
                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#afaaaa',
                        width: '90%',
                        borderBottomWidth: 1,
                        borderBottomColor: '#dedddd',
                      }}>
                      Division
                    </Text>
                  </View>
                  {/* Search */}
                  <View
                    style={{
                      width: '80%',
                      // elevation: 10,
                      borderRadius: 20,
                      backgroundColor: '#ffffff',
                      height: 40,
                      marginTop: 25,
                      borderWidth: 1,
                      borderColor: '#b7b5b5',
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
                        // fontWeight:'700',
                      }}>
                      <EvilIcons
                        name="search"
                        color="#003cff"
                        size={30}
                        style={{fontWeight: '700'}}
                      />
                    </View>
                    <TextInput
                      style={{
                        width: '75%',
                        height: 40,
                        color: '#000000',
                        fontSize: 12,
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                      }}
                      placeholder="Search..."
                      placeholderTextColor="#7d7d7f"
                      value={searchText}
                      onChangeText={text => setSearchText(text)}
                    />
                  </View>

                  {/* Filtered FlatList */}
                  <FlatList
                    data={DivisionData.filter(item =>
                      item.DivisionName.toLowerCase().includes(
                        searchText.toLowerCase(),
                      ),
                    )}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        onPress={() => {
                          setDivisionbtmsheet(false);
                          setDivision(item.DivisionName);
                          setDivisionidpk(item.ContractIDPK);
                        }}
                        style={{
                          width: '90%',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                          alignSelf: 'center',
                          padding: 10,
                          borderBottomWidth: 1,
                          borderBottomColor: '#8d8d8d',
                          backgroundColor: '#ffffff',
                        }}>
                        <Text style={{color: 'black'}}>
                          {item.DivisionName}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </Modal>

            {/* Priority */}
            <Modal
              visible={Prioritybtmsheet}
              transparent={true}
              animationType="slide">
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => setPrioritybtmsheet(false)}
                  style={{flex: 0.5}}
                />
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: '#ffffff',
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    overflow: 'hidden',
                    paddingTop: 10,
                    // width:'100%'
                  }}>
                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#afaaaa',
                        width: '90%',
                        borderBottomWidth: 1,
                        borderBottomColor: '#dedddd',
                      }}>
                      Priority
                    </Text>
                  </View>
                  {/* Search */}
                  <View
                    style={{
                      width: '80%',
                      // elevation: 10,
                      borderRadius: 20,
                      backgroundColor: '#ffffff',
                      height: 40,
                      marginTop: 25,
                      borderWidth: 1,
                      borderColor: '#b7b5b5',
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
                        // fontWeight:'700',
                      }}>
                      <EvilIcons
                        name="search"
                        color="#003cff"
                        size={30}
                        style={{fontWeight: '700'}}
                      />
                    </View>
                    <TextInput
                      style={{
                        width: '75%',
                        height: 40,
                        color: '#000000',
                        fontSize: 12,
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                      }}
                      placeholder="Search..."
                      placeholderTextColor="#7d7d7f"
                      value={searchText}
                      onChangeText={text => setSearchText(text)}
                    />
                  </View>

                  {/* Filtered FlatList */}
                  <FlatList
                    data={PriorityData.filter(item =>
                      item.PriorityName.toLowerCase().includes(
                        searchText.toLowerCase(),
                      ),
                    )}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        onPress={() => {
                          setPrioritybtmsheet(false);
                          setPriority(item.PriorityName);
                          setPriorityidpk(item.PriorityIDPK);
                        }}
                        style={{
                          width: '90%',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                          alignSelf: 'center',
                          padding: 10,
                          borderBottomWidth: 1,
                          borderBottomColor: '#8d8d8d',
                          backgroundColor: '#ffffff',
                        }}>
                        <Text style={{color: 'black'}}>
                          {item.PriorityName}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </Modal>

            {/* Discipline */}
            <Modal
              visible={Disciplinebtmsheet}
              transparent={true}
              animationType="slide">
              <View style={{flex: 1}}>
                <TouchableOpacity
                  onPress={() => setDisciplinebtmsheet(false)}
                  style={{flex: 0.5}}
                />
                <View
                  style={{
                    flex: 0.5,
                    backgroundColor: '#ffffff',
                    borderTopRightRadius: 30,
                    borderTopLeftRadius: 30,
                    overflow: 'hidden',
                    paddingTop: 10,
                    // width:'100%'
                  }}>
                  <View
                    style={{
                      width: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignSelf: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#afaaaa',
                        width: '90%',
                        borderBottomWidth: 1,
                        borderBottomColor: '#dedddd',
                      }}>
                      Discipline
                    </Text>
                  </View>
                  {/* Search */}
                  <View
                    style={{
                      width: '80%',
                      // elevation: 10,
                      borderRadius: 20,
                      backgroundColor: '#ffffff',
                      height: 40,
                      marginTop: 25,
                      borderWidth: 1,
                      borderColor: '#b7b5b5',
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
                        // fontWeight:'700',
                      }}>
                      <EvilIcons
                        name="search"
                        color="#003cff"
                        size={30}
                        style={{fontWeight: '700'}}
                      />
                    </View>
                    <TextInput
                      style={{
                        width: '75%',
                        height: 40,
                        color: '#000000',
                        fontSize: 12,
                        alignItems: 'center',
                        alignSelf: 'center',
                        justifyContent: 'center',
                      }}
                      placeholder="Search..."
                      placeholderTextColor="#7d7d7f"
                      value={searchText}
                      onChangeText={text => setSearchText(text)}
                    />
                  </View>

                  {/* Filtered FlatList */}
                  <FlatList
                    data={DisciplineData.filter(item =>
                      item.DisciplineName.toLowerCase().includes(
                        searchText.toLowerCase(),
                      ),
                    )}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        onPress={() => {
                          setDisciplinebtmsheet(false);
                          setDiscipline(item.DisciplineName);
                          setDisciplineidpk(item.DisciplineIDPK);
                        }}
                        style={{
                          width: '90%',
                          alignItems: 'flex-start',
                          justifyContent: 'center',
                          alignSelf: 'center',
                          padding: 10,
                          borderBottomWidth: 1,
                          borderBottomColor: '#8d8d8d',
                          backgroundColor: '#ffffff',
                        }}>
                        <Text style={{color: 'black'}}>
                          {item.DisciplineName}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </Modal>

            {/* BUTTON */}
            <View
              style={{
                width: '90%',
                height: 40,
                justifyContent: 'center',
                alignSelf: 'center',
                marginTop: 20,
              }}>
              <Button title="Submit" onPress={handlePress} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterTicket;

const styles = StyleSheet.create({});
