import Background from './components/Background'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

export default function HomeScreen() {
  return (
    <Background>
      <View style={styles.centered}>
        <Text style={styles.text}>How's my Vibe?</Text>

        <View style={styles.buttonRow}>
          <Button
            icon="check"
            mode="contained"
            onPress={() => console.log('Pressed')}
            style={styles.button}
          >
            Check In
          </Button>
          <Button
            icon="calendar"
            mode="contained"
            onPress={() => console.log('Pressed')}
            style={styles.button}
          >
            Review
          </Button>
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
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    marginHorizontal: 5,
  },
})
