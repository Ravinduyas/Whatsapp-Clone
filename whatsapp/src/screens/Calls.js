import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Calls = () => {
  return (
    <View style={styles.container}>
      <Text>Calls</Text>
    </View>
  )
}

export default Calls

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});