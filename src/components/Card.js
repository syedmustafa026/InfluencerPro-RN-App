import React from "react"
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"

import { useNavigation } from "@react-navigation/native"
import Separator from "./Separator"

const Card = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('InfluencerDetails')}
      style={styles.card}>
      <View>
        <MaterialIcon
          style={styles.favIcon}
          name='star'
          size={28}
          color={colors.primary} />
        <Image style={styles.cardImg} source={require('../assets/images/avatar.jpeg')} />
        <View style={{ margin: 5, padding: 4 }}>
          <Text numberOfLines={1} style={{ color: colors.primary, fontFamily: fonts.SEMIBOLD, fontSize: 18, marginBottom: 4 }} >No: 175506  </Text>
          <Text numberOfLines={1} style={{ color: colors.black, fontFamily: fonts.SEMIBOLD, fontSize: 18, marginBottom: 4 }} >Noraiz  <Icon name='check-decagram' size={16} color={colors.blue} /> </Text>
          <Text numberOfLines={1} style={{ color: colors.black, fontFamily: fonts.REGULAR, marginTop: 4, marginRight: 8 }} ><Text style={{ fontFamily: fonts.BOLD }}>Categories </Text> Travel,Fashion,Blog </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
            <Text style={{ fontFamily: fonts.BOLD, color: colors.black, marginRight: 8 }}> Reviews:</Text>
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
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 12 }}>
            <Icon
              name='map-marker-outline'
              size={24}
              color={colors.gray} />
            <Text numberOfLines={1} style={{ color: colors.black, fontFamily: fonts.REGULAR }} >Based in: United States of America</Text>
          </View>
          <Separator />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginHorizontal: 8 }}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.button}>
            <Icon
              name='facebook'
              size={18}
              color={colors.blue} />
            <Text style={{ color: colors.black, paddingHorizontal: 10, fontSize: 18, fontFamily: fonts.SEMIBOLD }}>1M </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.button}>
            <Icon
              name='instagram'
              size={18}
              color={colors.pink} />
            <Text style={{ color: colors.black, paddingHorizontal: 10, fontSize: 18, fontFamily: fonts.SEMIBOLD }}>206k</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.button}>
            <FontAwesome5
              name='tiktok'
              size={18}
              color={colors.pink} />
            <Text style={{ color: colors.black, paddingHorizontal: 10, fontSize: 18, fontFamily: fonts.SEMIBOLD }}>7k</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  favIcon: {
    position: 'absolute',
    zIndex: 2,
    top: 10,
    right: 10
  },
  card: {
    width: "95%",
    height: hp('53'),
    borderColor: colors.white,
    borderWidth: 1,
    backgroundColor: colors.gray100,
    marginBottom: 16,
    marginHorizontal: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderRadius: 10,
    elevation: 4,
    marginVertical: 8
  },
  cardImg: {
    width: "100%",
    height: hp('23'),
    borderRadius: 10,
    resizeMode:'contain',
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  cardText: {
    fontSize: 14,
    color: colors.black,
    marginHorizontal: 6,
    fontFamily: fonts.REGULAR
  },
  button: {
    borderRadius: 8,
    marginHorizontal: 4,
    backgroundColor: colors.white,
    width: wp('25'),
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    zIndex: 2,
    borderWidth: 0.4,
    borderColor: colors.gray
  },
})
export default Card