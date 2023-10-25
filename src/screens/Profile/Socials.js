import React, { useState, useEffect } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Button, Switch, TextInput } from "react-native-paper";
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"

const Socials = ({ navigation }) => {

  const [Flat, setInstagram] = useState('');
  const [Area, setTiktok] = useState('');
  const [city, setYoutube] = useState('');
  const [state, setTwitter] = useState('');
  const [postalCode, setLinkedIn] = useState("")
  const [pinterest, setPinterest] = useState("")
  const [website, setWebsite] = useState("")

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <TextInput
            label="Instagram Handle"
            value={Flat}
            mode='outlined'
            activeOutlineColor={colors.primary}
            style={styles.input}
            right={<TextInput.Icon icon={'instagram'} size={20} color={colors.primaryLight} />}
            onChangeText={text => setInstagram(text)}
          />
          <TextInput
            label="TikTok Handle"
            value={Area}
            mode='outlined'
            activeOutlineColor={colors.primary}
            style={styles.input}
            onChangeText={text => setTiktok(text)}
          />
          <TextInput
            label="Youtube Channel "
            value={city}
            mode='outlined'
            activeOutlineColor={colors.primary}
            style={styles.input}
            right={<TextInput.Icon icon={'youtube'} size={20} color={colors.primaryLight} />}
            onChangeText={text => setYoutube(text)}
          />
          <TextInput
            label="Twitter Handle"
            value={state}
            mode='outlined'
            activeOutlineColor={colors.primary}
            style={styles.input}
            right={<TextInput.Icon icon={'twitter'} size={20} color={colors.primaryLight} />}
            onChangeText={text => setTwitter(text)}
          />
          <TextInput
            label="LinkedIn Page"
            value={postalCode}
            mode='outlined'
            activeOutlineColor={colors.primary}
            style={styles.input}
            right={<TextInput.Icon icon={'linkedin'} size={20} color={colors.primaryLight} />}
            onChangeText={text => setLinkedIn(text)}
          />
          <TextInput
            label="Pinterest username"
            value={pinterest}
            mode='outlined'
            activeOutlineColor={colors.primary}
            style={styles.input}
            right={<TextInput.Icon icon={'pinterest'} size={20} color={colors.primaryLight} />}
            onChangeText={text => setPinterest(text)}
          />
          <TextInput
            label="Website/Blog"
            value={website}
            mode='outlined'
            activeOutlineColor={colors.primary}
            style={styles.input}
            right={<TextInput.Icon icon={'web'} size={20} color={colors.primaryLight} />}
            onChangeText={text => setWebsite(text)}
          />
        </View>

        <Button
          onPress={() => { navigation.goBack() }}
          mode="contained"
          color={colors.white}
          style={[styles.button, { marginTop: 16, backgroundColor: colors.primary }]}
          labelStyle={[styles.ButtonLabel, { color: colors.white }]}
        >Submit</Button>
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
export default Socials
