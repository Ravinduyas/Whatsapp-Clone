import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

import { MaterialCommunityIcons } from 'react-native-vector-icons'
import Chat from './screens/Chat';
import Calls from './screens/Calls';
import Status from './screens/Status';
import Community from './screens/Community';

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    
    <View style={styles.container}>
      <Text>Navigation</Text>
    </View>
  )
}

export default Navigation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});