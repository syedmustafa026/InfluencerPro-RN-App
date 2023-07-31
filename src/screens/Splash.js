import React, { useEffect } from "react"
import { Image, SafeAreaView,StatusBar, StyleSheet, Text, View } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import * as colors from "../utilities/colors"

const Splash = ({ navigation }) => {

    const handleLoad = async () => {
        const timeout = setTimeout(() => {
            navigation.replace('Onboard')
        }, 2000)

        return () => {
            clearTimeout(timeout)
        }
    }
    useEffect(() => {
        handleLoad()
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
        resizeMode:'contain'
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