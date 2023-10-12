import React, { useState, useEffect } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Slider from '../components/MultiSliders'
import { Button, Switch, TextInput } from "react-native-paper";
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import * as functions from "../utilities/functions"
import Dropdown from "../components/Dropdown";
import Toast from "../components/Toast";

const InfluencerFilter = ({ navigation }) => {
  const [category, setcategory] = useState('Model')
  const [language, setlanguage] = useState('British')
  const [Ethnicity, setEthnicity] = useState('Asian')
  const [Nationality, setNationality] = useState('Arabic')
  const [gender, setGender] = useState('Male')

  const [modal1, setModal1] = useState(false)
  const [modal2, setModal2] = useState(false)
  const [modal3, setModal3] = useState(false)
  const [modal4, setModal4] = useState(false)
  const [modal5, setModal5] = useState(false)
  const [modal6, setModal6] = useState(false)
  const [modal7, setModal7] = useState(false)

  const [Facebook, setFacebook] = useState(false);
  const [Instagram, setInstagram] = useState(false);
  const [Youtube, setYoutube] = useState(false);
  const [Tiktok, setTiktok] = useState(false);
  const [nano, setNano] = useState(false);
  const [micro, setMicro] = useState(false);
  const [macro, setMacro] = useState(false);
  const [mega, setMega] = useState(false);
  const [text, setText] = useState("")
  const [BasedIn, setBasedIn] = useState("Ex: UK")
  const [region, setregion] = useState("Ex: london")
  const [ageFrom, setAgeFrom] = useState(1)
  const [ageTo, setAgeTo] = useState(40)

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity activeOpacity={0.6} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 14, margin: 4, color: colors.black, fontFamily: fonts.SEMIBOLD }}>Clear All</Text>
          </TouchableOpacity >)
      }
    })
  }, [])

  const filterChanges = async () => {
    try {
      const payload = {
        country_id: 1,
        state_id: 2,
        city_id: 2,
        category_id: 1,
        instagram: Instagram,
        facebook: Facebook,
        tiktok: Tiktok,
        Youtube: Youtube,
        nano: nano,
        micro: micro,
        macro: macro,
        mega: mega,
        gender: gender,
        min_value: ageFrom,
        max_value: ageTo,
        ethnicity_id: 1,
        influencer_name: text,
        spoken_language_id: 2

      }
      console.log(payload);
      const response = await functions.filterInfluencer(payload)
      if (!response) throw new Error(response.message)
      if (response.status) {
        console.log(response)
        navigation.goBack()
      }
      else {
        Toast("No Influencer Found")
      }
    } catch (error) {
      Toast(error.message || "Server Error")
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.h1}>Gender</Text>
        <Dropdown
          data={['Male', 'Female', 'Binary']}
          style={styles.input}
          value={gender}
          toggleModal={() => setModal7(!modal7)}
          modal={modal7}
          setModal={setModal7}
          setValue={setGender} />
        <Text style={styles.h1}>Influencer Category</Text>
        <Dropdown
          data={['Beauty', 'Fashion', 'Fitness', 'Foodie', 'Lifestyle', 'Music']}
          style={styles.input}
          value={category}
          toggleModal={() => setModal1(!modal1)}
          modal={modal1}
          setModal={setModal1}
          setValue={setcategory} />

        <Text style={styles.h1}>Spoken Languages</Text>
        <Dropdown
          data={['French', 'English', 'British']}
          style={styles.input}
          value={language}
          toggleModal={() => setModal2(!modal2)}
          modal={modal2}
          setModal={setModal2}
          setValue={setlanguage} />
        <Text style={styles.h1}>Search By Following</Text>
        <View style={styles.row}>
          <View style={styles.row}>
            <Text style={styles.h4}>Nano(1-10k)  </Text>
          </View>
          <Switch value={nano} color={colors.primary} onValueChange={() => setNano(!nano)} />
        </View>
        <View style={styles.row}>
          <View style={styles.row}>
            <Text style={styles.h4}>Micro(10-100k)  </Text>
          </View>
          <Switch value={micro} color={colors.primary} onValueChange={() => setMicro(!micro)} />
        </View>
        <View style={styles.row}>
          <View style={styles.row}>
            <Text style={styles.h4}>Macro(100-1M)  </Text>
          </View>
          <Switch value={macro} color={colors.primary} onValueChange={() => setMacro(!macro)} />
        </View>
        <View style={styles.row}>
          <View style={styles.row}>
            <Text style={styles.h4}>Mega(1M-10M)  </Text>
          </View>
          <Switch value={mega} color={colors.primary} onValueChange={() => setMega(!mega)} />
        </View>
        <Text style={styles.h1}>Nationality</Text>
        <Dropdown
          data={['Arabic', 'French', 'Asian']}
          style={styles.input}
          value={Nationality}
          toggleModal={() => setModal3(!modal3)}
          modal={modal3}
          setModal={setModal3}
          setValue={setNationality} />

        <Text style={styles.h1}>Ethnicity Look</Text>
        <Dropdown
          data={['Asian', 'European', 'African']}
          style={styles.input}
          value={Ethnicity}
          toggleModal={() => setModal4(!modal4)}
          modal={modal4}
          setModal={setModal4}
          setValue={setEthnicity} />
        <View>
          <Text style={styles.h1}>Search By name</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <TextInput
              placeholder="Enter Model Name"
              label=""
              value={text}
              mode='outlined'
              activeOutlineColor={colors.gray}
              style={styles.input}
              onChangeText={text => setText(text)}
            />
          </View>
          <Text style={styles.h1}>Age ({ageFrom} - {ageTo})</Text>
          <View style={{ alignItems: 'center' }}>
            <Slider setAgeFrom={setAgeFrom} setAgeTo={setAgeTo} />
          </View>
        </View>
        <Text style={styles.h1}>Based In</Text>
        <Dropdown
          data={['London', 'Dubai']}
          style={styles.input}
          value={BasedIn}
          toggleModal={() => setModal5(!modal5)}
          modal={modal5}
          setModal={setModal5}
          setValue={setBasedIn} />
        <Text style={styles.h1}>Region</Text>
        <Dropdown
          data={['Uk', 'London']}
          style={styles.input}
          value={region}
          toggleModal={() => setModal6(!modal6)}
          modal={modal6}
          setModal={setModal6}
          setValue={setregion} />
        <Text style={styles.h1}>Search By Platform</Text>
        <View style={styles.row}>
          <View style={styles.row}>
            <Icon
              name='facebook'
              size={22}
              color={colors.blue} />
            <Text style={styles.h4}>Facebook  </Text>
          </View>
          <Switch value={Facebook} color={colors.blue} onValueChange={() => setFacebook(!Facebook)} />
        </View>
        <View style={styles.row}>
          <View style={styles.row}>
            <Icon
              name='instagram'
              size={22}
              color={colors.pink} />
            <Text style={styles.h4}>Instagram  </Text>
          </View>
          <Switch value={Instagram} color={colors.pink} onValueChange={() => setInstagram(!Instagram)} />
        </View>
        <View style={styles.row}>
          <View style={styles.row}>
            <Icon
              name='youtube'
              size={22}
              color={colors.red} />
            <Text style={styles.h4}>Youtube  </Text>
          </View>
          <Switch value={Youtube} color={colors.red} onValueChange={() => setYoutube(!Youtube)} />
        </View>
        <View style={styles.row}>
          <View style={styles.row}>
            <FontAwesome5
              name='tiktok'
              size={22}
              color={colors.pink} />
            <Text style={styles.h4}>Tiktok  </Text>
          </View>
          <Switch value={Tiktok} color={colors.pink} onValueChange={() => setTiktok(!Tiktok)} />
        </View>
        <Button
          onPress={filterChanges}
          mode="contained"
          color={colors.white}
          style={[styles.button, { marginTop: 16, backgroundColor: colors.primary }]}
          labelStyle={[styles.ButtonLabel, { color: colors.white }]}
        >Done</Button>
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
export default InfluencerFilter
