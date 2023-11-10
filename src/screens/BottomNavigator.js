import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home.js'
import Favorites from '../screens/Chats.js'
import Messages from '../screens/Earnings.js'
import Profile from './Profile/Profile.js'

import * as colors from "../utilities/colors"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: colors.black,
        tabBarLabelStyle: { padding: 7, color: colors.gray },
        tabBarStyle: {
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          height: 70,
          paddingTop: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          elevation: 24,
        },
      }}>
      <Tab.Screen
        options={{
          title: 'My Influencers',
          headerShown: true,
          tabBarIcon: ({ focused }) => (
            <Icon name='home-outline'
              size={26}
              color={focused ? colors.black : colors.gray} />
          ),
        }}
        name="Home"
        component={Home} />
      <Tab.Screen options={{
        title: 'Chat',
        headerTitle: 'Chats',
        headerTitleAlign: 'center',
        headerStyle: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
        },
        tabBarIcon: ({ focused }) => (
          <Icon name='message-reply-text-outline'
            size={26}
            color={focused ? colors.black : colors.gray} />
        ),
      }}
        name="Chats"
        component={Favorites} />

      <Tab.Screen options={{
        title: 'Earnings',
        headerTitle: 'Earnings',
        headerTitleAlign: 'center',
        headerStyle: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 4,
        },
        tabBarIcon: ({ focused }) => (
          <Icon name='wallet'
            size={26}
            color={focused ? colors.black : colors.gray} />
        ),
      }}
        name="Earnings"
        component={Messages} />
      <Tab.Screen
        options={{
          title: 'Profile',
          headerTitle: 'Profile',
          headerTitleAlign: 'center',
          headerStyle: {
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            elevation: 4,
          },
          tabBarIcon: ({ focused }) => (
            <Icon name='account-outline'
              size={26}
              color={focused ? colors.black : colors.gray} />
          ),
        }
        }
        name="Profile"
        component={Profile}
      />

    </Tab.Navigator>
  )
}

export default BottomNavigator