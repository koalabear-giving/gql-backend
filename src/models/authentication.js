import bcrypt from 'bcryptjs'
// const jwt = require('jsonwebtoken');

const authentication = () => ({
  signupUser: async user => {
    const hashedPassword = bcrypt.hash(password, 10)
    console.log('SIGNING UP USER')
    console.log(user)
    // send to DB now
  },
  requestPWChange: async ({ email }) => {
    // request password change here
    success = true
    return {
      success,
    }
  },
  verifyFromCode: async ({ verificationCode }) => {
    // verify user from code here
    success = true
    return {
      success,
      user: {},
    }
  },
  login: async ({ email, password }) => {
    correctPassword = checkCredentials(email, password)

    accessToken = generateAccessToken(email)
    refreshToken = getRefreshToken(email)
    success = correctPassword && (accessToken != null && refreshToken != null)
    return {
      accessToken: 'fake_access_token',
      refreshToken: 'fake_refresh_token',
      user: {},
      success,
    }
  },
})

export default authentication
