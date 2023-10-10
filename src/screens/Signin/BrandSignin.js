import React, { useState, useRef } from 'react'
import { StatusBar, StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

import Toast from "../../components/Toast"

import * as fonts from '../../utilities/fonts'
import * as colors from "../../utilities/colors"
import * as functions from "../../utilities/functions"

const BrandSignin = ({ navigation }) => {

    const handleSignup = () => navigation.navigate('Signup')
    const handleForgotPassword = () => { }

    const passwordRef = useRef()
    const [togglePassword, setTogglePassword] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [laoding, setLoading] = useState(false)


    const handleSignin = async () => {
        try {
            setLoading(true)
            if (!email && !password) throw new Error('Enter the required feilds')
            if (!email) throw new Error('Enter email')
            if (!password) throw new Error('Enter password')

            const payload = {
                email: email,
                password: password,
            }
            const response = await functions.login(payload)
            console.log(response);
            if (!response.status) throw new Error(response.message)
            if (response.status) {
                await functions.setItem("user", response.user)
                await functions.setItem("token", response.token.token)
                navigation.replace("BottomNavigator")
            }
        } catch (error) {
            Toast(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.white}
            />
            <View style={styles.section}>
                <TextInput
                    theme={{ colors: { text: colors.primary, placeholder: colors.primaryLight, } }}
                    mode="outlined"
                    label="Brand Email"
                    activeOutlineColor={colors.primaryLight}
                    outlineColor={colors.primaryLight}
                    keyboardType="email-address"
                    returnKeyType="next"
                    style={styles.input}
                    left={<TextInput.Icon
                        icon="account-outline"
                        color={colors.primaryLight}
                        size={20}
                        forceTextInputFocus={false}
                    />}
                    onChangeText={(value) => setEmail(value)}
                    onSubmitEditing={() => passwordRef.current.focus()}
                />
                <TextInput
                    theme={{ colors: { text: colors.primary, placeholder: colors.primaryLight, } }}
                    outlineColor={colors.primaryLight}
                    activeOutlineColor={colors.primaryLight}
                    ref={passwordRef}
                    mode="outlined"
                    label="Password"
                    secureTextEntry={togglePassword}
                    style={styles.input}
                    left={<TextInput.Icon
                        icon="lock-outline"
                        color={colors.primaryLight}
                        size={20}
                        forceTextInputFocus={false}
                    />}
                    right={<TextInput.Icon

                        name={togglePassword ? "eye-off-outline" : "eye-outline"}
                        size={20}
                        color={colors.primaryLight}
                        forceTextInputFocus={false}
                        onPress={() => setTogglePassword(!togglePassword)}
                    />}
                    onChangeText={(value) => setPassword(value)}
                />

                <View style={styles.forgotPassword}>
                    <Text style={styles.forgotPasswordText} onPress={handleForgotPassword}>Forgot Password?</Text>
                </View>
                <Button
                    loading={laoding ? true : false}
                    mode="contained"
                    color={colors.primary}
                    onPress={handleSignin}
                    style={styles.footerButton}
                    contentStyle={styles.footerButtonContent}
                    labelStyle={styles.ButtonLabel}
                >SIGN IN</Button>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.button}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require("../../assets/images/google.png")}
                    />
                    <Text style={{ color: 'gray', paddingHorizontal: 15, textAlign: 'center', fontSize: 16, fontFamily: fonts.REGULAR }}>Sign in with Google</Text>
                </TouchableOpacity>

                <View style={styles.signup}>
                    <Text
                        onPress={handleSignup}
                        style={styles.signupText}
                    >
                        Don't have an account? Sign up
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    section: {
        flex: 1,
        paddingHorizontal: wp("8"),
        marginTop: 36,
        justifyContent: 'center',
    },
    header: {
        justifyContent: 'flex-end',
        marginVertical: hp("2"),
    },
    h1: {
        fontSize: hp("4"),
        color: colors.primary,
        marginVertical: 4,
        fontFamily: fonts.BOLD
    },
    h4: {
        fontSize: hp("2"),
        marginVertical: 4,
        fontFamily: fonts.SEMIBOLD,
        color: colors.primaryLight
    },
    input: {
        width: '100%',
        backgroundColor: colors.white,
    },
    signup: {
        marginVertical: hp("1"),
        paddingHorizontal: wp("2"),
    },
    signupText: {
        fontSize: hp("2"),
        textAlign: 'center',
        fontFamily: fonts.SEMIBOLD,
        color: colors.primaryLight
    },
    forgotPassword: {
        marginVertical: hp("2.2"),
    },
    forgotPasswordText: {
        fontFamily: fonts.BOLD,
        color: colors.primaryLight
    },
    button: {
        flexDirection: 'row',
        backgroundColor: 'white',
        alignSelf: 'center',
        width: wp('78'),
        marginVertical: 8,
        borderColor: colors.black,
        borderWidth: .6,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerButton: {
        alignSelf: 'center',
        width: wp('80'),
        marginVertical: 8,
        backgroundColor: colors.secondaryLight,
        borderRadius: 10,
    },
    footerButtonContent: {
        paddingVertical: 8,
    },
    ButtonLabel: {
        fontSize: hp("2.2"),
        color: colors.white,
        fontFamily: fonts.SEMIBOLD
    }
})

export default BrandSignin