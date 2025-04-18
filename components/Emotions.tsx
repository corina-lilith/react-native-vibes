import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import EmotionList from '../data/EmotionList.json';

export default function Emotions() {
  const [checked, setChecked] = React.useState('');

  // Split the array into two
  const leftColumn = EmotionList.slice(0, 3);
  const rightColumn = EmotionList.slice(3, 6);

  return (
    <RadioButton.Group onValueChange={value => setChecked(value)} value={checked}>
      <View style={styles.container}>
        <View style={styles.column}>
          {leftColumn.map((emote) => (
            <View key={emote.id} style={styles.option}>
              <RadioButton value={emote.feeling} />
              <Text style={styles.text}>{emote.feeling}</Text>
            </View>
          ))}
        </View>
        <View style={styles.column}>
          {rightColumn.map((emote) => (
            <View key={emote.id} style={styles.option}>
              <RadioButton value={emote.feeling} />
              <Text style={styles.text}>{emote.feeling}</Text>
            </View>
          ))}
        </View>
      </View>
    </RadioButton.Group>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 20,
  },
  column: {
    flex: 1,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});
