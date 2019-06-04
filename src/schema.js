import { gql } from 'graphql-tools'

const typeDefs = gql`
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

  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }
`
