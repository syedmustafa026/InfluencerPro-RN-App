import React, { useState, useRef } from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { Header } from '../components/Header'
import { useDispatch } from 'react-redux'

import Toast from "../components/Toast"

import * as fonts from '../utilities/fonts'
import * as colors from "../utilities/colors"

const Signin = ({ navigation }) => {
    const handleSignup = () => navigation.navigate('Signup')
    const handleForgotPassword = () => { }

    const passwordRef = useRef()
    const [togglePassword, setTogglePassword] = useState(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [laoding, setLoading] = useState(false)


    const handleSignin = async () => {

        if (!username && !password) throw new Error('Enter the required feilds')
        if (!username) throw new Error('Enter username')
        if (!password) throw new Error('Enter password')

        const payload = {
            username,
            password,
        }

        navigation.replace('BottomNavigator')
    }

    return (
        <View style={styles.container}>
            <StatusBar
                barStyle="light-content"
                backgroundColor={colors.white}
            />
            <View style={styles.section}>
                <View style={styles.header}>
                    <Text style={styles.h1}>Let's Sign you in</Text>
                    <Text style={styles.h4}>Welcome to Company</Text>
                </View>

                <TextInput
                    theme={{ colors: { text: colors.primary, placeholder: colors.primaryLight, } }}
                    mode="outlined"
                    label="Username or Email"
                    activeOutlineColor={colors.primaryLight}
                    outlineColor={colors.primaryLight}
                    keyboardType="email-address"
                    returnKeyType="next"
                    style={styles.input}
                    left={<TextInput.Icon
                        name="account-outline"
                        color={colors.primaryLight}
                        size={20}
                        forceTextInputFocus={false}
                    />}
                    onChangeText={(value) => setUsername(value)}
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
                        name="lock-outline"
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
    footerButton: {
        width: '100%',
        marginVertical: 8,
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

export default Signin