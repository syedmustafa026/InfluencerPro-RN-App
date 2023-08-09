import React from 'react'
import { View, Text } from 'react-native'
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import MessageComponent from '../components/MessageComponent'

const Chats = ({ navigation }) => {
  return (
    <MessageComponent handlePress={() => navigation.navigate("Message")} />
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text style={{ color: colors.black, fontFamily:fonts.SEMIBOLD,fontSize:18 }}>No Chats to Influencers</Text>
    // </View>
  )
}
export default Chats