import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/Splash'
import Signin from '../screens/Signin'
import Signup from '../screens/Signup/index'
import Onboard from '../screens/Onboard'

import * as fonts from '../utilities/fonts'
import * as colors from '../utilities/colors'
import BottomNavigator from '../screens/BottomNavigator'
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Chats from '../screens/Chats'
import Earnings from '../screens/Earnings'
import Categories from '../screens/Categories'
import Influencers from '../screens/Influencers'
import InfluencerDetails from '../screens/InfluencerDetails'
import InfluencerFilter from '../screens/InfluencerFilter'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='BottomNavigator' >
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Onboard" component={Onboard} />

                <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen options={{ headerShown: true, headerTitleStyle: { fontSize: 16, color: colors.secondary, fontFamily: fonts.BOLD } }} name="Categories" component={Categories} />
                <Stack.Screen options={{ headerShown: true, headerTitleStyle: { fontSize: 16, color: colors.secondary, fontFamily: fonts.BOLD } }} name="Influencers" component={Influencers} />
                <Stack.Screen options={{ headerShown: true, title:'Filters', headerTitleStyle: { fontSize: 16, color: colors.secondary, fontFamily: fonts.BOLD } }} name="InfluencerFilter" component={InfluencerFilter} />
                <Stack.Screen name="InfluencerDetails" component={InfluencerDetails} />


                <Stack.Screen name="Chats" component={Chats} />
                <Stack.Screen name="Earnings" component={Earnings} />
                <Stack.Screen name="Profile" component={Profile} />

                <Stack.Screen options={{ headerShown: true, headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16, color: colors.secondary, fontFamily: fonts.BOLD } }} name="Signup" component={Signup} />
                <Stack.Screen options={{ headerShown: true, headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16, color: colors.secondary, fontFamily: fonts.BOLD } }} name="Signin" component={Signin} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator
