import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, StatusBar, View } from "react-native"
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Onboarding from "react-native-onboarding-swiper";
import * as colors from "../utilities/colors.js"
import * as fonts from "../utilities/fonts"

const Splash = ({ navigation }) => {
    const Done = () => (
        <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
    );
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.white}
            />
            <Onboarding
                containerStyles={{ marginBottom: hp("8") }}
                bottomBarColor="#f7f7f7"
                onSkip={() => navigation.navigate("Signup")}
                DoneButtonComponent={Done}
                titleStyles={{ color: colors.primary, fontFamily: fonts.BOLD }}
                subTitleStyles={{ marginHorizontal: 25, textAlign: "center", fontFamily: fonts.SEMIBOLD }}
                pages={[
                    {
                        backgroundColor:
                            "#f7f7f7",
                        image:
                            <Image style={styles.img} source={require("../assets/images/img2.png")} />,
                        title:
                            "Work with top influencers",
                        subtitle:
                            "Choose over 1000+ influencers of different catogeries to collaborate with",
                    },
                    {
                        backgroundColor:
                            "#f7f7f7",
                        image:
                            <Image style={styles.img} source={require("../assets/images/img3.png")} />,
                        title:
                            "Get paid for your content",
                        subtitle:
                            "Promote your favorite influencer on your brand social media and get paid in the process ",
                    },
                    {
                        backgroundColor:
                            "#f7f7f7",
                        image:
                            <Image style={styles.img} source={require("../assets/images/img1.png")} />,
                        title:
                            "Zero hassle payments",
                        subtitle:
                            "You handle the content we'l handle the payments. Get fast regular and guaranteed payouts on your collabs",
                    },
                ]}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    img: {
        width: 500,
        height: 250,
        resizeMode: "contain",
    },
    DoneIcon: {
        margin: 10
    },
    buttonText: {
        fontSize: 18,
        color: colors.primary,
        margin: 10,
        fontWeight: "bold"
    }
})

export default Splash