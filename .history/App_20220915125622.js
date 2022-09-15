import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View>
      <View>
        <TextInput placeholder='Your course goal!'/>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16,
    padding: 16,
    borderWidth: 2,
    borderColor: 'blue',
  }
});
