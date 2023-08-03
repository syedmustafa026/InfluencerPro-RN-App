import React, { useState, useEffect } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Button, Switch, TextInput, TouchableRipple } from "react-native-paper";
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

const Address = ({ navigation }) => {
  const [category, setcategory] = useState('Model')
  const [language, setlanguage] = useState('British')
  const [Ethnicity, setEthnicity] = useState('Asian')
  const [Nationality, setNationality] = useState('Arabic')

  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const [modal4, setModal4] = useState(false)
  const [modal5, setModal5] = useState(false)
  const [modal6, setModal6] = useState(false)

  const [Flat, setFlat] = useState(false);
  const [Area, setArea] = useState(false);
  const [city, setcity] = useState(false);
  const [state, setstate] = useState(false);
  const [postalCode, setpostalCode] = useState("")
  const [BasedIn, setBasedIn] = useState("UK")
  const [region, setregion] = useState("london")

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TouchableRipple rippleColor={colors.gray200} onPress={() => console.log("sss")} >
          <View style={styles.row}>
            <Text style={styles.h1}>Country</Text>
            <Text style={styles.h1}>India</Text>
          </View>
        </TouchableRipple>
        <View>
          <TextInput
            label="Flat. House No. Building"
            value={Flat}
            mode='outlined'
            activeOutlineColor={colors.primary}
            style={styles.input}
            onChangeText={text => setFlat(text)}
          />
          <TextInput
            label="Area, Sector,Street"
            value={Area}
            mode='outlined'
            activeOutlineColor={colors.primary}
            style={styles.input}
            onChangeText={text => setArea(text)}
          />
          <TextInput
            label="City"
            value={city}
            mode='outlined'
            activeOutlineColor={colors.primary}
            style={styles.input}
            onChangeText={text => setcity(text)}
          />
          <TextInput
            label="State/Province/Region"
            value={state}
            mode='outlined'
            activeOutlineColor={colors.primary}
            style={styles.input}
            onChangeText={text => setstate(text)}
          />
          <TextInput
            label="Postal Code"
            value={postalCode}
            mode='outlined'
            activeOutlineColor={colors.primary}
            style={styles.input}
            onChangeText={text => setpostalCode(text)}
          />
        </View>

        <Button
          onPress={() => { navigation.goBack() }}
          mode="contained"
          color={colors.white}
          style={[styles.button, { marginTop: 16, backgroundColor: colors.primary }]}
          labelStyle={[styles.ButtonLabel, { color: colors.white }]}
        >Save</Button>
      </ScrollView >
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
    fontFamily: fonts.REGULAR,
    marginHorizontal: 12,
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
export default Address
