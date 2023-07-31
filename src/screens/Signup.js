import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

import Toast from "../components/Toast"

import {  validateEmail, validatePassword  } from '../utilities/validations'

import * as fonts from '../utilities/fonts'
import * as colors from '../utilities/colors'


const Signup = ({ navigation }) => {
    const emailRef = useRef()
    const mobileRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const [togglePassword, setTogglePassword] = useState(true)
    const [toggleConfirmPassword, setToggleConfirmPassword] = useState(true)
    const [laoding, setLoading] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const handleSignup = async () => {
        try {
            setLoading(true)
            if (!name && !email && !username) throw new Error('Enter the required feilds')
            if (!name) throw new Error('Enter name')
            if (!email) throw new Error('Enter email')
            if (!validateEmail(email)) throw new Error('Enter valid email')
            if (!mobile) throw new Error('Enter mobile')
            if (!username) throw new Error('Enter username')
            if (!password) throw new Error('Enter password')
            if (!validatePassword(password)) throw new Error('Enter minimum 6 digits password')
            if (!confirmPassword) throw new Error('Confirm your password')
            if (password !== confirmPassword) throw new Error('Password not matched')

            navigation.replace('BottomNavigator')
        } catch (error) {
            Toast(error.message)
        }
        finally {
            setLoading(false)
        }
    }
    const handleSignin = () => navigation.navigate('Signin')
    const handleTerms = () => Linking.openURL("https://influencerspro.jdesigntechnologies.com/")
    const handlePrivacy = () => Linking.openURL("https://influencerspro.jdesigntechnologies.com/")

    return (
        <View style={styles.container}>
            <ScrollView keyboardShouldPersistTaps={'always'} style={styles.section}>
                <View style={styles.header}>
                    <Text style={styles.h1}>Getting started</Text>
                    <Text style={styles.h4}>Create an account to continue!</Text>
                </View>

                <TextInput
                    theme={{ colors: { text: colors.primary, placeholder: colors.primaryLight, } }}
                    outlineColor={colors.primaryLight}
                    activeOutlineColor={colors.primaryLight}
                    mode="outlined"
                    label="Full Name"
                    returnKeyType="next"
                    style={styles.input}
                    left={<TextInput.Icon
                        name="account-outline"
                        color={colors.primaryLight}
                        size={20}
                        forceTextInputFocus={false}
                    />}
                    maxLength={50}
                    onChangeText={(value) => setName(value)}
                    onSubmitEditing={() => emailRef.current.focus()}
                />

                <TextInput
                    theme={{ colors: { text: colors.primary, placeholder: colors.primaryLight, } }}
                    outlineColor={colors.primaryLight}
                    activeOutlineColor={colors.primaryLight}
                    ref={emailRef}
                    mode="outlined"
                    label="Email"
                    keyboardType="email-address"
                    returnKeyType="next"
                    style={styles.input}
                    left={<TextInput.Icon
                        name="email-outline"
                        color={colors.primaryLight}
                        size={20}
                        forceTextInputFocus={false}
                    />}
                    maxLength={100}
                    onChangeText={(value) => setEmail(value)}
                    onSubmitEditing={() => mobileRef.current.focus()}
                />

                <TextInput
                    theme={{ colors: { text: colors.primary, placeholder: colors.primaryLight, } }}
                    outlineColor={colors.primaryLight}
                    activeOutlineColor={colors.primaryLight}
                    ref={mobileRef}
                    mode="outlined"
                    label="Mobile"
                    keyboardType="number-pad"
                    returnKeyType="next"
                    style={styles.input}
                    left={<TextInput.Icon
                        name="cellphone"
                        color={colors.primaryLight}
                        size={20}
                        forceTextInputFocus={false}
                    />}
                    maxLength={11}
                    onChangeText={(value) => setMobile(value)}
                    onSubmitEditing={() => usernameRef.current.focus()}
                />

                <TextInput
                    theme={{ colors: { text: colors.primary, placeholder: colors.primaryLight, } }}
                    outlineColor={colors.primaryLight}
                    activeOutlineColor={colors.primaryLight}
                    ref={usernameRef}
                    mode="outlined"
                    label="Username"
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
                    returnKeyType="next"
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
                    onSubmitEditing={() => confirmPasswordRef.current.focus()}
                />

                <TextInput
                    theme={{ colors: { text: colors.primary, placeholder: colors.primaryLight, } }}
                    outlineColor={colors.primaryLight}
                    activeOutlineColor={colors.primaryLight}
                    ref={confirmPasswordRef}
                    mode="outlined"
                    label="Confirm Password"
                    secureTextEntry={toggleConfirmPassword}
                    style={styles.input}
                    left={<TextInput.Icon
                        name="lock-outline"
                        color={colors.primaryLight}
                        size={20}
                        forceTextInputFocus={false}
                    />}
                    right={<TextInput.Icon
                        name={toggleConfirmPassword ? "eye-off-outline" : "eye-outline"}
                        size={20}
                        color={colors.primaryLight}
                        forceTextInputFocus={false}
                        onPress={() => setToggleConfirmPassword(!toggleConfirmPassword)}
                    />}
                    onChangeText={(value) => setConfirmPassword(value)}
                />

                <View style={styles.terms}>
                    <Text style={styles.termsText}>By Signing up you agree to our {<Text style={styles.bold} onPress={handleTerms}>Terms &amp; Conditions</Text>} and {<Text style={styles.bold} onPress={handlePrivacy}>Privacy Policy</Text>}.</Text>
                </View>
                <Button
                    loading={laoding ? true : false}
                    mode="contained"
                    color={colors.primary}
                    onPress={handleSignup}
                    style={styles.footerButton}
                    contentStyle={styles.footerButtonContent}
                    labelStyle={styles.ButtonLabel}
                >SIGN UP</Button>

                <View style={styles.signin}>
                    <Text
                        onPress={handleSignin}
                        style={styles.signinText}
                    >
                        Already have an account? Sign in
                    </Text>
                </View>
            </ScrollView>
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
        fontFamily: fonts.BOLD
    },
    h4: {
        fontSize: hp("2"),
        marginVertical: hp("0.4"),
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
        marginVertical: hp("1"),
    },
    footerButtonContent: {
        paddingVertical: hp("1"),
    },
    ButtonLabel: {
        fontSize: hp("2.2"),
        color: colors.white,
        fontFamily: fonts.SEMIBOLD
    }
})

export default Signup