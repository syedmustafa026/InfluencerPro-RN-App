import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Linking } from 'react-native'
import { TextInput, Button } from 'react-native-paper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"

import Toast from "../../components/Toast"

import { validateEmail, validatePassword } from '../../utilities/validations'

import * as fonts from '../../utilities/fonts'
import * as colors from '../../utilities/colors'
import * as functions from '../../utilities/functions'
import CountryListModal from '../List/CountryListModal'
import CityListModal from '../List/CityListModal'


const BrandSignup = ({ navigation, route }) => {
    const emailRef = useRef()
    const locationRef = useRef()
    const mobileRef = useRef()
    const BrandNameRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()

    const [togglePassword, setTogglePassword] = useState(true)
    const [toggleConfirmPassword, setToggleConfirmPassword] = useState(true)
    const [laoding, setLoading] = useState(false)

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobile, setMobile] = useState('')
    const [city, setCity] = useState('City')
    const [country, setCountry] = useState('Country')
    const [countryId, setCountryId] = useState(null)
    const [cityId, setCityId] = useState('');
    const [countryListModal, setCountryListModal] = useState(false)
    const [cityListModal, setCityListModal] = useState(false)
    const [BrandName, setBrandName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSignup = async () => {
        try {
            setLoading(true)
            if (!name && !email && !BrandName && !password) throw new Error('Enter the required feilds')
            if (!name) throw new Error('Enter name')
            if (!email) throw new Error('Enter email')
            if (!validateEmail(email)) throw new Error('Enter valid email')
            if (!mobile) throw new Error('Enter mobile')
            if (!BrandName) throw new Error('Enter BrandName')
            if (!password) throw new Error('Enter password')
            if (!validatePassword(password)) throw new Error('Enter minimum 6 digits password')
            if (!confirmPassword) throw new Error('Confirm your password')
            if (password !== confirmPassword) throw new Error('Password not matched')
            else if (name && validateEmail(email) && validatePassword(password)) {
                const payload = {
                    role: 'vendor',
                    name: name,
                    brand_name: BrandName,
                    phone: mobile,
                    email: email,
                    country: country,
                    city: city,
                    password: password,
                    confirm_password: confirmPassword,
                    agreed_to_terms: "on",
                }
                const response = await functions.register(payload)
                if (!response.status) throw new Error(response.message)
                Toast("Register Successfully")
                navigation.replace("Signin")
            }
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
            <CountryListModal
                modalVisible={countryListModal}
                setModalVisible={setCountryListModal}
                setCountry={setCountry}
                setCountryId={setCountryId}
            />
            <CityListModal
                modalVisible={cityListModal}
                setModalVisible={setCityListModal}
                setCity={setCity}
                countryId={countryId}
                setCityId={setCityId}
            />
            <ScrollView keyboardShouldPersistTaps={'always'} style={styles.section}>
                <TextInput
                    theme={{ colors: { text: colors.primary, placeholder: colors.primaryLight, } }}
                    outlineColor={colors.primaryLight}
                    activeOutlineColor={colors.primaryLight}
                    ref={BrandNameRef}
                    mode="outlined"
                    label="BrandName"
                    returnKeyType="next"
                    style={styles.input}
                    onChangeText={(value) => setBrandName(value)}
                    onSubmitEditing={() => passwordRef.current.focus()}
                />

                <TextInput
                    theme={{ colors: { text: colors.primary, placeholder: colors.primaryLight, } }}
                    outlineColor={colors.primaryLight}
                    activeOutlineColor={colors.primaryLight}
                    mode="outlined"
                    label="Full Name"
                    returnKeyType="next"
                    style={styles.input}
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
                <TouchableOpacity
                    onPress={() => setCountryListModal(true)}
                    activeOpacity={0.6}
                    style={styles.selectButton}>
                    <Text style={styles.selectLabel}>{country}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { countryId != null ? setCityListModal(true) : Toast("Please Select Country first") }}
                    activeOpacity={0.6}
                    style={styles.selectButton}>
                    <Text style={styles.selectLabel}>{city}</Text>
                </TouchableOpacity>
                {/* <TextInput
                    theme={{ colors: { text: colors.primary, placeholder: colors.primaryLight, } }}
                    outlineColor={colors.primaryLight}
                    activeOutlineColor={colors.primaryLight}
                    ref={locationRef}
                    mode="outlined"
                    label="City"
                    returnKeyType="next"
                    style={styles.input}
                    maxLength={11}
                    onChangeText={(value) => setCity(value)}
                    onSubmitEditing={() => passwordRef.current.focus()}
                />
                <TextInput
                    theme={{ colors: { text: colors.primary, placeholder: colors.primaryLight, } }}
                    outlineColor={colors.primaryLight}
                    activeOutlineColor={colors.primaryLight}
                    ref={locationRef}
                    mode="outlined"
                    label="Country"
                    returnKeyType="next"
                    style={styles.input}
                    maxLength={11}
                    onChangeText={(value) => setCountry(value)}
                    onSubmitEditing={() => passwordRef.current.focus()}
                /> */}
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
                    <Text style={styles.termsText}>By signing up you agree to our {<Text style={styles.bold} onPress={handleTerms}>terms &amp; conditions</Text>} and {<Text style={styles.bold} onPress={handlePrivacy}>privacy policy</Text>}.</Text>
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
    selectButton: {
        width: '100%',
        borderRadius: 4,
        height: 45,
        paddingHorizontal: 4,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderColor: colors.primaryLight,
        borderWidth: 1,
        marginTop: 8,
    },
    selectLabel: {
        fontSize: hp("2.2"),
        color: colors.black,
        textAlign: 'justify',
        alignSelf: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
})

export default BrandSignup