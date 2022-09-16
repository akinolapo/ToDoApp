import {StyleSheet, View, Text, Pressable} from 'react-native'

function GoalItem(props) {
    return (
        <View style={styles.goalItems}>
        <Text style={styles.goalText}>{props.text}</Text>
        <Pressable android_ripple={{color:'#dddddd'}} onPress={props.onDeleteItem.bind(this, props.id)}>
       
        
        </Pressable>
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