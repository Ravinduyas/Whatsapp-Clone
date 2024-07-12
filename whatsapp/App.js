import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Header from './src/Header';
import Navigation from './src/Navigation';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <StatusBar backgroundColor='#0e806a' barStyle='light-content' />
        <Header />

        <View style={{ flex: 1, backgroundColor: 'white' }}>
          {/* Your content here */}
        </View>

      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
