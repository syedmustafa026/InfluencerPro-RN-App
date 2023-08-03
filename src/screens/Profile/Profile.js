import React from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableRipple } from "react-native-paper";
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import Separator from "../../components/Separator";


const Profile = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={styles.box}>
            <Text style={styles.topicHeading}>Profile</Text>
            <TouchableRipple rippleColor={colors.gray200} onPress={() => navigation.navigate("About")} style={styles.selectRow}>
              <View>
                <View style={styles.row}>
                  <Text style={styles.selectText}>About you</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                </View>
              </View>
            </TouchableRipple>
            <Separator />
            <TouchableRipple rippleColor={colors.gray200} onPress={() => navigation.navigate("Address")} style={styles.selectRow}>
              <View>
                <View style={styles.row}>
                  <Text style={styles.selectText}>Address</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                </View>
              </View>
            </TouchableRipple>
            <Separator />
            <TouchableRipple rippleColor={colors.gray200} onPress={() => console.log("clicked")} style={styles.selectRow}>
              <View>
                <View style={styles.row}>
                  <Text style={styles.selectText}>Social Channels</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                </View>
              </View>
            </TouchableRipple>

          </View>
          <View style={styles.box}>
            <Text style={styles.topicHeading}>Payout Settings</Text>
            <TouchableRipple rippleColor={colors.gray200} onPress={() => console.log("clicked")} style={styles.selectRow}>
              <View>
                <View style={styles.row}>
                  <Text style={styles.selectText}>Payment Details</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                </View>
              </View>
            </TouchableRipple>
            <Separator />
            <TouchableRipple rippleColor={colors.gray200} onPress={() => console.log("clicked")} style={styles.selectRow}>
              <View>
                <View style={styles.row}>
                  <Text style={styles.selectText}>Payment History</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                </View>
              </View>
            </TouchableRipple>

          </View>
          <View style={styles.box}>
            <Text style={styles.topicHeading}>Contact us</Text>
            <TouchableRipple rippleColor={colors.gray200} onPress={() => console.log("clicked")} style={styles.selectRow}>
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
            </TouchableRipple>
            <Separator />
            <TouchableRipple rippleColor={colors.gray200} onPress={() => console.log("clicked")} style={styles.selectRow}>
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
            </TouchableRipple>

          </View>
          <View style={styles.box}>
            <Text style={styles.topicHeading}>Settings</Text>
            <TouchableRipple rippleColor={colors.gray200} onPress={() => console.log("clicked")} style={styles.selectRow}>
              <View>
                <View style={styles.row}>
                  <Text style={styles.selectText}>Settings</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                </View>
              </View>
            </TouchableRipple>
            <Separator />
            <TouchableRipple rippleColor={colors.gray200}
              onPress={() => {
                Alert.alert("Sure", "Are you sure you want to Logout?", [{
                  text: "Yes",
                  onPress: () => navigation.navigate("BottomNavigator")
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
            </TouchableRipple>

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