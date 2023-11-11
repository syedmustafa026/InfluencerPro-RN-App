import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import Separator from "./Separator";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'

const MessageRequest = (props) => {
  return (
    <>
      <TouchableOpacity activeOpacity={1} style={[{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, props.opened && { padding: 15, flexDirection: 'row', backgroundColor: colors.gray300 }]}>
        <View style={[{ padding: 15, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }, props.opened && { padding: 15, flexDirection: 'row', backgroundColor: colors.gray300 }]}>
          <Image style={styles.cardImg} source={{ uri: props.image }} />
          <View style={{ paddingHorizontal: 15, }}>
            <Text style={styles.h1}>{props.name}</Text>
            <Text style={styles.h2}>{props.latest_message}</Text>
            <Text style={styles.h4}>{props.time}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', }}>
          <Icon onPress={() => props.handleRequest(props.chat_id, 'accepted', props.data)} name='checkbox-marked-circle' color={colors.success} size={36} />
          <Entypo onPress={() => props.handleRequest(props.chat_id, 'rejected', props.data)} name='circle-with-cross' color={colors.red} size={36} />
        </View>
      </TouchableOpacity>
      <Separator />
    </>
  )
}
const styles = StyleSheet.create({
  cardImg: {
    width: 50,
    height: 50,
  },
  h1: {
    color: colors.black,
    fontSize: 14,
    zIndex: 2,
    fontFamily: fonts.BOLD,
  },
  h2: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.MEDIUM,
    marginVertical: 2
  },
  h4: {
    fontSize: 12,
    color: colors.gray,
    fontFamily: fonts.BOLD,
    marginVertical: 2
  },
})
export default MessageRequest