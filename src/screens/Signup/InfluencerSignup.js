import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Linking } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

import Toast from "../../components/Toast"

import { validateEmail, validatePassword } from '../../utilities/validations'

import * as fonts from '../../utilities/fonts'
import * as colors from '../../utilities/colors'
import * as functions from '../../utilities/functions'


const InfluencerSignup = ({ navigation }) => {
    const emailRef = useRef()
    const locationRef = useRef()
    const mobileRef = useRef()
    const lastNameRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const [togglePassword, setTogglePassword] = useState(true)
    const [toggleConfirmPassword, setToggleConfirmPassword] = useState(true)
    const [laoding, setLoading] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const handleSignup = async () => {
        try {
            setLoading(true)
            if (!firstName && !lastName && !email && !password) throw new Error('Enter the required feilds')
            if (!firstName) throw new Error('Enter First name')
            if (!lastName) throw new Error('Enter Last name')
            if (!email) throw new Error('Enter email')
            if (!validateEmail(email)) throw new Error('Enter valid email')
            if (!mobile) throw new Error('Enter mobile')
            if (!password) throw new Error('Enter password')
            if (!validatePassword(password)) throw new Error('Enter minimum 6 digits password')
            if (!confirmPassword) throw new Error('Confirm your password')
            if (password !== confirmPassword) throw new Error('Password not matched')
            else if (mobile && validateEmail(email) && validatePassword(password)) {
                const payload = {
                    role: 'influencer',
                    name: firstName,
                    last_name: lastName,
                    phone: mobile,
                    email: email,
                    password: password,
                    confirm_password: confirmPassword,
                    agreed_to_terms: "on",
                }
                const response = await functions.register(payload)
                console.log(response);
                if (!response.status) throw new Error(response.message)
                Toast("Register Successfully")
                navigation.navigate("Signin")
            }
        } catch (error) {
            if (error.message === "The password format is invalid.") {
                Toast("8 chars,1 capital 1 special char and 1 number is must")
            }
            else{
                Toast(error.message)
            }
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
                <TextInput
                    theme={{ colors: { text: colors.primary, placeholder: colors.primaryLight, } }}
                    outlineColor={colors.primaryLight}
                    activeOutlineColor={colors.primaryLight}
                    ref={lastNameRef}
                    mode="outlined"
                    label="First Name"
                    returnKeyType="next"
                    style={styles.input}
                    onChangeText={(value) => setFirstName(value)}
                    onSubmitEditing={() => passwordRef.current.focus()}
                />

                <TextInput
                    theme={{ colors: { text: colors.primary, placeholder: colors.primaryLight, } }}
                    outlineColor={colors.primaryLight}
                    activeOutlineColor={colors.primaryLight}
                    mode="outlined"
                    label="Last Name"
                    returnKeyType="next"
                    style={styles.input}
                    maxLength={50}
                    onChangeText={(value) => setLastName(value)}
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
                    value={mobile}
                    keyboardType="number-pad"
                    returnKeyType="next"
                    style={styles.input}
                    maxLength={11}
                    onChangeText={(value) => setMobile(value)}
                    onSubmitEditing={() => locationRef.current.focus()}
                    left={<TextInput.Affix text="+971" />}
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
                    right={<TextInput.Icon
                        icon={togglePassword ? "eye-off-outline" : "eye-outline"}
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
                    right={<TextInput.Icon
                        icon={toggleConfirmPassword ? "eye-off-outline" : "eye-outline"}
                        size={20}
                        color={colors.primaryLight}
                        forceTextInputFocus={false}
                        onPress={() => setToggleConfirmPassword(!toggleConfirmPassword)}
                    />}
                    onChangeText={(value) => setConfirmPassword(value)}
                />
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.button}>
                    <Image
                        style={{ width: 30, height: 30 }}
                        source={require("../../assets/images/google.png")}
                    />
                    <Text style={{ color: 'gray', paddingHorizontal: 15, textAlign: 'center', fontSize: 16, fontFamily: fonts.REGULAR }}>Sign in with Google</Text>
                </TouchableOpacity>
                <View style={styles.terms}>
                    <Text style={styles.termsText}>By signing up you agree to our {<Text style={styles.bold} onPress={handleTerms}>terms &amp; Conditions</Text>} and {<Text style={styles.bold} onPress={handlePrivacy}>privacy policy</Text>}.</Text>
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
        paddingVertical: 20
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
        marginBottom: 26,
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
        fontSize: 12,
        marginHorizontal: 12,
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

export default InfluencerSignup