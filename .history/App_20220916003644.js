import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [myGoals, setMyGoals] = useState([])

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
    // console.log(enteredText)
  }

  function addGoalHandler() {
    // console.log(enteredGoalText)
    setMyGoals(currentGoals => [...currentGoals, {text: enteredGoalText, id: Math.random().toString()},])
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} />
        <Button title='Add Goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
      <FlatList data={myGoals} renderItem={itemData => {
        return(
            <View style={styles.goalItems}>
              <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
        )
      }} keyExtractor={()} alwaysBounceVertical={false}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 4,
  },
  goalItems: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: 'white'
  }
});
