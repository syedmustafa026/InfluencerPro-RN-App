import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Alert, Linking, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import * as colors from "../../utilities/colors"
import * as functions from "../../utilities/functions"
import * as fonts from "../../utilities/fonts"
import Separator from "../../components/Separator";

const Profile = ({ navigation }) => {
  const [influencer, setInfluencer] = useState(null)
  console.log(influencer);
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
      Toast(error.message || "Server Error")
    }
  }
  const getInfluencers = async () => {
    try {
      const response = await functions.getItem("user")
      if (!response) throw new Error(response.message)
      if (response) {
        setInfluencer(response)
      }
    } catch (error) {
      Toast(error.message || "Server Error")
    }
  }
  useEffect(() => {
    getInfluencers()
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.box}>
            <Text style={styles.topicHeading}>Profile</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("About", influencer)} style={styles.selectRow}>
              <View>
                <View style={styles.row}>
                  <Text style={styles.selectText}>About you</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                </View>
              </View>
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Address", influencer)} style={styles.selectRow}>
              <View>
                <View style={styles.row}>
                  <Text style={styles.selectText}>Address</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                </View>
              </View>
            </TouchableOpacity>
            <Separator />
            <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate("Socials", influencer)} style={styles.selectRow}>
              <View>
                <View style={styles.row}>
                  <Text style={styles.selectText}>Social Channels</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                </View>
              </View>
            </TouchableOpacity>

          </View>
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
  
})
export default Profile
