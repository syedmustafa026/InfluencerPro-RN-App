import React, { useState } from "react";
import { View, Image, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { Button } from "react-native-paper";
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import Separator from '../components/Separator'
import ChipComponent from "../components/ChipComponent";

const InfluencerDetails = ({ navigation, route }) => {
  const [makeOfferModal, setMakeOfferModal] = useState(false)
  const [confirmPhoneModal, setConfirmPhoneModal] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* header start */}
        <View style={{ position: 'relative' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backIcon}
            activeOpacity={0.5}>
            <Icon
              name="arrow-left"
              size={28}
              color={colors.black} />
          </TouchableOpacity>
          <Image style={styles.mainImg} source={require('../assets/images/avatar.jpeg')} />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.shareIcon, { right: 90, bottom: -20 }]}
            activeOpacity={0.5}>
            <MaterialIcon
              name="star-outline"
              size={28}
              style={{ alignSelf: 'center' }}
              color={colors.gray} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.shareIcon}
            activeOpacity={0.5}>
            <Icon
              name="share-variant"
              size={28}
              style={{ alignSelf: 'center' }}
              color={colors.gray} />
          </TouchableOpacity>
        </View>
        <View style={{
          padding: 15,
          paddingHorizontal: 20,
          backgroundColor: colors.white
        }}>
          <Text style={{ color: colors.primary, fontFamily: fonts.SEMIBOLD, fontSize: 20 }} >Christopher Nolan <Icon name='check-decagram' size={22} color={colors.blue} /></Text>
          <Text style={{ color: colors.black, fontFamily: fonts.SEMIBOLD, fontSize: 24, marginVertical: 8, marginBottom: 20 }} >Categories: <Text style={{ fontSize: 22 }}>Travel , Fashion , Blog.</Text></Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 18 }}>
            <Icon
              name='map-marker-outline'
              size={18}
              color={colors.orange} />
            <Text style={styles.h4}>Based in: Georgia</Text>
            <Icon
              name='map-marker-outline'
              size={18}
              color={colors.orange} />
            <Text style={styles.h4}>Nationality: Yogunda</Text>
          </View>
          <Separator />
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 18 }}>
            <Icon
              name='facebook'
              size={22}
              color={colors.blue} />
            <Text style={styles.h4}>3M  </Text>
            <Icon
              name='instagram'
              size={22}
              color={colors.pink} />
            <Text style={styles.h4}>1.2M  </Text>
            <FontAwesome5
              name='tiktok'
              size={22}
              color={colors.pink} />
            <Text style={styles.h4}> 102k likes</Text>
          </View>
        </View>
        {/* header finished */}

        {/* details start */}
        <View style={styles.box}>
          <Text style={styles.h2}>Personality</Text>
          <View>
            <View style={styles.row}>
              <Text style={styles.boldText}>Citizenship</Text>
              <Text style={styles.regularText}>United Arab Emirates</Text>
            </View>
            <Separator />
            <View style={styles.row}>
              <Text style={styles.boldText}>Age</Text>
              <Text style={styles.regularText}>23 year</Text>
            </View>
            <Separator />
            <View style={styles.row}>
              <Text style={styles.boldText}>Spoken Languages</Text>
              <Text style={styles.regularText}>English</Text>
            </View>
            <Separator />
            <View style={styles.row}>
              <Text style={styles.boldText}>English dialects</Text>
              <Text style={styles.regularText}>American/canadian</Text>
            </View>
            <Separator />
            <View style={styles.row}>
              <Text style={styles.boldText}>Ethnicity</Text>
              <Text style={styles.regularText}>Look Arab</Text>
            </View>
            <Separator />
            <View style={styles.row}>
              <Text style={styles.boldText}>Hair Type</Text>
              <Text style={styles.regularText}>Short</Text>
            </View>
            <Separator />
            <View style={styles.row}>
              <Text style={styles.boldText}>Hair color</Text>
              <Text style={styles.regularText}>Brown</Text>
            </View>
            <Separator />
            <View style={styles.row}>
              <Text style={styles.boldText}>Ethnicity</Text>
              <Text style={styles.regularText}>Look Arab</Text>
            </View>
            <Separator />
            <View style={styles.row}>
              <Text style={styles.boldText}>Reviews</Text>
              <View style={{ flexDirection: 'row' }}>
                <MaterialIcon
                  name='star'
                  size={18}
                  color={colors.yellow} />
                <MaterialIcon
                  name='star'
                  size={18}
                  color={colors.yellow} />
                <MaterialIcon
                  name='star'
                  size={18}
                  color={colors.yellow} />
                <MaterialIcon
                  name='star'
                  size={18}
                  color={colors.yellow} />
                <MaterialIcon
                  name='star'
                  size={18}
                  color={colors.yellow} />
              </View>
            </View>
          </View>
          <Button
            onPress={() => navigation.navigate("Message")}
            icon={'message-outline'}
            mode="contained"
            color={colors.white}
            style={[styles.button, { marginVertical: 18, }]}
            labelStyle={styles.ButtonLabel}
          >Start a Chat</Button>
        </View>
        {/* details finished */}
        {/* description start */}
        <View style={styles.box}>
          <Text style={styles.h2}>Art</Text>
          <Text style={[styles.h4, { marginTop: 4 }]}>club/freestyle/contemporary, desco, modern</Text>
        </View>
        {/* description finished */}
        <View style={styles.box}>
          <Text style={styles.h2}>I have the following</Text>
          <Text style={styles.h4}>Features</Text>
          <ChipComponent name={"Foot, Model,Saloon"} />
          <Text style={styles.h4}>Valid License:</Text>
          <ChipComponent name={" Car"} />
          <Text style={styles.h4}>Tattoes</Text>
          <ChipComponent name={" none"} />

        </View>
      </ScrollView>
      {/* Chat now start */}
      <View style={styles.box}>
        <Button
          onPress={() => navigation.navigate("Message")}
          mode="contained"
          style={styles.button}
          labelStyle={styles.ButtonLabel}
        >Click here to apply</Button>
      </View>
      {/* Chat now finish */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backIcon:
  {
    position: "absolute",
    padding: wp('1.1'),
    top: 15,
    left: 15,
    borderRadius: 100,
    zIndex: 3,
    backgroundColor: colors.white,
    height: 40,
    width: 40,
  },
  boldText: {
    color: colors.black,
    fontSize: 14,
    fontFamily: fonts.SEMIBOLD
  },
  regularText: {
    color: colors.gray,
    fontSize: 14,
    fontFamily: fonts.REGULAR
  },
  shareIcon: {
    position: "absolute",
    padding: wp('1.1'),
    bottom: -20,
    right: 40,
    borderRadius: 100,
    zIndex: 3,
    backgroundColor: colors.white,
    height: 40,
    width: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  mainImg: {
    width: "100%",
    height: hp('30'),
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  box:
  {
    padding: 15,
    paddingHorizontal: 20,
    marginTop: 10,
    backgroundColor: colors.white
  }
  ,
  h4: {
    fontSize: 14,
    color: colors.black,
    marginHorizontal: 14,
    marginTop: 6,
    fontFamily: fonts.REGULAR,
  },
  h2: {
    fontSize: 18,
    color: colors.black,
    marginHorizontal: 16,
    fontFamily: fonts.SEMIBOLD,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15
  },
  image: {
    width: wp('12'),
    height: hp('12'),
    resizeMode: 'contain'
  },
  button: {
    width: '90%',
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderWidth: 1
  },
  ButtonLabel: {
    fontSize: hp("2.2"),
    color: colors.primary,
    fontFamily: fonts.SEMIBOLD,
  },
  highlightedText: {
    fontFamily: fonts.SEMIBOLD,
    color: colors.primary,
    textAlign: 'center',
    fontSize: 14,
    marginVertical: 16
  }
})

export default InfluencerDetails