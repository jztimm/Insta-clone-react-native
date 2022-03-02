import React, {useState} from 'react'
import {
  View,
  Text,
  TextInput, StyleSheet,
  Pressable,
  TouchableOpacity,
  Alert
} from 'react-native'
import firebase from '../../firebase'

import {Formik} from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'


const LoginForm = ({navigation}) => {

  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required('An email is required'),
    password: Yup.string().required().min(6, 'Your password has to have at least 8 characters')
  })

  const onLogin = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      console.log("🔥 Firebase Login Successful : ✔", email, password)
    } catch(err) {
      Alert.alert(
        'Oops!',
        err.message + '\n\n What would you like to do next?',
        [
          {
            text: 'Go Back',
            onPress: () => console.log('OK'),
            style: 'cancel'
          },
          {
            text: 'Sign Up',
            onPress: () => navigation.push('SignupScreen')
          }
        ]
      )
    }
  }

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={(values) => {
          onLogin(values.email, values.password)
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({handleChange, handleBlur, handleSubmit, values, isValid}) => 
        (
          <>
            <View 
              style={[
                styles.inputField,
                {borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red'}
              ]}
            >
              <TextInput
                placeholderTextColor='#444'
                placeholder='Phone number, username or email'
                autoCapitalize='none'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>

            <View style={[
                styles.inputField,
                {borderColor: 1 > values.password.length || values.password.length > 5 ? '#ccc' : 'red'}
              ]}>
              <TextInput
                placeholderTextColor='#444'
                placeholder='Password'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={true}
                textContentType='password'
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
            </View>
            <TouchableOpacity
              style={{alignItems: 'flex-end', marginBottom: 30}}
              onPress={() => navigation.push('ForgotPasswordScreen')}
            >
              <Text style={{color: '#6BB0F5'}}>Forgot password</Text>
            </TouchableOpacity>

            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Log in</Text>
            </Pressable>

            <View style={styles.signupContainer}>
              <Text>Don't have an ccount?</Text>
              <TouchableOpacity onPress={() => navigation.push('SignupScreen')}>
                <Text style={{color: '#6BB0F5'}}>
                  {' '}Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
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

  button: isValid => ({
    backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    borderRadius: 4
  }),

  buttonText: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 20
  },
  signupContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    marginTop: 50
  }
})

export default LoginForm