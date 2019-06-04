import { gql } from 'apollo-server'

const typeDefs = gql`
  type Query {
    user(id: ID!): User # get user by ID
    currentUser: User! # get info about yourself
  }
  type Mutation {
    ########################## A U T H E N T I C A T I O N   MUTATIONS  ############################
    # sign up a new user; returns Boolean for successful action
    signup(
      email: String!
      password: String!
      firstName: String!
      lastName: String!
      zipcode: String
    ): BasicResponse!

    # verify a user (2FA) with a verification code
    validateFromCode(validationCode: String!): ValidateResponse!

    # login a user given email and password
    login(email: String!, password: String!): LoginResponse!

    # use a refresh token to refresh access (with new access token); essentially like re-logging in
    refreshAccess(refreshToken: String!): LoginResponse!

    # request a password change for a given user; returns Boolean for successful action
    requestPasswordChange(email: String!): BasicResponse!

    # change user password, given verificationCode unique to change-password link
    changePassword(
      email: String!
      newPassword: String!
      verificationCode: String!
    ): ValidateResponse!
    #################################################################################################
  }

  ######################### E N T I T I E S #########################################
  type User {
    id: ID!
    email: String!
    firstName: String
    lastName: String
    address: Address
    role: String
  }

  type Organization {
    id: ID!
    name: String!
    shortDescription: String
    description: String
    type: String
    taxId: String
    photos: [Photo]
    categories: [Category]
    verified: Boolean
  }

  type Category {
    name: String
  }

  type Photo {
    url: String!
  }

  type Address {
    streetAddress: String
    city: String
    state: String
    country: String
    zipCode: String!
  }

  ########################## R E S P O N S E S ############################
  # basic response for a mutation
  type BasicResponse {
    success: Boolean!
  }

  # response for validating a user
  type ValidateResponse {
    success: Boolean!
    user: User
  }

  # response to a login actions
  type LoginResponse { # response to login
    success: Boolean!
    user: User!
    accessToken: String # JWT access token
    refreshToken: String # JWT refresh token
  }
  ###################################################################################
`

export default typeDefs
