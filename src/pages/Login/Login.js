/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable no-undef */
/* eslint-disable no-empty-pattern */

import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { StyleSheet, View, StatusBar } from 'react-native'
import SocialLoginScreen from 'react-native-social-login-screen'
import { colors } from 'theme'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Button } from 'react-native-elements'
import { SCLAlert, SCLAlertButton } from 'react-native-scl-alert'
import { auth } from '../../../firebase.config'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const Login = ({ }) => {
  const [name, setName] = useState('')
  const [pass, setPasssword] = useState('')
  const [show, setShow] = useState(Boolean(false))

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Button title="Solid" type="solid" icon="home" iconRight />
      <SCLAlert
        theme="info"
        show={show}
        title="Lorem"
        subtitle="Lorem ipsum dolor"
      >
        <SCLAlertButton theme="info" onPress={() => setShow(false)}>Done</SCLAlertButton>
      </SCLAlert>

      <SocialLoginScreen
        onUserNameChangeText={(username) => {
          console.log('Username: ', username)
          setName(username)
        }}
        onPasswordChangeText={(password) => {
          console.log('Password: ', password)
          setPasssword(password)
        }}
        signUpText="註冊"
        // signUpTextStyle={}
        onSignUpPress={async () => {
          console.log('pres me')
        }}
        loginTitleText=""
        loginText="登入"
        onLoginPress={async () => {
          try {
            const user = await createUserWithEmailAndPassword(auth, name, pass)
            console.log('user here', user)
          } catch (error) {
            setShow(true)
            console.log('login preess error', error)
          }
        }}
        forgotPasswordText="忘記密碼?"
        onForgotPasswordPress={() => {
          console.log('forget press')
        }}
        enableFacebookLogin
        onFacebookLoginPress={() => { }}
        enableDiscordLogin
        onDiscordLoginPress={() => { }}
        enableTwitterLogin
        onTwitterLoginPress={() => { }}
        enableGoogleLogin
        onGoogleLoginPress={() => { }}
        rightTopAssetImageSource={() => { }}
        leftBottomAssetImageSource={() => { }}
      />
    </View>
  )
}

export default Login
