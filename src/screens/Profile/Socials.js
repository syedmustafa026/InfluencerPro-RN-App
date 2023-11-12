import React, { useState, useEffect } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Button, Switch, TextInput } from "react-native-paper";
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import * as functions from "../../utilities/functions"

import Toast from "../../components/Toast"

const Socials = ({ navigation, route }) => {
  const socials = route.params?.social_media_profiles || []

  const [facebook, setFacebook] = useState(socials[0]?.username || "");
  const [instagram, setInstagram] = useState(socials[1]?.username || "");
  const [twitter, setTwitter] = useState(socials[2]?.username || "");
  const [tiktok, setTiktok] = useState(socials[3]?.username || "");
  const [youtube, setYoutube] = useState(socials[4]?.username || "")
  const [linkedIn, setLinkedIn] = useState(socials[5]?.username || "")
  const [pinterest, setPinterest] = useState(socials[6]?.username || "")
  const [website, setWebsite] = useState(socials[7]?.username || "")

  const [facebookFollowers, setFacebookFollowers] = useState(socials[0]?.followers || "")
  const [instagramFollowers, setInstagramFollowers] = useState(socials[1]?.followers || "")
  const [twitterFollowers, setTwitterFollowers] = useState(socials[2]?.followers || "")
  const [tiktokFollowers, setTiktokFollowers] = useState(socials[3]?.followers || "")
  const [youtubeFollowers, setYoutubeFollowers] = useState(socials[4]?.followers || "")
  const [pinterestFollowers, setPinterestFollowers] = useState(socials[5]?.followers || "")
  const [linkedInFollowers, setLinkedInFollowers] = useState(socials[6]?.followers || "")

  const saveSocials = async () => {
    try {
      const payload = {
        instagram: 'on',
        instagram_username: instagram,
        instagram_followers: instagramFollowers,
        twitter: 'on',
        twitter_username: twitter,
        twitter_followers: twitterFollowers,
        tiktok: 'on',
        tiktok_username: tiktok,
        tiktok_followers: tiktokFollowers,
        facebook: 'on',
        facebook_username: facebook,
        facebook_followers: facebookFollowers,
        linkedin: 'on',
        linkedin_username: linkedIn,
        linkedin_followers: linkedInFollowers,
        pinterest: 'on',
        pinterest_username: pinterest,
        pinterest_followers: pinterestFollowers,
        website: 'on',
        website_username: website,
        website_followers: 0,
        youtube: 'on',
        youtube_username: youtube,
        youtube_followers: youtubeFollowers
      }
      const response = await functions.updateInfluencerSocialMedia(payload)
      if (!response.status) throw new Error(response.message)
      if (response.status) {
        navigation.goBack()
        Toast(response.message)
      }
    } catch (error) {
      Toast(error.message || `${route.name} Server Error`)
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <View style={styles.row}>
            <TextInput
              label="Facebook "
              value={facebook}
              mode='outlined'
              activeOutlineColor={colors.primary}
              style={styles.input}
              right={<TextInput.Icon icon={'facebook'} size={20} color={colors.primaryLight} />}
              onChangeText={text => setFacebook(text)}
            />
            <TextInput
              label="Followers"
              value={facebookFollowers}
              keyboardType='number-pad'
              mode='outlined'
              activeOutlineColor={colors.primary}
              style={styles.input}
              onChangeText={text => setFacebookFollowers(text)}
            />
          </View>
          <View style={styles.row}>
            <TextInput
              label="TikTok"
              value={tiktok}
              mode='outlined'
              activeOutlineColor={colors.primary}
              style={styles.input}
              onChangeText={text => setTiktok(text)}
            />
            <TextInput
              label="Followers"
              value={tiktokFollowers}
              keyboardType='number-pad'
              mode='outlined'
              activeOutlineColor={colors.primary}
              style={styles.input}
              onChangeText={text => setTiktokFollowers(text)}
            />
          </View>
          <View style={styles.row}>
            <TextInput
              label="Instagram"
              value={instagram}
              mode='outlined'
              activeOutlineColor={colors.primary}
              style={styles.input}
              right={<TextInput.Icon icon={'instagram'} size={20} color={colors.primaryLight} />}
              onChangeText={text => setInstagram(text)}
            />
            <TextInput
              label="Followers"
              value={instagramFollowers}
              keyboardType='number-pad'
              mode='outlined'
              activeOutlineColor={colors.primary}
              style={styles.input}
              onChangeText={text => setInstagramFollowers(text)}
            />
          </View>
          <View style={styles.row}>
            <TextInput
              label="Youtube"
              value={youtube}
              mode='outlined'
              activeOutlineColor={colors.primary}
              style={styles.input}
              right={<TextInput.Icon icon={'youtube'} size={20} color={colors.primaryLight} />}
              onChangeText={text => setYoutube(text)}
            />
            <TextInput
              label="Subscribers"
              value={youtubeFollowers}
              keyboardType='number-pad'
              mode='outlined'
              activeOutlineColor={colors.primary}
              style={styles.input}
              onChangeText={text => setYoutubeFollowers(text)}
            />
          </View>
          <View style={styles.row}>
            <TextInput
              label="Twitter"
              value={twitter}
              mode='outlined'
              activeOutlineColor={colors.primary}
              style={styles.input}
              right={<TextInput.Icon icon={'twitter'} size={20} color={colors.primaryLight} />}
              onChangeText={text => setTwitter(text)}
            />
            <TextInput
              label="Followers"
              value={twitterFollowers}
              keyboardType='number-pad'
              mode='outlined'
              activeOutlineColor={colors.primary}
              style={styles.input}
              onChangeText={text => setTwitterFollowers(text)}
            />
          </View>
          <View style={styles.row}>
            <TextInput
              label="LinkedIn"
              value={linkedIn}
              mode='outlined'
              activeOutlineColor={colors.primary}
              style={styles.input}
              right={<TextInput.Icon icon={'linkedin'} size={20} color={colors.primaryLight} />}
              onChangeText={text => setLinkedIn(text)}
            />
            <TextInput
              label="Connects"
              value={linkedInFollowers}
              keyboardType='number-pad'
              mode='outlined'
              activeOutlineColor={colors.primary}
              style={styles.input}
              onChangeText={text => setLinkedInFollowers(text)}
            />
          </View>
          <View style={styles.row}>
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
              label="Followers"
              value={pinterestFollowers}
              keyboardType='number-pad'
              mode='outlined'
              activeOutlineColor={colors.primary}
              style={styles.input}
              onChangeText={text => setPinterestFollowers(text)}
            />
          </View>
          <TextInput
            label="Website/Blog"
            value={website}
            mode='outlined'
            activeOutlineColor={colors.primary}
            style={[styles.input, { width: "95%" }]}
            right={<TextInput.Icon icon={'web'} size={20} color={colors.primaryLight} />}
            onChangeText={text => setWebsite(text)}
          />
        </View>

        <Button
          onPress={saveSocials}
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
    justifyContent: 'space-evenly',
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
    width: '45%',
    marginVertical: 8,
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderBlockColor: colors.gray,
    color: colors.gray,
    fontFamily: fonts.SEMIBOLD
  },
})
export default Socials
