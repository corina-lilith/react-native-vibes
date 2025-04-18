import * as React from 'react';
import { Snackbar } from 'react-native-paper';
import { StyleSheet, Text } from 'react-native';

export default function EmotionSaved({
  visible,
  onDismiss,
}: {
  visible: boolean;
  onDismiss: () => void;
}) {
  return (
    <Snackbar
      visible={visible}
      onDismiss={onDismiss}
      duration={2000}
      style={styles.snacky}
    >
      <Text style={styles.snackyText}>Emotion Saved!</Text>
    </Snackbar>
  );
}


const styles = StyleSheet.create({
  snacky: {
    backgroundColor: '#FFD8E9',
    borderRadius: 10
  },
  snackyText: {
    color: '#B60DFF',
    fontSize: 20,
  },
})