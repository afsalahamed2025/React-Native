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

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>
          Hi, <Text style={styles.name}>Afsal</Text>
        </Text>

        <TouchableOpacity>
          <MaterialIcons name="notifications" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.statusContainer}>
        <TouchableOpacity>
          <StatusBox label="Open" count="0" color="red" />
        </TouchableOpacity>
        <TouchableOpacity>
          <StatusBox label="Close" count="0" color="green" />
        </TouchableOpacity>
        <TouchableOpacity>
          <StatusBox label="StandBy" count="0" color="orange" />
        </TouchableOpacity>
      </View>

      <View style={styles.progressBox}>
        <Text style={styles.date}>Today May 26 2025</Text>
        <Text style={styles.progressText}>Your Work Progress</Text>
        <Text style={styles.percentage}>16% work complte</Text>
      </View>

      <Text style={styles.sectionTitle}>Modules</Text>
      <View style={styles.moduleContainer}>
        <ModuleBox
          backgroundColor=""
          label="Breakdown Maintenance"
          count="0"
          icon="tools"
        />
        <ModuleBox label="Preventive Maintenance" count="0" icon="cogs" />
        <ModuleBox
          label="Facility Auditing Main"
          count="0"
          icon="clipboard-check"
        />
        <ModuleBox label="Service Based Maintenance " count="0" icon="cog" />
      </View>

      <Text style={styles.sectionTitle}>Tools</Text>
      <View style={styles.moduleContainer}>
        <ToolBox label="Scan To Get Asst Details" icon="qrcode" />
        <ToolBox label="My Activity" icon="chart-line" />
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
const ModuleBox = ({label, count, icon}) => (
  <View
    style={[
      styles.moduleBox,
      {height: 90, alignSelf: 'center', justifyContent: 'center'},
    ]}>
    <View
      style={{
        height: 45,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
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
          alignSelf: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 17,
            fontWeight: '600',
            color: 'green',
          }}>
          ({count})
        </Text>
      </View>
      <View
        style={{
          height: 50,
          width: '50%',
          justifyContent: 'center',
          alignSelf: 'center',
        }}>
        <FontAwesome5
          style={{
            textAlign: 'center',
          }}
          name={icon}
          size={28}
          color="#08aa2b"
        />
      </View>
    </View>
  </View>
);

const ToolBox = ({label, icon}) => (
  <View
    style={[
      styles.moduleBox,
      {
        height: 100,
        
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      },
    ]}>
    <View
      style={{
       width:100,
        height: 50,
        backgroundColor: 'blue',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      }}></View>
    <FontAwesome5 name={icon} color="#413e3e" />
    <View
      style={{
        
        height: 45,
        backgroundColor: 'blue',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      }}></View>
    <Text>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  header: {
    backgroundColor: '#35B333',
    padding: 25,
    height: 100,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  greeting: {
    color: '#fff',
    fontSize: 18,
  },
  name: {
    fontWeight: 'bold',
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
  },
  progressBox: {
    backgroundColor: '#35B333',
    margin: 10,
    padding: 10,
    borderRadius: 10,
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
    borderColor: '#03c21f',
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
