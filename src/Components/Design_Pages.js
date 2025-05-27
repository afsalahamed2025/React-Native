import React, { useState } from 'react';
import { Pressable, Text, StyleSheet, View, Platform } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const ModuleBox = ({ label, count, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Pressable
      onHoverIn={() => setIsHovered(true)}
      onHoverOut={() => setIsHovered(false)}
      style={[
        styles.moduleBox,
        isHovered && Platform.OS === 'web' && styles.moduleBoxHover,
      ]}
    >
      <FontAwesome5 name={icon} size={24} color="gray" />
      <Text>{label}</Text>
      <Text style={styles.count}>({count})</Text>
    </Pressable>
  );
};

export default ModuleBox;


const styles=StyleSheet.create({
  moduleBox: {
  backgroundColor: '#fff',
  width: '45%',
  marginVertical: 10,
  alignItems: 'center',
  padding: 15,
  borderRadius: 10,
  elevation: 2,
  transitionDuration: '200ms', // smooth hover
},

moduleBoxHover: {
  backgroundColor: '#00f100',
  transform: [{ scale: 1.03 }],
},

})