import React, { useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/FontAwesome5'

import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import Card from "../components/Card";


const Influencers = ({ navigation, route }) => {

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
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.cards}>
                    <Card />
                    <Card />
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
    }
})
export default Influencers