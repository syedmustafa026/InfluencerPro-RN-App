import React, { useState, useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import MessageComponent from '../components/MessageComponent'
import MessageRequest from '../components/MessageRequest'
import Toast from '../components/Toast'
import * as functions from '../utilities/functions'
import Separator from '../components/Separator'

const Chats = ({ navigation }) => {
  const [chats, setChats] = useState(false)

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

  const getChats = async () => {
    try {
      const response = await functions.getUserChats()
      if (!response.status) throw new Error(response.message)
      setChats(response.data)
    }
    catch (error) {
      Toast(error.message || "server error")
    }
  }
  useEffect(() => {
    getChats()
  }, [])

  const Item = ({ item }) => {
    return (
      item.latest_message === "Sent you a message request!" ?
        <MessageRequest image={item.other_user.image_url} time={item.latest_message_recieved_time_diff} name={item.other_user.brand_name} latest_message={item.latest_message} handleRequest={handleRequest} /> :
        <MessageComponent image={item.other_user.image_url} time={item.latest_message_recieved_time_diff} name={item.other_user.brand_name} latest_message={item.latest_message} handlePress={() => navigation.navigate("Message")} />
    )
  }
  return (
    <>
      <FlatList
        data={chats}
        renderItem={({ item }) => (<Item item={item} />)}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text style={{ color: colors.black, fontFamily:fonts.SEMIBOLD,fontSize:18 }}>No Chats to Influencers</Text>
    // </View>
  )
}
export default Chats