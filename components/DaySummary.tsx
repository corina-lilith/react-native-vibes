import * as React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import EmotionSaved from './EmotionSaved';

export default function DaySummary() {
  const [text, setText] = React.useState('');
  const [snackbarVisible, setSnackbarVisible] = React.useState(false);

  return (
    <View>
      <TextInput
        label="Summary:"
        value={text}
        onChangeText={setText}
        style={styles.box}
        multiline
        numberOfLines={5}
      />
      <Button
        style={styles.button}
        icon="content-save"
        mode="contained"
        onPress={() => {
          setSnackbarVisible(true);
        }}>
        Save
      </Button>

      <EmotionSaved
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  box: {
    minHeight: 150,
    textAlignVertical: 'top',
    borderRadius: 10
  },
  button: {
    backgroundColor: '#B60DFF',
    marginTop: 15,
    borderRadius: 10
  }
});
