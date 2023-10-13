import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Button } from 'react-native-paper'

import * as fonts from '../utilities/fonts'
import * as colors from "../utilities/colors"
import { getHeader } from '../utilities/functions'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.h3}>You have not partnered up with any Influencer</Text>
        <Button
          onPress={() => { navigation.navigate("Categories") }}
          mode="contained"
          color={colors.white}
          style={styles.button}
          labelStyle={styles.ButtonLabel}
        >Explore Influencers</Button>
        <View>
          <Text style={styles.h1}>Influencer Marketing Brief</Text>
          <Text style={styles.h2}>Influencers Market</Text>
          <Text style={styles.h4}>Lorem ipsum dolor sit amet consectetur.
            Nunc tristique neque tempor nisl feugiat lectus in. Placerat pharetra eleifend integer
            integer at. Nunc nunc eu arcu amet faucibus. Lorem ipsum dolor sit amet consectetur. Nunc</Text>
          <Image style={styles.image} source={{ uri: 'https://influencerspro.jdesigntechnologies.com/public/assets/img/dash-1.PNG' }} />
        </View>
        <View>
          <Text style={styles.h1}>Influencer Analyze Info</Text>
          <Text style={styles.h2}>Analyze any Influencer in the world</Text>
          <Text style={styles.h4}>Lorem ipsum dolor sit amet consectetur.
            Nunc tristique neque tempor nisl feugiat lectus in. Placerat pharetra eleifend integer
            integer at. Nunc nunc eu arcu amet faucibus. Lorem ipsum dolor sit amet consectetur. Nunc</Text>
          <Image style={styles.image} source={{ uri: 'https://influencerspro.jdesigntechnologies.com/public/assets/img/dash-1.PNG' }} />
        </View>
        <View>
          <Text style={styles.h1}>Influencer Marketing Boost Info</Text>
          <Text style={styles.h2}>Fuel your best influencer marketing strategies</Text>
          <Text style={styles.h4}>Lorem ipsum dolor sit amet consectetur.
            Nunc tristique neque tempor nisl feugiat lectus in. Placerat pharetra eleifend integer
            integer at. Nunc nunc eu arcu amet faucibus. Lorem ipsum dolor sit amet consectetur. Nunc</Text>
          <Image style={styles.image} source={{ uri: 'https://influencerspro.jdesigntechnologies.com/public/assets/img/dash-1.PNG' }} />
        </View>
        <View>
          <Text style={styles.h1}>Nationality Info</Text>
          <Text style={styles.h2}>Integrated analytics to guide your search</Text>
          <Text style={styles.h4}>Lorem ipsum dolor sit amet consectetur.
            Nunc tristique neque tempor nisl feugiat lectus in. Placerat pharetra eleifend integer
            integer at. Nunc nunc eu arcu amet faucibus. Lorem ipsum dolor sit amet consectetur. Nunc</Text>
          <Image style={styles.image} source={{ uri: 'https://influencerspro.jdesigntechnologies.com/public/assets/img/dash-1.PNG' }} />
        </View>
        <View>
          <Text style={styles.h1}>Demographic Info</Text>
          <Text style={styles.h2}>Understand audience demographic</Text>
          <Text style={styles.h4}>Lorem ipsum dolor sit amet consectetur.
            Nunc tristique neque tempor nisl feugiat lectus in. Placerat pharetra eleifend integer
            integer at. Nunc nunc eu arcu amet faucibus. Lorem ipsum dolor sit amet consectetur. Nunc</Text>
          <Image style={styles.image} source={{ uri: 'https://influencerspro.jdesigntechnologies.com/public/assets/img/dash-1.PNG' }} />
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 10
  },
  h1: {
    color: colors.primary,
    textAlign: 'center',
    fontSize: 24,
    zIndex: 2,
    marginTop: 20,
    fontFamily: fonts.BOLD,
    textDecorationLine: 'underline'
  },
  h2: {
    fontSize: 18,
    color: colors.black,
    fontFamily: fonts.BOLD,
    marginVertical: 15,
    marginHorizontal: 10
  },
  h3: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.SEMIBOLD,
    textAlign: 'center',
    marginVertical: 10
  },
  h4: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.MEDIUM,
    marginVertical: 5,
    marginHorizontal: 10
  },
  image: {
    height: 300,
    width: "90%",
    alignSelf: 'center',
    resizeMode: 'contain'
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