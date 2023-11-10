import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, Text, SafeAreaView, StyleSheet, ScrollView, Alert, Linking, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as colors from "../../utilities/colors"
import { useIsFocused } from "@react-navigation/native";
import * as functions from "../../utilities/functions"
import * as fonts from "../../utilities/fonts"
import Separator from "../../components/Separator";
import Toast from '../../components/Toast'

const Profile = ({ navigation, route }) => {
  const [influencer, setInfluencer] = useState(null)
  const [influencerDetail, setInfluencerDetail] = useState(null)
  const focused = useIsFocused()
  const [loading, setLoading] = useState(true)

  const logoutUser = async () => {
    try {
      const response = await functions.logout()
      if (!response.status) throw new Error(response.message)
      if (response.status) {
        navigation.replace("Signin")
        await functions.removeItem("user")
        await functions.removeItem("token")
      }
    } catch (error) {
      Toast(error.message || `${route.name} Server Error`)
    }
  }
  const getInfluencer = async () => {
    try {
      const response = await functions.getItem("user")
      setInfluencer(response)
      getInfluencerDetails(response.id)
      if (!response.status) throw new Error(response.message)
    } catch (error) {
      Toast(error.message || `${route.name} Server Error`)
    }
  }
  const getInfluencerDetails = async (id) => {
    try {
      const influencer = await functions.getInfluencerDetail({
        influencer_id: id
      })
      setInfluencerDetail(influencer.data)
      setLoading(false)
      if (!influencer.status) throw new Error(influencer.message)
    } catch (error) {
      Toast(error.message || `${route.name} Server Error`)
    }
  }
  useEffect(() => {
    if (focused) {
      getInfluencer()
    }
  }, [focused])

  if (loading) {
    return (
      <View style={styles.errorContainer}>
        <ActivityIndicator animating={true} size={"medium"} color={colors.primary} />
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {influencer?.role.code === "influencer" &&
            <View style={styles.box}>
              <Text style={styles.topicHeading}>Profile</Text>
              <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("About", influencerDetail)} style={styles.selectRow}>
                <View>
                  <View style={styles.row}>
                    <Text style={styles.selectText}>About you</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                  </View>
                </View>
              </TouchableOpacity>
              <Separator />
              <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Address", influencerDetail)} style={styles.selectRow}>
                <View>
                  <View style={styles.row}>
                    <Text style={styles.selectText}>Address</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                  </View>
                </View>
              </TouchableOpacity>
              <Separator />
              <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Socials", influencerDetail)} style={styles.selectRow}>
                <View>
                  <View style={styles.row}>
                    <Text style={styles.selectText}>Social Channels</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                  </View>
                </View>
              </TouchableOpacity>

            </View>}
          <View style={styles.box}>
            <Text style={styles.topicHeading}>Payout Settings</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("PaymentDetails")} style={styles.selectRow}>
              <View>
                <View style={styles.row}>
                  <Text style={styles.selectText}>Payment Details</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                </View>
              </View>
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("PaymentHistory")} style={styles.selectRow}>
              <View>
                <View style={styles.row}>
                  <Text style={styles.selectText}>Payment History</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                </View>
              </View>
            </TouchableOpacity>

          </View>
          <View style={styles.box}>
            <Text style={styles.topicHeading}>Contact us</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => Linking.openURL('https://wa.me/923330269569')} style={styles.selectRow}>
              <View>
                <View style={styles.row}>
                  <Icon
                    name='whatsapp'
                    size={24}
                    color={colors.black} />
                  <Text style={styles.selectText}>WhatsApp</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                </View>
              </View>
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity activeOpacity={0.7} onPress={() => Linking.openURL('mailto:syedmustafaahmed026@gmail.com?subject=SendMail&body=Description')} style={styles.selectRow}>
              <View>
                <View style={styles.row}>
                  <Icon
                    name='email-outline'
                    size={24}
                    color={colors.black} />
                  <Text style={styles.selectText}>Email</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                </View>
              </View>
            </TouchableOpacity>

          </View>
          <View style={styles.box}>
            <Text style={styles.topicHeading}>Settings</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => Linking.openURL("https://influencerspro.jdesigntechnologies.com/")} style={styles.selectRow}>
              <View>
                <View style={styles.row}>
                  <Text style={styles.selectText}>Privacy Policy</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} onPress={() => Linking.openURL("https://influencerspro.jdesigntechnologies.com/")} style={styles.selectRow}>
              <View>
                <View style={styles.row}>
                  <Text style={styles.selectText}>Terms and Condition</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                </View>
              </View>
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity activeOpacity={0.7}
              onPress={() => {
                Alert.alert("Sure", "Are you sure you want to Logout?", [{
                  text: "Yes",
                  onPress: () => logoutUser()
                }, {
                  text: "Cancel",
                }], {
                  cancelable: true
                })
              }}
              style={styles.selectRow}>
              <View style={styles.row}>
                <Icon
                  name='power'
                  size={24}
                  color={colors.black} />
                <Text style={styles.selectText}>Logout</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </SafeAreaView >

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topicHeading: {
    color: colors.secondary,
    fontFamily: fonts.SEMIBOLD
  },
  selectRow: {
    paddingVertical: 15,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  selectText: {
    fontSize: 16,
    color: colors.black,
    paddingHorizontal: 15,
    fontFamily: fonts.SEMIBOLD
  },
  box: {
    padding: 15,
    paddingHorizontal: 20,
    width: "100%",
    marginTop: 10,
    backgroundColor: colors.white
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
})
export default Profile
