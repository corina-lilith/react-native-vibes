import Background from '../components/Background'
import { View, Text, StyleSheet } from 'react-native'
import Emotions from '../components/Emotions'
import DaySummary from "../components/DaySummary"


export default function HomeScreen() {
  return (
    <Background>
      <View>
        <Text style={styles.text}>How am I feeling today?</Text>
        <View>
          <Emotions />
        </View>
        <DaySummary />
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 30,
    marginTop: 60,
    alignItems: 'center',
  }
})

