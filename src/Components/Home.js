import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,

  
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Image } from 'react-native';
// import progressImage from'../assets/image'


export default function Home({navigation}) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Hi, <Text style={styles.name}>Afsal</Text>
        </Text>

        <TouchableOpacity>
          <MaterialIcons name="notifications" size={28} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.statusContainer}>
   <StatusBox label="Open" count="64" color="#ff0000" />
  <View style={{ width: 1, height: 70, backgroundColor: 'black', fontSize:"16", fontWeight:"900", justifyContent:"center",  alignSelf:"center",}} />
  <StatusBox label="Close" count="0" color="green" />
  <View style={{ width: 1, height: 70, backgroundColor: 'black', fontSize:"16", fontWeight:"900" , justifyContent:"center",  alignSelf:"center", }} />
  <StatusBox label="StandBy" count="181" color="#ffbf00" />
     </View>

      <View style={styles.progressBox}>
        <Text style={styles.date}>Today May 26 2025</Text>
        <Text style={styles.progressText}>Your Work Progress</Text>
        <Text style={styles.percentage}>16% work complte</Text>

      {/* <Image source={progressImage} /> */}

      </View>
    {/* <View style={{ width:'%', justifyContent:'space-between',flexDirection:'row'}}> */}
      <Text style={styles.sectionTitle}>Modules</Text>
      {/* <Text style={styles.sectionTitle}>View More</Text> */}
      {/* </View> */}

      <View style={styles.moduleContainer}>
        <ModuleBox 
          navigation={navigation}
          label="Workorder"
          count="0/245" 
         image={require('../assets/image/paper-bag.png')}  
        />
        <ModuleBox label="Facility Auding Maintenance" count="0/0" image={require('../assets/image/research.png')} />
        <ModuleBox
          label="House Keeping Maintenance"
          count="0/28"
         image={require('../assets/image/housekeeping.png')}
        />
        <ModuleBox label="Service Based Maintenance " count="0/8"  image={require('../assets/image/settings.png')} />
      </View>

      <Text style={styles.sectionTitle}>Tools</Text>
      <View style={styles.moduleContainer}>
        <ToolBox label="Scan To Get Asst Details" image={require('../assets/image/qr.png')} />
        <ToolBox label="My Activity Side" image={require('../assets/image/statistics.png')} />
        <ToolBox label="My Activity Side" image={require('../assets/image/statistics.png')} />
      </View>
    </ScrollView>
  );
}

const StatusBox = ({label, count, color}) => (
  <View style={[styles.statusBox, {borderColor: color}]}>
    <Text style={{color}}>{count}</Text>
    <Text>{label}</Text>
  </View>
);

// MODULES //
const ModuleBox = ({label, count, navigation,image}) => (
  <TouchableOpacity 
     onPress={()=>{label=="Workorder" ? (console.log('yes this break screen'), navigation.navigate('Break')):console.log("no this screen");
     }}
    style={[
      styles.moduleBox,
      {height: 90, alignSelf: 'center', justifyContent: 'center'},
    ]}
    >
    <View
      style={{
        height: 45,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf:'center',
      }}>
      <Text
        style={{
          color: '#000000',
          fontSize: 14,
          textAlign: 'center',
          fontWeight: '500',
        }}>
        {label}
      </Text>
    </View>
    <View
      style={{
        height: 50,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <View
        style={{
          height: 50,
          width: '50%',
          justifyContent: 'center',
          alignItems:'center',
          alignSelf: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 17,
            fontWeight: '400',
            color: '3cdf39',
          }}>
          {count}
        </Text>
      </View>
      <View
        style={{
          height: 50,
          width: '50%',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
          {image && (
          <Image
            source={image}
            style={{ width: 30, height: 30, resizeMode: 'contain' }}
          />
        )}
      </View>
    </View>
  </TouchableOpacity>
);

const ToolBox = ({ label,image }) => (
  <View
    style={[
      styles.moduleBox,
      {
        height: 100,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
      },
    ]}>
    
   
    <View
      style={{
        width: '20%',
        height: 100,
        alignSelf: 'center',
        justifyContent: 'center',
      
        flexDirection: 'row',
        alignItems: 'center',
      }}>
         {image && (
          <Image
            source={image}
            style={{ width: 30, height: 30, resizeMode: 'contain' }}
          />
        )}
    </View>

   
    <View
      style={{
        width: '80%',
        height: 100,
        alignSelf: 'center',
        justifyContent: 'center',
       
        flexDirection: 'row',
        alignItems: 'center',
      }}>
    
     
      <Text style={{ color: '#000000', fontSize: 16, textAlign:"center" }}>{label}</Text>
    </View>
  </View>
);



const styles = StyleSheet.create({
  container: {
    width:'100%',
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: '#0073ff',
    padding: 25,
    width:"100%",
    height: 100,
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  greeting: {
    color: '#fff',
    fontSize: 18,
  },
  name: {
    fontWeight: 'bold',
    fontSize:18,
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    marginTop: -28,
    padding: 10,

    borderRadius: 50,
    marginHorizontal: 10,
  },

  statusBox: {
    alignItems: 'center',
    
    padding: 10,
    borderRadius: 8,
  },
  progressBox: {
    backgroundColor: '#0073ff',
   
    width:'95%',
    
    justifyContent:'center',
    alignSelf:'center',
    
    padding: 7,
    borderRadius: 20,
    height:100,
  },
  date: {
    color: '#fff',
  },
  progressText: {
    color: '#fff',
    fontSize: 17,
    marginTop: 5,
  },
  percentage: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },

  sectionTitle: {
    width:'94%',
    // padding:5,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    // margin: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },

  moduleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  moduleBox: {
    borderColor: '#3cdf39',
    backgroundColor: '#fff',
    width: '45%',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 10,
    marginTop: 20,
  },
  count: {
    color: 'green',
    fontWeight: '900',
  },
  
});
