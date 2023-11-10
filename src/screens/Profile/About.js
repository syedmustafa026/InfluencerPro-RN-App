import React, { useState, useEffect } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native'
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as functions from "../../utilities/functions"
import Separator from "../../components/Separator"

const About = ({ navigation, route }) => {
  const influencer = route.params
  console.log(influencer);
  useEffect(() => {
    navigation.setOptions({
      title: 'Edit Profile',
      headerRight: (props) => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate("EditProfile", influencer)} activeOpacity={0.6} style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={{ fontSize: 16, margin: 4, color: colors.black, fontFamily: fonts.SEMIBOLD }}>Edit</Text>
          </TouchableOpacity >)
      }

    })
  }, [])
  { `${influencer?.features[0].feature.name} (${influencer?.features[0].feature.description})` }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ backgroundColor: colors.white }}>
          <View style={styles.gapRow}>
          </View>
          <Image style={styles.image} source={{ uri: influencer?.image_url } || require('../../assets/images/avatar.jpeg')} />
          <Text style={styles.h1}>{influencer?.name} {influencer?.last_name} </Text>
        </View>
        <Text style={styles.topicHeading}>Categories</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.selectRow}>
          <View>
            <Text style={styles.selectText}>{influencer?.user_professional_detail.professional_category || "  -  "}</Text>
            <View style={{ flexDirection: 'row' }}>
            </View>
          </View>
        </TouchableOpacity>
        <Separator />
        <Text style={styles.topicHeading}>Features</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.selectRow}>
          <View>
            <Text style={styles.selectText}>{influencer?.features[0].feature.name != undefined ? `${influencer?.features[0].feature.name} (${influencer?.features[0].feature.description})` : "  -  "}</Text>
            <View style={{ flexDirection: 'row' }}>
            </View>
          </View>
        </TouchableOpacity>
        <Separator />
        <Text style={styles.topicHeading}>Nationality</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.selectRow}>
          <View>
            <Text style={styles.selectText}>{influencer?.country?.name || "  -  "}</Text>
            <View style={{ flexDirection: 'row' }}>
            </View>
          </View>
        </TouchableOpacity>
        <Separator />
        <Text style={styles.topicHeading}>Gender</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.selectRow}>
          <View>
            <Text style={styles.selectText}>{influencer?.personal_information?.gender || "  -  "}</Text>
            <View style={{ flexDirection: 'row' }}>
            </View>
          </View>
        </TouchableOpacity>
        <Separator />
        <Text style={styles.topicHeading}>Dialects</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.selectRow}>
          <View>
            <Text style={styles.selectText}>{influencer?.personal_information?.dialects || "  -  "}</Text>
            <View style={{ flexDirection: 'row' }}>
            </View>
          </View>
        </TouchableOpacity>
        <Separator />
        <Text style={styles.topicHeading}>Hair Type</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.selectRow}>
          <View>
            <Text style={styles.selectText}>{influencer?.personal_information?.hair_type || "  -  "}</Text>
            <View style={{ flexDirection: 'row' }}>
            </View>
          </View>
        </TouchableOpacity>
        <Separator />
        <Text style={styles.topicHeading}>Hair color</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.selectRow}>
          <View>
            <Text style={styles.selectText}>{influencer?.personal_information?.hair_color || "  -  "}</Text>
            <View style={{ flexDirection: 'row' }}>
            </View>
          </View>
        </TouchableOpacity>
        <Separator />
        <Text style={styles.topicHeading}>Ethnicity</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.selectRow}>
          <View>
            <Text style={styles.selectText}>{influencer?.personal_information?.ethnicity.name || "  -  "}</Text>
            <View style={{ flexDirection: 'row' }}>
            </View>
          </View>
        </TouchableOpacity>
        <Separator />
        <Text style={styles.topicHeading}>Age</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.selectRow}>
          <View>
            <Text style={styles.selectText}>{influencer?.personal_information?.age || "  -  "}</Text>
            <View style={{ flexDirection: 'row' }}>
            </View>
          </View>
        </TouchableOpacity>
        <Separator />
        <Text style={styles.topicHeading}>Valid License</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.selectRow}>
          <View>
            <Text style={styles.selectText}>{influencer?.personal_information?.valid_license}</Text>
            <View style={{ flexDirection: 'row' }}>
            </View>
          </View>
        </TouchableOpacity>
        <Separator />
        <Text style={styles.topicHeading}>Tattoes</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.selectRow}>
          <View>
            <Text style={styles.selectText}>{influencer?.personal_information?.tattoes}</Text>
            <View style={{ flexDirection: 'row' }}>
            </View>
          </View>
        </TouchableOpacity>
        <Separator />
        <Text style={styles.topicHeading}>Spoken Language</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.selectRow}>
          <View>
            <Text style={styles.selectText}>{influencer?.personal_information?.spoken_language.name || "  -  "}</Text>
            <View style={{ flexDirection: 'row' }}>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginVertical: -18
  },
  gapRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
  },
  image: {
    width: 160,
    height: 160,
    alignSelf: 'center',
    borderRadius: 80,
    resizeMode: 'contain'
  },
  topicHeading: {
    marginVertical: 6,
    color: colors.secondary,
    fontFamily: fonts.SEMIBOLD,
    marginLeft: 20,
  },
  selectRow: {
    paddingHorizontal: 5,
    paddingBottom: 24,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  selectText: {
    fontSize: 16,
    color: colors.gray,
    marginLeft: 16,
    fontFamily: fonts.SEMIBOLD,
    textTransform: 'capitalize'
  },
  h1: {
    fontSize: 20,
    color: colors.black,
    textAlign: 'center',
    fontFamily: fonts.SEMIBOLD,
    marginBottom: 24,
    marginTop: 12

  },
  button: {
    width: '20%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderWidth: 1
  },
  ButtonLabel: {
    color: colors.primaryLight,
    fontSize: 12,
    fontFamily: fonts.SEMIBOLD
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
})
export default About