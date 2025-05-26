import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        
        <Text style={styles.greeting}>
        
          Hi, <Text style={styles.name}>Afsal</Text>
        </Text>
        <Text style={styles.headname}>Welcome To Home Page</Text>
        <TouchableOpacity>
          <MaterialIcons name="notifications" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.statusContainer}>
        <StatusBox label="Open" count="0" color="red" />
        <StatusBox label="Close" count="0" color="green" />
        <StatusBox label="StandBy" count="0" color="orange" />
      </View>




      <View style={styles.progressBox}>
        <Text style={styles.date}>Today May 26 2025</Text>
        <Text style={styles.progressText}>Your  Work Progress</Text>
        <Text style={styles.percentage}>16% work complte</Text>


      </View>

      <Text style={styles.sectionTitle}>Modules</Text>
      <View style={styles.moduleContainer}>
        <ModuleBox label='Breakdown Maintenance' count='0' icon='tools' />
        <ModuleBox label='Preventive Maintenance' count='0' icon='cogs' />
        <ModuleBox label='Facility Auditing Maintenance' count='0' icon='clipboard-check' />
        <ModuleBox label='Service Based Maintenance ' count='0' icon='cog' />

      </View>

      <Text style={styles.sectionTitle}>Tools</Text>
      <View style={styles.moduleContainer}>
        <ToolBox label='Scan To Get Asst dETAILS' icon='qrcode' />
        <ToolBox label='My Activity' icon="chart-line" />
      </View>

    </ScrollView>
  );
}

const StatusBox = ({ label, count, color }) => (
  <View style={[styles.statusBox, { borderColor: color }]}>
    <Text style={{ color }}>{count}</Text>
    <Text>{label}</Text>
  </View>
);
const ModuleBox = ({ label, count, icon }) => (
  <View style={styles.moduleBox}>
    <FontAwesome5 name={icon} size={24} color="gray" />
    <Text>{label}</Text>
    <Text style={styles.count}>({count})</Text>
  </View>
)
const ToolBox = ({ label, icon }) => (
  <View style={styles.moduleBox}>
    <FontAwesome5 name={icon} size={24} color='gray' />
    <Text>{label}</Text>
  </View>
)


const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#f8f8f8'
  },
  header: {
    backgroundColor: '#35B333',
    padding: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  greeting: {
    color: '#fff',
    fontSize: 18,
  },
  name: {
    fontWeight: 'bold'
  },
  statusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    marginTop: -20,
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 10,

  },
  statusBox: {
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    width: 80,
  },
  progressBox: {
    backgroundColor: '#35B333',
    margin: 10,
    padding: 10,
    borderRadius: 10,

  },
  date: {
    color: '#fff'
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
    margin: 10,
    fontWeight: 'bold',
    fontSize: 16,
  },

  moduleContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },
  moduleBox: {
    backgroundColor: '#fff',
    width: '45%',
    marginVertical: 10,
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    elevation: 2,
  },
  count: {
    color: 'green',
    marginTop: 5,
  },

headname:{
flexDirection:'row',
alignContent: 'center',
color:'white',
fontWeight:'bold',
},
});
