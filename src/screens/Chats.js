import React from 'react'
import { View, Text } from 'react-native'
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import MessageComponent from '../components/MessageComponent'
import MessageRequest from '../components/MessageRequest'
import Toast from '../components/Toast'
import * as functions from '../utilities/functions'

const Chats = ({ navigation }) => {

  const handleRequest = async (type) => {
    try {
      const payload = {
        chat_id: 1,
        status: type
      }
      const response = await functions.checkingRequest(payload)
      if (!response.status) throw new Error(response.message)
      if (response.message === "Chat has been accepted") {
        navigation.navigate("Message")
      }
    }
    catch (error) {
      Toast(error.message || "server error")
    }
  }

  return (
    <>
      <MessageRequest handleRequest={handleRequest} />
      <MessageRequest handleRequest={handleRequest} />
      {/* <MessageComponent handlePress={() => navigation.navigate("Message")} /> */}
    </>
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text style={{ color: colors.black, fontFamily:fonts.SEMIBOLD,fontSize:18 }}>No Chats to Influencers</Text>
    // </View>
  )
}
export default Chats