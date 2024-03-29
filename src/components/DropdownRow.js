import React from 'react';
import { StyleSheet, Text,View, TouchableOpacity, } from 'react-native';
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"


const DropdownRow = (props) => {
  return (
    <TouchableOpacity onPress={props.handlePress} style={{justifyContent:'space-between' ,flexDirection:'row'}}>
      <TouchableOpacity  activeOpacity={0.5} style={styles.row}>
        <Text onPress={props.handlePress} style={[styles.h2, props.style]}>{props.name}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
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
export default DropdownRow