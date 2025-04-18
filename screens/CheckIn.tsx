import Background from '../components/Background'
import { View, Text, StyleSheet } from 'react-native'


export default function HomeScreen() {
  return (
    <Background>
      <View style={styles.centered}>
        <Text style={styles.text}>Check In</Text>

        <View>

        </View>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 36,
    marginBottom: 20,
  }
})
