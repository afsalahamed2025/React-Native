import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
const Profile = ({ navigation }) => {
  const Tiles_to_Move = [
    // { id: 1, Tilename: 'Main',  Navigation: 'Main', color: '#000000' },
    // { id: 2, Tilename: 'Lists', Navigation: 'Lists', color: '#000000' },
    // { id: 4, Tilename: 'Design', Navigation: 'Design', color: '#000000' },
    // { id: 3, Tilename: 'Login', Navigation: 'Login', color: '#000000' },
    // { id: 5, Tilename: 'Async', Navigation: 'Async', color: '#000000' },
  ]

  return (
    
    <View style={styles.container}>
      {Tiles_to_Move.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[styles.tile, { backgroundColor: item.color }]}
          onPress={() => navigation.navigate(item.Navigation)}
        >
          <Text style={styles.text}>{item.Tilename}</Text>
        </TouchableOpacity>
      ))}

      {/* <TouchableOpacity
        style={[styles.tile, { backgroundColor: 'lightgreen' }]}
        onPress={() => navigation.navigate('Main')}
      >
        <Text style={styles.text}>{'Main'}</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={[styles.tile, { backgroundColor: 'lightyellow' }]}
        onPress={() => navigation.navigate('Profile')}
      >
        <Text style={styles.text}>{'Profile'}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tile, { backgroundColor: 'orange' }]}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.text}>{'Login'}</Text>
      </TouchableOpacity> */}
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  tile: {
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: '900',
    color:'#00ff08',
  },
})
