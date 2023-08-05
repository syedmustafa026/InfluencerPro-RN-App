import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/Splash'
import Signin from '../screens/Signin/index'
import Signup from '../screens/Signup/index'
import Onboard from '../screens/Onboard'

import * as fonts from '../utilities/fonts'
import * as colors from '../utilities/colors'
import BottomNavigator from '../screens/BottomNavigator'
import Home from '../screens/Home'
import Profile from '../screens/Profile/Profile'
import Chats from '../screens/Chats'
import Earnings from '../screens/Earnings'
import Categories from '../screens/Categories'
import Influencers from '../screens/Influencers'
import InfluencerDetails from '../screens/InfluencerDetails'
import InfluencerFilter from '../screens/InfluencerFilter'
import About from '../screens/Profile/About'
import Address from '../screens/Profile/Address'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Splash' >
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Onboard" component={Onboard} />

                <Stack.Screen options={{ headerShown: true, headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16, color: colors.secondary, fontFamily: fonts.BOLD } }} name="Signup" component={Signup} />
                <Stack.Screen options={{ headerShown: true, headerTitleAlign: 'center', headerTitleStyle: { fontSize: 16, color: colors.secondary, fontFamily: fonts.BOLD } }} name="Signin" component={Signin} />

                <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen options={{ headerShown: true, headerTitleStyle: { fontSize: 16, color: colors.secondary, fontFamily: fonts.BOLD } }} name="Categories" component={Categories} />
                <Stack.Screen options={{ headerShown: true, headerTitleStyle: { fontSize: 16, color: colors.secondary, fontFamily: fonts.BOLD } }} name="Influencers" component={Influencers} />
                <Stack.Screen options={{ headerShown: true, title: 'Filters', headerTitleStyle: { fontSize: 16, color: colors.secondary, fontFamily: fonts.BOLD } }} name="InfluencerFilter" component={InfluencerFilter} />
                <Stack.Screen name="InfluencerDetails" component={InfluencerDetails} />


                <Stack.Screen options={{ headerShown: true, headerTitleStyle: { fontSize: 16, color: colors.secondary, fontFamily: fonts.BOLD } }} name="Chats" component={Chats} />
                <Stack.Screen options={{ headerShown: true, headerTitleStyle: { fontSize: 16, color: colors.secondary, fontFamily: fonts.BOLD } }} name="Earnings" component={Earnings} />

                <Stack.Screen options={{ headerShown: true, headerTitleStyle: { fontSize: 16, color: colors.secondary, fontFamily: fonts.BOLD } }} name="Profile" component={Profile} />
                <Stack.Screen options={{ headerShown: true, headerTitleStyle: { fontSize: 16, color: colors.secondary, fontFamily: fonts.BOLD } }} name="About" component={About} />
                <Stack.Screen options={{ headerShown: true, headerTitleStyle: { fontSize: 16, color: colors.secondary, fontFamily: fonts.BOLD } }} name="Address" component={Address} />



            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator
