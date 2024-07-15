import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { Feather, Fontisto, MaterialCommunityIcons } from 'react-native-vector-icons'
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Whatsapp</Text>
        <View style={styles.iconContainer}>
          <Feather name='camera' size ={20} color='white' style={styles.icon} />
          <Fontisto name='search' size ={20} color='white' style={styles.icon} />
          <MaterialCommunityIcons name='dots-vertical' size={21} color='white' style={styles.icon}/>
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#075e54',
    paddingTop: 80,
    paddingBottom: 8
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent: 'space-between',
    marginHorizontal: 16
  }
});