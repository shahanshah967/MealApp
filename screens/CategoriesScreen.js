import { Text, View, FlatList, StyleSheet } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTiles'

function CategoriesScreen({ navigation }) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealOverview', {
                categoryIds: itemData.item.id,
            })
        }
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onPress={pressHandler} />
        )
    }
    return (
        <View>
            <FlatList
                data={CATEGORIES}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={renderCategoryItem.bind()}
            />
        </View>
    )
}

export default CategoriesScreen;

const styles = StyleSheet.create({})