import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import * as fonts from '../../utilities/fonts'
import * as colors from '../../utilities/colors'
import InfluencerSignin from './InfluencerSignin';
import BrandSignin from './BrandSignin';

const Tab = createMaterialTopTabNavigator();

const Signup = () => {
    return (
        <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.h1}>Welcome Back</Text>
                    <Text style={styles.h4}>Don't miss your next opportunity. Sign in to stay updated on your professional world.</Text>
                </View>
                <Tab.Navigator screenOptions={{
                    swipeEnabled: false,
                    tabBarActiveTintColor: colors.primary,
                    tabBarAndroidRipple: true,
                    tabBarIndicatorStyle: { backgroundColor: colors.primary },
                    tabBarStyle: { backgroundColor: colors.white },
                }}>
                    <Tab.Screen name="As a Influencer" component={InfluencerSignin} />
                    <Tab.Screen name="As a Brand" component={BrandSignin} />
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
        padding: 20
    },
    h1: {
        fontSize: hp("3"),
        color: colors.primary,
        marginVertical: 4,
        fontFamily: fonts.BOLD
    },
    h4: {
        fontSize: hp("2"),
        fontFamily: fonts.SEMIBOLD,
        color: colors.primaryLight
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