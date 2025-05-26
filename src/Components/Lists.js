import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const Lists = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => { navigation.navigate('Profile') }} style={{ backgroundColor: "lightblue", height: 100, width: "30%", alignSelf: "center", alignItems: "center", justifyContent: "center" }}>
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Lists

const styles = StyleSheet.create({})