import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import { TouchableRipple } from 'react-native-paper';
import Separator from '../components/Separator';

const PaymentMethod = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: 'center', marginVertical: 16 }}>
      </View>
      <TouchableRipple
        rippleColor={colors.gray300}
        onPress={() => navigation.navigate('Checkout')}
        style={styles.card}>
        <View>
          <View style={{ margin: 5, paddingTop: 14, marginHorizontal: 14 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <Text numberOfLines={1} style={{ color: colors.black, fontFamily: fonts.SEMIBOLD, fontSize: 16, marginBottom: 4 }} >
                Account Balance </Text>
            </View>
            <Separator />
            <Text style={styles.h4}>No Pending Dues</Text>
          </View>
          <View >
            <Text style={styles.h2}>All pending Dues are paid out in first week of every month</Text>
          </View>
        </View>
      </TouchableRipple>
      <View>
        <View style={{ margin: 5, paddingTop: 14, marginHorizontal: 14 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text numberOfLines={1} style={{ color: colors.black, fontFamily: fonts.SEMIBOLD, fontSize: 16, marginBottom: 4 }} >
              Transactions </Text>
          </View>
          <Separator />
        </View>
        <View >
          <Text style={styles.h2}>You dont have any transactions yet. Your earnings and payouts will be reflected here</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.white,

  },
  h1: {
    color: colors.black,
    fontSize: 18,
    zIndex: 2,
    fontFamily: fonts.BOLD,
    textAlign: 'center',

  },
  h2: {
    fontSize: 16,
    color: colors.gray,
    fontFamily: fonts.MEDIUM,
    marginBottom: 14,
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop:8,
  },
  h4: {
    fontSize: 18,
    color: colors.black,
    textAlign: 'center',
    fontFamily: fonts.MEDIUM,
    marginHorizontal: 12,
    marginTop: 10
  },
  button: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 8,
    paddingHorizontal: 14,
    width: wp('80'),
    marginTop: hp('2'),
    height: 54,
    borderColor: colors.black,
    borderWidth: .6,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  card: {
    width: "98%",
    height: hp('23'),
    borderColor: colors.white,
    borderWidth: 1,
    backgroundColor: colors.gray100,
    marginBottom: 8,
    marginHorizontal: 4,
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
});

export default PaymentMethod;