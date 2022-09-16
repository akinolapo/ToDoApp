import {StyleSheet} from 'react-native'

function GoalItem() {
    return (
        <View style={styles.goalItems}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
        </View>
    )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItems: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
      },
      goalText: {
        color: 'white'
      }
})