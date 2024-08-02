import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const Detail = ({ route }) => {
    const { item } = route.params;
    const { width } = Dimensions.get('window');
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/images/Frame.png')} resizeMode="contain" style={{ height: 50, width: 50 }} />
            </TouchableOpacity>
            <View style={styles.align}>
                <Image source={{ uri: item?.urlToImage }} resizeMode="contain" style={{ width: width * 0.9, height: width * 0.9 * 0.75 }} />
            </View>
            <Text style={styles.fontTitle}>{item?.title}</Text>
            <View style={styles.secondContainer}>
                <Text style={styles.name}>{item?.author}</Text>
                <Text style={styles.name}>Date:{item?.publishedAt}</Text>
            </View>
            <ScrollView style={styles.scrollviewStyle}>
                <Text style={styles.description}>{item?.description}</Text>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 10
    },
    align: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    fontTitle: {
        fontSize: 18, fontWeight: '800', color: '#000000'
    },
    secondContainer: {
        flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderBottomWidth: 1, borderBottomColor: '#333333', borderTopColor: '#333333', padding: 10, marginTop: 10
    },
    name: {
        fontSize: 18, fontWeight: '800', color: '#333333'
    },
    description: {
        flex: 1, fontSize: 22, fontWeight: '300', color: '#333333'
    },
    scrollviewStyle: {
        flex: 1, marginTop: 10
    }
});
export default Detail;