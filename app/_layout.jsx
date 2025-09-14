import {useColorScheme,  } from 'react-native'
 import { Colors } from '../constants/colors'
 import {Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { UserProvider } from '../contexts/UserContext'

const RootLayout = () => {
  const colorScheme = useColorScheme()
   const theme = Colors[colorScheme] ?? Colors.light
    
  return (
    <UserProvider>
    <StatusBar value="auto" />
    <Stack screenOptions={{headerStyle:{backgroundColor:theme.navBackground},
      headerTintColor:theme.title,headerTitleStyle:{fontWeight:'bold',fontFamily:"Roboto", fontSize:20, color:theme.text},
    }}>
          <Stack.Screen name="index" options={{ title: 'Home',headerShown:false }} />
          
          <Stack.Screen name="(auth)" options={{headerShown:false }} />
          <Stack.Screen name="(dashboard)" options={{headerShown:false }} />
         
    </Stack>
    </UserProvider>
  )
}

export default RootLayout