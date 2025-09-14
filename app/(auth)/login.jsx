import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../../constants/colors'

import ThemeView from '../../components/ThemedView'
import ThemeText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemeButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useState } from 'react'
import { useUser } from '../../hooks/useUser'


const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState()
  const [error, setError] = useState(null)
  const {user ,login} = useUser()
 
   const handleSubmit = async()=>{
    setError(null)
    try {
      await login(email,password)
      console.log('current user is:' ,user)
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <ThemeView style={styles.container}>

      <Spacer />

      <ThemeText title={true} style={styles.title}>
        Login to Your Account
      </ThemeText>

      <ThemedTextInput
        style={{ width: "80%", marginBottom: 20 }}
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <ThemedTextInput
        style={{ width: "80%", marginBottom: 20 }}
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
      />


      <ThemeButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Login</Text>
      </ThemeButton>
      <Spacer />

      {error && <Text style={styles.error}>{error}</Text>}
        <Spacer height={100} />
      <Link href="/register" replace>
        <ThemeText style={{ textAlign: "center" }}>
          Register instead
        </ThemeText>
      </Link>
    </ThemeView>
    </TouchableWithoutFeedback>
   
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,

  },
  pressed: {
    opacity: 0.8
  },
  error :{  
    color: Colors.warning,
    padding: 10,
    backgroundColor: '#f5c1c8',
    borderColor: Colors.warning,
    borderWidth: 1,
    borderRadius: 6,
    marginHorizontal: 10,}
  
})