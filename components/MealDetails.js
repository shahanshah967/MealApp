import { View, Text, StyleSheet } from "react-native"

function MealDetails({ duration, affordability, complexity, style, textStyle }) {
    return (
        <View style={[styles.details, style]}>
            <Text style={[styles.detailItem, textStyle]}>{duration ? `${duration}m` : ''}</Text>
            <Text style={[styles.detailItem, textStyle]}>{complexity ? complexity.toUpperCase() : ''}</Text>
            <Text style={[styles.detailItem, textStyle]}>{affordability ? affordability.toUpperCase() : ''}</Text>
        </View>
    )
}

export default MealDetails

const styles = StyleSheet.create({
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
        color: 'black',
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        justifyContent: 'center'
    }
})