import { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [myGoals, setMyGoals] = useState([])

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
    // console.log(enteredText)
  }

  function addGoalHandler() {
    // console.log(enteredGoalText)
    setMyGoals(currentGoals => [...currentGoals, { text: enteredGoalText, id: Math.random().toString() },])
  }

  return (
    <View style={styles.appContainer}>
     
      <View style={styles.goalsContainer}>
        <FlatList data={myGoals} renderItem={itemData => {
          return <GoalItem text={itemData.item.text}/>
        }} keyExtractor={(item, index) => {
          return item.id
        }} alwaysBounceVertical={false} />
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

});
