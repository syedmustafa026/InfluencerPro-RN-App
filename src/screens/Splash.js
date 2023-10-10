import React, { useState, useEffect } from "react"
import { Image, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import * as colors from "../utilities/colors"
import * as functions from "../utilities/functions"

const Splash = ({ navigation }) => {
    let screen = "Splash"

    const controlStorage = async () => {
        const check = await functions.getItem("FIRST_LAUNCH")
        if (check === null) {
            screen = "Onboard"
            functions.setItem('FIRST_LAUNCH', "yes")
            handleLoad()
        }
        if (check === 'yes') {
            const response = await functions.getItem("user")
            if (response != null) {
                screen = "BottomNavigator"
                handleLoad()
            }
            else {
                screen = "Signin"
                handleLoad()
            }
        }
    }
    const handleLoad = async () => {
        const timeout = setTimeout(() => {
            navigation.replace(screen)
        }, 2000)

        return () => {
            clearTimeout(timeout)
        }
    }
    useEffect(() => {
        controlStorage()
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.white}
            />
            <Image source={require("../assets/images/logo.png")} style={styles.brand} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.white,
    },

    brand: {
        width: wp("50"),
        height: wp("25"),
        resizeMode: 'contain'
    },
    h1: {

        fontSize: hp("4"),
        color: colors.black,
    },
    footer: {
        position: "absolute",
        bottom: hp("0"),
        width: wp("100"),
        alignItems: "center",
        paddingVertical: hp("2"),
        zIndex: 1,
    },
    h3: {

        fontSize: hp("2.4"),
        color: colors.white,
    },
})

export default Splash