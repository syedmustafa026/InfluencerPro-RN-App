import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/Splash'
import Login from '../screens/Signin'
import Signin from '../screens/Signin'
import Signup from '../screens/Signup'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen name="Splash" component={Splash} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen name="Signin" component={Signin} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator
