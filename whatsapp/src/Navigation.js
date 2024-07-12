import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

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