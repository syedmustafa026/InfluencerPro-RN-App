import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View, SafeAreaView } from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import * as functions from "../utilities/functions"
import ThinNameRow from '../components/ThinNameRow'
import { categories } from '../utilities/categories'
import Separator from '../components/Separator'

const Categories = ({ route, navigation }) => {
  const [categories, setCategories] = useState(false)

  const getCategories = async () => {
    try {
      const response = await functions.getCategories()
      if (!response.status) throw new Error(response.message)
      if (response.status) {
        setCategories(response.categories)
      }
    } catch (error) {
      Toast(error.message || "Server Error")
    }
  }
  useEffect(() => {
    getCategories()
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View style={{ justifyContent: 'center', marginBottom: 1 }}>
            <FlatList
              data={categories}
              renderItem={({ item }) => (<ThinNameRow name={item.name} handlePress={() => navigation.navigate('Influencers', { title: item.name, id: item.id })} />)}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={<Separator />}
              ListFooterComponent={<Separator />}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  modalView: {
    width: wp('100'),
    backgroundColor: 'white',
    padding: 20,

  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  h1: {
    color: colors.black,
    fontSize: 24,
    zIndex: 2,
    fontFamily: fonts.BOLD,
    fontFamily: fonts.BOLD,
    textAlign: 'center',
  },
  h2: {
    fontSize: 18,
    color: colors.black,
    fontFamily: fonts.SEMIBOLD,
  },
  h4: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.REGULAR,
    textAlign: 'center'
  },
})

export default Categories