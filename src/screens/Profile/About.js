import React, { useState, useEffect } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import * as functions from "../../utilities/functions"
import Separator from "../../components/Separator"

const About = ({ navigation }) => {
  const [influencer, setInfluencer] = useState(null)
  const [loading, setLoading] = useState(true)

  const getInfluencers = async () => {
    try {

      const response = await functions.getItem("user")
      if (!response) throw new Error(response.message)
      if (response) {
        setInfluencer(response)
        setLoading(false)
      }
    } catch (error) {
      Toast(error.message || "Server Error")
    }
  }
  console.log(loading);

  useEffect(() => {
    setLoading(true)
    getInfluencers()
  }, [])
  if (loading) {
    return (
      <View style={styles.errorContainer}>
        <ActivityIndicator animating={true} size={"medium"} color={colors.primary} />
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ backgroundColor: colors.white }}>
        <View style={styles.gapRow}>
        </View>
        <Image style={styles.image} source={{ uri: influencer?.image_url } || require('../../assets/images/avatar.jpeg')} />
        <Text style={styles.h1}>{influencer?.name} {influencer?.last_name} </Text>
      </View>
      <Text style={styles.topicHeading}>Bio</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("About")} style={styles.selectRow}>
        <View>
          <Text style={styles.selectText}>Write something about yourself</Text>
          <View style={{ flexDirection: 'row' }}>
          </View>
        </View>
      </TouchableOpacity>
      <Separator />
      <Text style={styles.topicHeading}>Date of Birth</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("About")} style={styles.selectRow}>
        <View>
          <Text style={styles.selectText}>19 March 1998</Text>
          <View style={{ flexDirection: 'row' }}>
          </View>
        </View>
      </TouchableOpacity>
      <Separator />
      <Text style={styles.topicHeading}>Gender</Text>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("About")} style={styles.selectRow}>
        <View>
          <Text style={styles.selectText}>Male</Text>
          <View style={{ flexDirection: 'row' }}>
          </View>
        </View>
      </TouchableOpacity>
      <Separator />

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
    color: colors.black,
    marginLeft: 16,
    fontFamily: fonts.SEMIBOLD
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