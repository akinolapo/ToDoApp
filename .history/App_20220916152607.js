import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false)

  const [myGoals, setMyGoals] = useState([])

  function startAddGoalHandler() {
    setModalIsVisible(true)
  }

  function endAddGoalHandler() {
    setModalIsVisible
  }

  function addGoalHandler(enteredGoalText) {
    // console.log(enteredGoalText)
    setMyGoals(currentGoals => [...currentGoals, { text: enteredGoalText, id: Math.random().toString() },])
  }

  function deleteGoalHandler(id) {
    // console.log('delete')
    setMyGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Task' color="#5e0acc" onPress={startAddGoalHandler}/>
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList data={myGoals} renderItem={itemData => {
          return <GoalItem text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler}/>
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
  goalsContainer: {
    flex: 4,
  },

});
