import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {

  const [myGoals, setMyGoals] = useState([])

  function addGoalHandler(enteredGoalText) {
    // console.log(enteredGoalText)
    setMyGoals(currentGoals => [...currentGoals, { text: enteredGoalText, id: Math.random().toString() },])
  }

  function deleteGoalHandler() {
    cons
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
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
  goalsContainer: {
    flex: 4,
  },

});
