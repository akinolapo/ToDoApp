import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
        // console.log(enteredText)
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
              <Image style={styles.image} source={require('')}></Image>
                <TextInput style={styles.textInput} placeholder='Your course goal!' onChangeText={goalInputHandler} value={enteredGoalText} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                    <Button title='Add Task' onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                    <Button title='Cancel' onPress={props.onCancel}/>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        marginRight: 8,
        padding: 8
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }
})