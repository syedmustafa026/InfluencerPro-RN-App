import React, { useState, useEffect } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Button, RadioButton, TextInput } from "react-native-paper";
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

const PaymentDetails = ({ navigation }) => {

  const [Flat, setFlat] = useState("");
  const [Area, setArea] = useState("");

  const [value, setValue] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.h4}>Set your paypal or UPI detials where you want to recieve your payments</Text>

      <View>
        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
          <RadioButton.Item label="PayPal" value="first" />
          {value === 'first' && <TextInput
            label={"Paypal email address"}
            value={Flat}
            mode='flat'
            activeOutlineColor={colors.primary}
            style={styles.input}
            onChangeText={text => setFlat(text)}
          />}
          <RadioButton.Item label="UPI" value="second" />
          {value === 'second' && <TextInput
            label={"UPL handle"}
            placeholder="eg: phone@okici.com"
            value={Area}
            mode=''
            activeOutlineColor={colors.primary}
            style={styles.input}
            onChangeText={text => setArea(text)}
          />}
        </RadioButton.Group>

      </View>

      <Button
        onPress={() => { navigation.goBack() }}
        mode="contained"
        color={colors.white}
        style={[styles.button, { marginTop: 16, backgroundColor: colors.primary }]}
        labelStyle={[styles.ButtonLabel, { color: colors.white }]}
      >Submit</Button>
    </SafeAreaView >
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,
  },
  h1: {
    color: colors.black,
    fontSize: 18,
    marginHorizontal: 8,
    zIndex: 2,
    fontFamily: fonts.SEMIBOLD,
  },
  h2: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.BOLD,
    marginBottom: 14,
    textAlign: 'center',
    marginHorizontal: 20
  },
  h4: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.MEDIUM,
    textAlign: 'center'
  },
  row: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 4,
    marginHorizontal: 6,
  },
  button: {
    width: '95%',
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1
  },
  ButtonLabel: {
    fontSize: hp("2.2"),
    color: colors.black,
    fontFamily: fonts.SEMIBOLD,
  },
  selectButton: {
    width: '100%',
    borderRadius: 5,
    height: 45,
    paddingHorizontal: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1,
    marginTop: 8
  },
  selectLabel: {
    fontSize: hp("2"),
    color: colors.gray,
    textAlign: 'justify',
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontFamily: fonts.SEMIBOLD,
  },
  input: {
    width: '95%',
    marginVertical: 8,
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderBlockColor: colors.gray,
    color: colors.gray,
    fontFamily: fonts.SEMIBOLD
  },
})
export default PaymentDetails
