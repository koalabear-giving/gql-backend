import { gql } from 'graphql-tools'

export default gql`
  # represents a single Photo
  type Photo {
    url: String!
  }

  # represents a Color
  type Color {
    hex: String!
  }

  # represents an Address
  type Address {
    streetAddress: String
    city: String
    state: String
    country: String
    zipCode: String!
  }

  # a generic response to any mutation
  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }

  # input pagination type for determining pagination
  input PaginationInput {
    offset: Integer!
    limit: Integer!
  }

  # interface for what a paginated query returns
  interface Pagination {
    totalCount: Integer!
    pageInfo: PageInfo!
  }

  # info about a page of items that a paginated query returns
  type PageInfo {
    hasMore: Boolean!
    currentOffset: Integer!
    nextOffset: Integer!
  }
`
