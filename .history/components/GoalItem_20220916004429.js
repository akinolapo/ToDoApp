
function GoalItem() {
    return (
        <View style={styles.goalItems}>
            <Text style={styles.goalText}>{itemData.item.text}</Text>
        </View>
    )
}

export default GoalItem;