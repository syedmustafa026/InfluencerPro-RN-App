import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { View, Text } from 'react-native'
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import * as functions from '../utilities/functions'
import Toast from '../components/Toast'

const Message = ({ navigation, route }) => {

  console.log("wwwwwwww________", route.params);
  const [messages, setMessages] = useState(route.params.messages)
  const [influencer, setInfluencer] = useState(null)

  const getInfluencer = async () => {
    try {
      const response = await functions.getItem("user")
      setInfluencer(response)
      if (!response.status) throw new Error(response.message)
    } catch (error) {
      Toast(error.message || "Server Error")
    }
  }
  const getMessages = async (type) => {
    try {
      const response = await functions.getNewMessages()
      if (!response.status) throw new Error(response.message)
      setMessages(response.data)
      console.log("www", response);
    }
    catch (error) {
      Toast(error.message || "server error")
    }
  }
  useEffect(() => {
    navigation.setOptions({
      title: route.params.other_user.name,
    })
    getInfluencer()

  }, [])
  useEffect(() => {
    getMessages()
    // setMessages({
    //   _id: 1,
    //   text: 'Hello developer',
    //   createdAt: new Date(),
    //   user: {
    //     _id: 2,
    //     name: 'React Native',
    //     avatar: 'https://loremflickr.com/140/140/any',
    //   },
    // })
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
  }, [])

  return (
    <>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: influencer.id,
        }}
      />
    </>
  )
}
export default Message

// {
//   _id: 1,
//   text: 'Hello developer',
//   createdAt: new Date(),
//   user: {
//     _id: 2,
//     name: 'React Native',
//     avatar: 'https://loremflickr.com/140/140/any',
//   },
// }