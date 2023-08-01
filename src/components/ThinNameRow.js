import React from 'react';
import { StyleSheet, Text,View, TouchableOpacity, } from 'react-native';
import { Badge } from 'react-native-paper';
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
const ThinNameRow = (props) => {
  return (
    <View style={{justifyContent:'space-between' ,flexDirection:'row',}}>
      <TouchableOpacity onPress={props.handlePress} activeOpacity={0.5} style={styles.row}>
        <Text style={[styles.h2, props.style]}>{props.name}</Text>
      </TouchableOpacity>
      <Badge size={24} style={{
        alignSelf: 'center',
        marginRight: 5,
        backgroundColor: colors.primary
      }}>3</Badge>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'flex-start',
    marginVertical: 8,
    borderBottomColor:colors.gray
  },
  h2: {
    fontSize: 18,
    color: colors.black,
    fontFamily: fonts.MEDIUM,
    marginHorizontal: 12
  },
})
export default ThinNameRow