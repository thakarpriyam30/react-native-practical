import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, TextInput, StyleSheet, ActivityIndicator } from "react-native";
const MainPage = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('')
    const navigation = useNavigation()
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const resp = await fetch("https://newsapi.org/v2/everything?q=news&apiKey=008b6b8ea2d94811a367b0e1be9066c4");
        const data = await resp.json();
        setData(data?.articles);
        setLoading(false);
    };
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    style={styles.input}
                    onChangeText={(val) => setSearch(val)}
                    value={search}
                    placeholder="Search news..."
                    placeholderTextColor={'#0F69F1'}
                />
            </View>
            <View style={{ flex: 1 }}>
                {loading ? <ActivityIndicator size={'large'} color={'#333333'} /> :
                    <FlatList
                        data={search ? data?.filter((e) => e.title.toLowerCase().includes(search)) : data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }: any) => {
                            return (
                                <TouchableOpacity style={styles.cardContainer}
                                    onPress={() => navigation.navigate('Detail', { item })}
                                >
                                    <View>
                                        <Image source={{ uri: item?.urlToImage }} resizeMode="contain" style={{ height: 150, width: 150 }} />
                                    </View>
                                    <View style={styles.view}>
                                        <Text style={styles.titleText} numberOfLines={1}>{item?.title}</Text>
                                        <Text style={styles.description} numberOfLines={3}>{item?.description}</Text>
                                    </View>

                                </TouchableOpacity>
                            )
                        }}
                    />
                }
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#FFFFFF', paddingHorizontal: 10
    },
    cardContainer: {
        flex: 1, flexDirection: 'row', borderBottomWidth: 1, borderColor: '#333333'
    },
    view: {
        padding: 10, flex: 1, justifyContent: 'space-evenly'
    },
    titleText: {
        fontSize: 18, fontWeight: '700', color: '#000000'
    },
    description: {
        fontSize: 16, color: '#333333'
    },
    input: {
        height: 50,
        margin: 12,
        padding: 10,
        borderRadius: 9,
        borderWidth: 1
    },
});
export default MainPage;