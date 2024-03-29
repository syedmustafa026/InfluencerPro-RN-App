import React, { useState, useEffect } from 'react'
import { View, ActivityIndicator, Text, FlatList, StyleSheet } from 'react-native'
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import MessageComponent from '../components/MessageComponent'
import MessageRequest from '../components/MessageRequest'
import Toast from '../components/Toast'
import * as functions from '../utilities/functions'
import { useIsFocused } from '@react-navigation/native'

const Chats = ({ navigation, route }) => {
  const focused = useIsFocused()
  const [chats, setChats] = useState(false)
  const [influencer, setInfluencer] = useState(null)
  const [loading, setLoading] = useState(true)


  const handleRequest = async (id, type,item) => {
    console.log(id, type);
    try {
      const payload = {
        chat_id: id,
        status: type
      }
      const response = await functions.checkingRequest(payload)
      console.log("rrr", response);
      if (!response.status) throw new Error(response.message)
      if (response.message === "Chat has been accepted") {
        navigation.navigate("Message",item)
      }
    }
    catch (error) {
      Toast(error.message || `${route.name} Server Error`)
    }
  }
  const handleMessageConponent = async (id, item) => {
    console.log(id,item);
    try {
      const payload = {
        id: id,
      }
      const response = await functions.markReadMessage(payload)
      if (!response.status) throw new Error(response.message)
      if (response.status) {
        navigation.navigate("Message", item)
      }
    }
    catch (error) {
      Toast(error.message || `${route.name} Server Error`)
    }
  }
  const getChats = async () => {
    try {
      const response = await functions.getUserChats()
      if (!response.status) throw new Error(response.message)
      if (response.status) {
        setChats(response.data)
        setLoading(false)
      }
    }
    catch (error) {
      Toast(error.message || `${route.name} Server Error`)
    }
    finally {
      setLoading(false)
    }
  }

  const getInfluencer = async () => {
    try {
      const response = await functions.getItem("user")
      if (!response.status) throw new Error(influencer.message)
      setInfluencer(response)
      if (response) getChats()
    } catch (error) {
      Toast(error.message || `${route.name} Server Error`)
    }
  }
  const Item = ({ item }) => {
    return (
      influencer.role.code === "influencer" && item.latest_message === "Sent you a message request!" ?
        <MessageRequest image={item.other_user.image_url} time={item.latest_message_recieved_time_diff} name={item.other_user.brand_name || item.other_user.name} latest_message={item.latest_message} handleRequest={handleRequest} chat_id={item.id} data={item} /> :
        <MessageComponent image={item.other_user.image_url} time={item.latest_message_recieved_time_diff} name={item.other_user.brand_name || item.other_user.name} latest_message={item.latest_message} handlePress={() => handleMessageConponent(item.messages[0]?.chat_id, item)} />
    )
  }
  useEffect(() => {
    if (focused) {
      getInfluencer()
    }
  }, [focused])

  useEffect(() => {
    const interval = setInterval(() => getInfluencer(), 6000)
    return () => {
      clearInterval(interval)
    }
  }, [])
  if (loading) {
    return (
      <View style={styles.errorContainer}>
        <ActivityIndicator animating={true} size={"medium"} color={colors.primary} />
      </View>
    )
  }
  return (
    <>
      {chats.length > 0 ?
        <FlatList
          data={chats}
          renderItem={({ item }) => (<Item item={item} />)}
          keyExtractor={(item, index) => index.toString()}
        /> :
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: colors.black, fontFamily: fonts.SEMIBOLD, fontSize: 18 }}>No Messages</Text>
        </View>}
    </>
  )
}

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
})
export default Chats