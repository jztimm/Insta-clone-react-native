import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import ForgotPassword from '../components/ForgotPasswordScreen/ForgotPassword'

const SORRY_IMG =
  'https://scottcochrane.com/wp-content/uploads/2016/05/shrug.jpg'

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri: SORRY_IMG, height: 200, width: 300}}/>
      </View>
      <ForgotPassword navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60
  }
})

export default ForgotPasswordScreen