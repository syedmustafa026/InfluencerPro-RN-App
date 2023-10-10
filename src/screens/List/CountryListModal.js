import React, { useState, useEffect } from 'react';
import { Modal, FlatList, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import * as colors from "../../utilities/colors"
import * as fonts from "../../utilities/fonts"
import Separator from '../../components/Separator'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as functions from '../../utilities/functions'

const Item = ({ item, handlePress }) => {
  return (
    <>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.5} style={styles.row}>
        <Text style={styles.h2}>{item.name}</Text>
      </TouchableOpacity>
      <Separator />
    </>
  )
}

const CountryListModal = (props) => {

  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)

  const getCountries = async () => {
    const response = await functions.getCountries()
    if (response.status) {
      setLoading(false)
      setCountries(response.data)
    }
  }
  const selectItem = (item) => {
    props.setCountry(item.name)
    props.setModalVisible(false)
    props.setCountryId(item.id)
  }
  useEffect(() => {
    getCountries()
  }, [])

  return (
    <Modal
      animationType="slide"
      visible={props.modalVisible}
      onDismiss={() => props.setModalVisible(false)}
    >
      {loading ?
        <View style={styles.errorContainer}>
          <ActivityIndicator animating={true} size={"medium"} color={colors.primary} />
        </View>
        : <SafeAreaView style={styles.container} >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity onPress={() => props.setModalVisible(false)}>
                <Icon
                  onPress={() => props.setModalVisible(false)}
                  style={{
                    position: 'absolute',
                  }}
                  name='close'
                  size={26}
                  color={colors.black} />
              </TouchableOpacity>
              <View style={{ justifyContent: 'center', marginVertical: 8 }}>
                <Text style={styles.h1}>{"Select your Country"}</Text>
                <Text style={styles.h4}>{"In which you're currently living in."}</Text>
              </View>
              <FlatList
                data={countries}
                renderItem={({ item }) => (<Item item={item} handlePress={() => selectItem(item)} />)}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </SafeAreaView >}
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white
  },
  modalView: {
    width: wp('100'),
    height: hp('105'),
    backgroundColor: 'white',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  row: {
    justifyContent: 'flex-start',
    marginTop: 18
  },


  h1: {
    color: colors.black,
    fontSize: 24,
    zIndex: 2,
    fontFamily: fonts.SEMIBOLD,
    textAlign: 'center',
  },
  h2: {
    fontSize: 18,
    color: colors.black,
    fontFamily: fonts.MEDIUM,
    marginBottom: 26,
    marginHorizontal: 20
  },
  h4: {
    fontSize: 14,
    color: colors.black,
    fontFamily: fonts.REGULAR,
    textAlign: 'center'
  },
  img: {
    width: 500,
    height: 250,
    resizeMode: 'contain',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 8,
    alignSelf: 'center',
    paddingHorizontal: 14,
    width: wp('85'),
    height: 48,
    backgroundColor: colors.gray200,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginTop: 12
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default CountryListModal;