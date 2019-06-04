import { gql } from 'graphql-tools'

const typeDefs = gql`
  type Mutation {
    ########################## M U T A T I O N S  ############################
    # sign up a new user; returns Boolean for successful action
    signup(input: SignupInput!): MutationResponse!

    # verify a user (2FA) with a verification code
    validateFromCode(validationCode: String!): ValidateResponse!

    # login a user given email and password
    login(email: String!, password: String!): LoginResponse!

    # use a refresh token to refresh access (with new access token); essentially like re-logging in
    refreshAccess(refreshToken: String!): LoginResponse!

    # request a password change for a given user; returns Boolean for successful action
    requestPasswordChange(email: String!): MutationResponse!

    # change user password, given verificationCode unique to change-password link
    changePassword(
      email: String!
      newPassword: String!
      verificationCode: String!
    ): ValidateResponse!
  }
  ##############################################################################

  ##########################  I N P U T S  ################################
  input SignupInput {
    email: String!
    password: String!
    firstName: String!
    lastName: String!
    zipcode: String
  }
  ##############################################################################

  ##########################  T Y P E S  #####################################

  type ValidateResponse implements MutationResponse {
    success: Boolean!
    code: String!
    message: String!
    user: User
  }
  type LoginResponse implements MutationResponse { # response to login
    success: Boolean!
    code: String!
    message: String!
    user: User!
    accessToken: String # JWT access token
    refreshToken: String # JWT refresh token
  }
  ##############################################################################
`
