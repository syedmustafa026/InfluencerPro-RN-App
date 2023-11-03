import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { View, Text } from 'react-native'
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import * as functions from '../utilities/functions'
import Toast from '../components/Toast'

const Message = () => {
  const [messages, setMessages] = useState([])

  const getMessages = async (type) => {
    try {
      const response = await functions.getNewMessages()
      if (!response.status) throw new Error(response.message)
      setMessages(response.data)
    }
    catch (error) {
      Toast(error.message || "server error")
    }
  }
  useEffect(() => {
    getMessages()
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
          _id: 1,
        }}
      />
    </>
  )
}
export default Message