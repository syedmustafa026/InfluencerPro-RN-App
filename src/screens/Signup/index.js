import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import InfluencerSignup from './InfluencerSignup'
import BrandSignup from './BrandSignup'

import * as fonts from '../../utilities/fonts'
import * as colors from '../../utilities/colors'

const Tab = createMaterialTopTabNavigator();

const Signup = () => {
    return (
        <View style={styles.container}>
            <View style={styles.section}>
                <View style={styles.header}>
                    <Text style={styles.h1}>Welcome</Text>
                    <Text style={styles.h4}>Collab with influencers.Get exclusive deals.Earn cash!</Text>
                </View>
            </View>
            <Tab.Navigator screenOptions={{
                swipeEnabled: false,
                tabBarActiveTintColor: colors.primary,
                tabBarAndroidRipple: true,
                tabBarIndicatorStyle: { backgroundColor: colors.primary },
                tabBarStyle: { backgroundColor: colors.white },
            }}>
                <Tab.Screen name="As a Influencer" component={InfluencerSignup} />
                <Tab.Screen name="As a Brand" component={BrandSignup} />
            </Tab.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    section: {
        paddingHorizontal: wp("6"),
    },
    header: {
        justifyContent: 'flex-end',
        marginVertical: hp("2"),
    },
    h1: {
        fontSize: hp("4"),
        color: colors.primary,
        marginVertical: hp("0.4"),
        marginHorizontal: 8,
        fontFamily: fonts.BOLD
    },
    h4: {
        fontSize: hp("2"),
        marginHorizontal: 8,
        fontFamily: fonts.REGULAR,
        color: colors.primaryLight,
    },
    input: {
        width: '100%',
        backgroundColor: colors.white
    },
    signin: {
        marginVertical: hp("1"),
        paddingHorizontal: wp("2"),
    },
    signinText: {
        fontSize: hp("1.8"),
        textAlign: 'center',
        color: colors.primaryLight,
        fontFamily: fonts.SEMIBOLD
    },
    bold: {
        fontFamily: fonts.BOLD
    },
    terms: {
        marginVertical: hp("2"),
    },
    termsText: {
        fontFamily: fonts.MEDIUM,
        color: colors.primaryLight
    },
    footerButton: {
        width: '100%',
        backgroundColor: colors.secondaryLight
    },
    footerButtonContent: {
        paddingVertical: hp("1"),
    },
    ButtonLabel: {
        fontSize: hp("2.2"),
        color: colors.white,
        fontFamily: fonts.SEMIBOLD
    },
    button: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 10,
        width: wp('78'),
        marginTop: 16,
        height: 40,
        borderColor: colors.black,
        borderWidth: .6,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Signup