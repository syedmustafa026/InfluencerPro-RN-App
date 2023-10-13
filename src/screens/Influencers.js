import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/FontAwesome5'

import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import * as functions from "../utilities/functions"
import InfluencerCard from "../components/InfluencerCard";
import { categories } from "../utilities/categories";


const Influencers = ({ navigation, route }) => {
    const [influencers, setInfluencers] = useState([])

    useEffect(() => {
        navigation.setOptions({
            title: route.params.title,
            headerRight: (props) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate("InfluencerFilter")} activeOpacity={0.6} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            style={{ marginHorizontal: 2, marginVertical: 10 }}
                            name='sliders-h'
                            size={14}
                            color={colors.primary} />
                        <Text style={{ fontSize: 16, margin: 4, color: colors.black, fontFamily: fonts.SEMIBOLD }}>Filters</Text>
                    </TouchableOpacity >)
            }

        })
    }, [])
    const getInfluencers = async () => {
        try {
            const response = await functions.getInfluencerByCategories({
                category_id: route.params.id
            })
            if (!response) throw new Error(response.message)
            if (response) {
                setInfluencers(response.influences)
            }
        } catch (error) {
            Toast(error.message || "Server Error")
        }
    }

    useEffect(() => {
        getInfluencers()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.cards}>
                    <FlatList
                        contentContainerStyle={styles.cards}
                        data={influencers}
                        renderItem={({ item }) => (<InfluencerCard item={item} />)}
                        keyExtractor={(item, index) => index.toString()}
                        ListEmptyComponent={<Text style={{textAlign:'center',marginLeft:130}}>No Influencer Found</Text>}
                    />
                    {/* <InfluencerCard />
                    <InfluencerCard />
                    <InfluencerCard />
                    <InfluencerCard />
                    <InfluencerCard />
                    <InfluencerCard />
                    <InfluencerCard />
                    <InfluencerCard />
                    <InfluencerCard />
                    <InfluencerCard />
                    <InfluencerCard />
                    <InfluencerCard /> */}

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: wp('3')
    },
    search: {
        width: wp('85'),
        height: hp('6.5'),
        backgroundColor: colors.white,
        borderColor: colors.gray300,
        borderWidth: 1,
        marginHorizontal: wp('2')
    },
    fiterRow: {
        flexDirection: 'row',
        paddingHorizontal: 12,
        marginBottom: 8,
    },
    cards: {
        alignItems: 'center',
        paddingVertical: hp('2.5'),
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})
export default Influencers