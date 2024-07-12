import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Status = () => {
  return (
    <View style={styles.container}>
      <Text>Status</Text>
    </View>
  )
}

export default Status

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});