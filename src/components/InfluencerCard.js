import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"

import { TouchableRipple } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";


const InfluencerCard = () => {
  const navigation = useNavigation()
  return (
    <TouchableRipple
      rippleColor={colors.gray300}
      onPress={() => navigation.navigate('InfluencerDetails')}
      style={styles.card}>
      <View >
        <Image style={styles.cardImg} source={require('../assets/images/avatar.jpeg')} />
        <View style={{ margin: 5 }}>
          <Text numberOfLines={1} style={{ color: colors.black, fontFamily: fonts.SEMIBOLD, fontSize: 16 }} >Noraiz  <Icon name='check-decagram' size={14} color={colors.blue} /> </Text>
          <Text numberOfLines={1} style={{ color: colors.black, fontFamily: fonts.REGULAR, marginRight: 8, fontSize: 10 }} >Travel,Fashion,Blog </Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
            <MaterialIcon
              name='star'
              size={14}
              color={colors.yellow} />
            <MaterialIcon
              name='star'
              size={14}
              color={colors.yellow} />
            <MaterialIcon
              name='star'
              size={14}
              color={colors.yellow} />
            <MaterialIcon
              name='star'
              size={14}
              color={colors.yellow} />
            <MaterialIcon
              name='star'
              size={14}
              color={colors.yellow} />
          </View>
        </View>

      </View>
    </TouchableRipple>
  )
}
const styles = StyleSheet.create({
  card: {
    width: wp('30'),
    height: hp('18'),
    borderColor: colors.white,
    borderWidth: 1,
    backgroundColor: colors.gray100,
    marginBottom: 16,
    marginHorizontal: 6,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderRadius: 8,
    elevation: 4,
    marginVertical: 8
  },
  cardImg: {
    width: wp('30'),
    height: hp('9'),
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  }
})
export default InfluencerCard