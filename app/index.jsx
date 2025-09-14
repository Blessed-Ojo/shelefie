import { StyleSheet, Text,} from 'react-native'

import {Link} from 'expo-router'
import ThemeView from '../components/ThemedView'
import ThemeLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemeText from '../components/ThemedText'



const Home = () => {
    
  return (
    <ThemeView style={[styles.container]}>
      <ThemeLogo style={styles.img} />
       <Spacer height={20}/>
      <ThemeText style={styles.title } title={true}>The number 1</ThemeText>
      <Spacer height={10}/>
      <ThemeText>Reading List App</ThemeText>
       <Spacer />
      <Link href="/login"style={styles.link}>
      <ThemeText>
          Login
      </ThemeText>
      </Link>
      <Link href="/register"style={styles.link}>
       <ThemeText>
          Register 
      </ThemeText>
      </Link>
      <Link href="/profile"style={styles.link}>
       <ThemeText>
          profile 
      </ThemeText>
      </Link>
      
    </ThemeView>
  )
}

export default Home

const styles = StyleSheet.create({
     container: {
          flex:1,
          justifyContent: 'center',
          alignItems: 'center',

     },
     title:{
          fontSize: 20,
          fontWeight:"bold",
          

     },
   
     link:{
          marginVertical:20,
          borderBottomWidth:2
     }
    
}) 