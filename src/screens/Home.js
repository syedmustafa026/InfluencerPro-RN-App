import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-paper'

import * as fonts from '../utilities/fonts'
import * as colors from "../utilities/colors"

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.h2}>You have not partnered up with any Influencer</Text>
      <Button
        onPress={() => { navigation.navigate("Categories") }}
        mode="contained"
        color={colors.white}
        style={styles.button}
        labelStyle={styles.ButtonLabel}
      >Explore Influencers</Button>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding:10
  },
  h1: {
    color: colors.black,
    fontSize: 20,
    zIndex: 2,
    fontFamily: fonts.BOLD,
  },
  h2: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.BOLD,
textAlign:'center',
    marginVertical:10
  },
  h4: {
    fontSize: 12,
    color: colors.gray,
    fontFamily: fonts.REGULAR,
    marginHorizontal: 18,
    marginVertical:20
  },
  button: {
    width: '80%',
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.primary,

  },
  ButtonLabel: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.SEMIBOLD,
  },
})
export default Home