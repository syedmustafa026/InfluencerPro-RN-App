import React, { useState, useEffect } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Slider from '../components/MultiSliders'
import { Button, Switch, TextInput } from "react-native-paper";
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import Dropdown from "../components/Dropdown";

const InfluencerFilter = ({ navigation }) => {
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

  const [Facebook, setFacebook] = useState(false);
  const [Instagram, setInstagram] = useState(false);
  const [Youtube, setYoutube] = useState(false);
  const [Tiktok, setTiktok] = useState(false);
  const [text, setText] = useState("")
  const [BasedIn, setBasedIn] = useState("UK")
  const [region, setregion] = useState("london")

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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.h1}>Influencer Category</Text>
        <Dropdown
          data={['Beauty', 'Fashion', 'Fitness', 'Foodie', 'Lifestyle', 'Music']}
          style={styles.input}
          value={category}
          toggleModal={() => setModal1(!modal1)}
          modal={modal1}
          setModal={setModal1}
          setValue={setcategory} />
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
          <Switch value={Facebook} color={colors.primary} onValueChange={() => setFacebook(!Facebook)} />
        </View>
        <View style={styles.row}>
          <View style={styles.row}>
            <Text style={styles.h4}>Micro(10-100k)  </Text>
          </View>
          <Switch value={Instagram} color={colors.primary} onValueChange={() => setInstagram(!Instagram)} />
        </View>
        <View style={styles.row}>
          <View style={styles.row}>
            <Text style={styles.h4}>Macro(100-1M)  </Text>
          </View>
          <Switch value={Youtube} color={colors.primary} onValueChange={() => setYoutube(!Youtube)} />
        </View>
        <View style={styles.row}>
          <View style={styles.row}>
            <Text style={styles.h4}>Mega(1M-10M)  </Text>
          </View>
          <Switch value={Tiktok} color={colors.primary} onValueChange={() => setTiktok(!Tiktok)} />
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
          data={['Angora', 'UK', 'London']}
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
          <Text style={styles.h1}>Age</Text>
          <View style={{ alignItems: 'center' }}>
            <Slider />
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
        <Text style={styles.h1}>Gender</Text>
        <View style={styles.row}>
          <View style={styles.row}>
            <Text style={styles.h4}>Male  </Text>
          </View>
          <Switch value={Facebook} color={colors.primary} onValueChange={() => setFacebook(!Facebook)} />
        </View>
        <View style={styles.row}>
          <View style={styles.row}>
            <Text style={styles.h4}>Female  </Text>
          </View>
          <Switch value={Instagram} color={colors.primary} onValueChange={() => setInstagram(!Instagram)} />
        </View>
        <View style={styles.row}>
          <View style={styles.row}>
            <Text style={styles.h4}>Binary  </Text>
          </View>
          <Switch value={Tiktok} color={colors.primary} onValueChange={() => setTiktok(!Tiktok)} />
        </View>
        <Button
          onPress={() => { navigation.goBack() }}
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
    height: 45,
    color: colors.gray,
    fontFamily: fonts.SEMIBOLD
  },
})
export default InfluencerFilter
