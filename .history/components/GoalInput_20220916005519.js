import { StyleSheet, View, Text } from 'react-native'

function GoalInput() {
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} />
            <Button title='Add Goal' onPress={addGoalHandler} />
        </View>
    )
}

export default GoalInput;

const styles = StyleSheet.create({

})