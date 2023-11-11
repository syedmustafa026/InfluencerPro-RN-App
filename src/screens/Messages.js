import React, { useState, useCallback, useEffect } from 'react'
import { Bubble, GiftedChat } from 'react-native-gifted-chat'
import { View, Text } from 'react-native'
import * as colors from "../utilities/colors"
import * as fonts from "../utilities/fonts"
import * as functions from '../utilities/functions'
import Toast from '../components/Toast'

const Message = ({ navigation, route }) => {

  const [messages, setMessages] = useState([])
  const [influencer, setInfluencer] = useState(null)

  const getInfluencer = async () => {
    try {
      const response = await functions.getItem("user")
      setInfluencer(response)
      if (!response.status) throw new Error(response.message)
    } catch (error) {
      Toast(error.message || `${route.name} Server Error`)
    }
  }
  const getMessages = async () => {
    try {
      // const response = await functions.getNewMessages()
      // if (!response.status) throw new Error(response.message)
      // console.log("ress", route.params);
      // setMessages(
      //   response.data.map((chatMessage) => {
      //     console.log("bisme", chatMessage);
      //     return {
      //       _id: chatMessage.id,
      //       text: chatMessage.message,
      //       createdAt: chatMessage.created_at,
      //       user: {
      //         _id: route.params.second_user_id,
      //       }
      //     }
      //   })
      // )
      const filteredArr = route.params.messages.sort((a, b) => a.id - b.id).reverse()
      setMessages(
        filteredArr.map((chatMessage) => {
          return {
            _id: chatMessage.id,
            text: chatMessage.message,
            createdAt: chatMessage.created_at,
            user: {
              _id: route.params.second_user_id,
            }
          }
        })
      )
    }
    catch (error) {
      Toast(error.message || `${route.name} Server Error`)
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
    const filteredArr = route.params.messages.sort((a, b) => a.id - b.id).reverse()
    setMessages(
      filteredArr.map((chatMessage) => {
        return {
          _id: chatMessage.id,
          text: chatMessage.message,
          createdAt: chatMessage.created_at,
          user: {
            _id: route.params.second_user_id,
          }
        }
      })
    )
  }, [])
console.log(route.params.second_user_id);
  const sendMessage = async (text) => {
    const response = await functions.sendMessage({
      user_id: route.params.second_user_id,
      message: text,
      chat_id: route.params.id
    })
    if (!response.status) throw new Error(response.message)
  }
  // useEffect(() => {
  //   const interval = setInterval(() => getMessages(), 2000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    )
    const { text } = messages[0];
    sendMessage(text);
  }, []);
  return (
    <>
      <GiftedChat
        messages={messages}
        scrollToBottom={true}
        placeholder='Send Message...'
        keyboardShouldPersistTaps={'never'}
        renderAvatar={null}
        onSend={messages => onSend(messages)}
        user={{
          _id: influencer?.id,
        }}
        renderBubble={props => {
          return (
            <Bubble
              {...props}
              position={route.params.messages[0]?.message_position}
              textStyle={{
                right: {
                  color: colors.white,
                },
              }}
              wrapperStyle={{
                left: {
                  marginBottom: 25,
                  width: '70%',
                  backgroundColor: colors.white,
                  padding: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,

                  },
                },
                right: {
                  backgroundColor: colors.primary,
                  marginBottom: 25,
                  width: '70%',
                  padding: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                },
              }}
            />
          );
        }}
      />
    </>
  )
}
export default Message
