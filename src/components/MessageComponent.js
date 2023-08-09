import React from "react";
import { View, Image, Text, StyleSheet } from 'react-native'
import { Appbar, TouchableRipple } from "react-native-paper";
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import Separator from "./Separator";

const MessageComponent = (props) => {
  return (
    <>
      <TouchableRipple rippleColor={colors.gray} onPress={props.handlePress} style={[{ padding: 15, flexDirection: 'row' }, props.opened && { padding: 15, flexDirection: 'row', backgroundColor: colors.gray300 }]}>
        <>
          <Image style={styles.cardImg} source={require('../assets/images/avatar.jpeg')} />
          <View style={{ paddingHorizontal: 15, }}>
            <Text style={styles.h1}>John Doe</Text>
            <Text style={styles.h2}>Hello Developer!</Text>
            <Text style={styles.h4}>3 mins ago</Text>
          </View>
        </>
      </TouchableRipple>
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
export default MessageComponent