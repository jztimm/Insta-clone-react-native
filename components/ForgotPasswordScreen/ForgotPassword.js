import { View, Text, StyleSheet, Pressable, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ForgotPassword = ({navigation}) => {

  return (
    <View style={styles.wrapper}>

      <View style={styles.signupContainer}>
        <Text>Guess you gotta make a new account</Text>
        <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
          <Text style={{color: '#6BB0F5'}}>
            {' '}Sign up
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupContainer}>
        <Text>Or if you remember your email and password</Text>
      </View>
      
      <View style={styles.downArrow}>
        <Image
          source={{uri: 'https://img.icons8.com/fluency-systems-regular/48/000000/long-arrow-down.png', height: 50, width: 50}} />
      </View>

      <View style={styles.LoginContainer}>
        <Pressable
          titleSize={20}
          style={styles.button}
          onPress={() => navigation.push('LoginScreen')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80
  },

  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
    borderWidth: 1,
  },

  button: {
    backgroundColor: '#0096F6',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4
  },

  buttonText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 20,
  },

  signupContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 50
  },

  downArrow: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },

  LoginContainer: {
    marginTop: 25,
  }
})

export default ForgotPassword