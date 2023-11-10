import React, { useState, useEffect } from "react";
import { View, ActivityIndicator, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { Button, TextInput } from "react-native-paper";
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import * as functions from "../../utilities/functions"
import CountryListModal from "../List/CountryListModal";
import CityListModal from "../List/CityListModal";
import Toast from "../../components/Toast"
import StateListModal from "../List/StateListModal";

const Address = ({ navigation, route }) => {

  const influencer = route.params
  const [Flat, setFlat] = useState(influencer?.sector || '');
  const [city, setCity] = useState(influencer.city?.name || 'Select City');
  const [cityId, setCityId] = useState(influencer?.city_id || null);
  const [country, setCountry] = useState(influencer?.country?.name || 'Select Country');
  const [countryId, setCountryId] = useState(influencer?.country_id || null);
  const [state, setstate] = useState(influencer?.state?.name || 'Select State');
  const [stateId, setStateId] = useState(influencer?.state_id || null);
  const [postalCode, setpostalCode] = useState(influencer?.post_code || '')
  const [countryListModal, setCountryListModal] = useState(false)
  const [cityListModal, setCityListModal] = useState(false)
  const [stateModal, setStateModal] = useState(false)

  const saveAddress = async () => {
    try {
      const payload = {
        country_id: countryId,
        city_id: cityId,
        state_id: stateId,
        sector: Flat,
        post_code: postalCode
      }
      const response = await functions.updateInfluencerAddress(payload)
      if (!response.status) throw new Error(response.message)
      if (response.status) {
        Toast(response.message)
        navigation.goBack()
      }
    } catch (error) {
      Toast(error.message)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
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
      <StateListModal
        modalVisible={stateModal}
        setModalVisible={setStateModal}
        setState={setstate}
        countryId={countryId}
        setStateId={setStateId}
      />
      <ScrollView>
        <TouchableOpacity activeOpacity={0.7} onPress={() => setCountryListModal(true)} >
          <View style={styles.row}>
            <Text style={styles.h1}>Country</Text>
            <Text style={styles.h2}>{country}</Text>
          </View>
        </TouchableOpacity>
        <View>
          <TextInput
            label="House number/Sector/Area/Street"
            value={Flat}
            mode='outlined'
            activeOutlineColor={colors.primary}
            style={styles.input}
            onChangeText={text => setFlat(text)}
          />
          {/* <TextInput
            label="Area, Sector,Street"
            value={Area}
            mode='outlined'
            activeOutlineColor={colors.primary}
            style={styles.input}
            onChangeText={text => setArea(text)}
          /> */}
          {/* <TextInput
            label="City"
            value={city}
            mode='outlined'
            activeOutlineColor={colors.primary}
            style={styles.input}
            onChangeText={text => setcity(text)}
          /> */}
          <TouchableOpacity
            onPress={() => { countryId != null ? setStateModal(true) : Toast("Please Select Country first") }}
            activeOpacity={0.6}
            style={styles.selectButton}>
            <Text style={styles.selectLabel}>{state}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { countryId != null ? setCityListModal(true) : Toast("Please Select Country first") }}
            activeOpacity={0.6}
            style={styles.selectButton}>
            <Text style={styles.selectLabel}>{city}</Text>
          </TouchableOpacity>
          {/* <TextInput
            label="State/Province/Region"
            value={state}
            mode='outlined'
            activeOutlineColor={colors.primary}
            style={styles.input}
            onChangeText={text => setstate(text)}
          /> */}
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
          onPress={saveAddress}
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
    fontSize: 16,
    color: colors.black,
    fontFamily: fonts.MEDIUM,
    textAlign: 'center',
    marginHorizontal: 8
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
    width: '95%',
    borderRadius: 4,
    height: 45,
    paddingHorizontal: 4,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1,
    marginVertical: 8,
    alignSelf: 'center',
  },
  selectLabel: {
    fontSize: hp("2.2"),
    color: colors.black,
    textAlign: 'justify',
    alignSelf: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
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
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default Address
